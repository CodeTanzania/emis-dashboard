/* eslint  no-underscore-dangle: 'off' */

import React, { Component } from 'react';
import {
  Modal,
  Form,
  Select,
  Input,
  DatePicker,
  InputNumber,
  Spin,
} from 'antd';
import {
  createResourceStock,
  createResourceStockAdjustment,
  loadResourceAdjustmentSchema,
  findStakeholders,
  findResourceItems,
  findWarehouses,
} from '../../../../common/API';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

class AdjustStockForm extends Component {
  state = {
    adjustingStock: false,
    fetchingOwner: false,
    owners: [],
    fetchingItem: false,
    items: [],
    fetchingWarehouse: false,
    warehouses: [],
  };

  componentDidMount() {
    if (!this.props.itemSchema) {
      // Set resource item schema is not set then set it
      loadResourceAdjustmentSchema().then(result => {
        this.props.setResourceAdjustmentSchema(result);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stockToAdjust !== this.props.stockToAdjust) {
      const stock = nextProps.stockToAdjust;
      if (stock && stock.item) {
        // It's stock adjustment
        setTimeout(() => {
          // Here setTimeout is used to allow time
          // for the form field to render before
          // setting their value with setFieldsValue
          nextProps.form.setFieldsValue({
            item: stock.item.name,
            owner: stock.owner.name,
          });
        });
      }
    }
  }

  handleSaveAdjustment = () => {
    const { form, stockToAdjust } = this.props;
    const isStockUpdate = !!(stockToAdjust && stockToAdjust.item);
    form.validateFields(errors => {
      if (errors) {
        // There is the validation error, quit save
        return;
      }
      const fields = form.getFieldsValue();
      const data = {
        ...fields,
      };
      if (isStockUpdate) {
        data.item = stockToAdjust.item._id;
        data.owner = stockToAdjust.owner._id;
      } else {
        data.type = 'Addition';
      }
      if (fields.expiredAt) {
        data.expiredAt = fields.expiredAt.toDate();
      }

      // TODO set stock adjustment party from login data
      // instead of hard coded data like below
      data.party = '5bf53663ec917e0004c5323a';
      this.setState({ adjustingStock: true });
      if (!isStockUpdate) {
        // It's new stock, create it
        // and make initial adjustment
        createResourceStock(data)
          .then(stock => {
            data.stock = stock._id;
            return createResourceStockAdjustment(data);
          })
          .then(() => {
            // TODO refresh stock adjusted & dismiss stock form
            this.setState({ adjustingStock: false });
            this.props.dismissStockAdjustmentForm();
            this.props.getResourceStocks();
          })
          .catch(() => this.setState({ adjustingStock: false }));
      } else {
        createResourceStockAdjustment(data)
          .then(() => {
            // TODO refresh stock adjusted & dismiss stock form
            this.setState({ adjustingStock: false });
            this.props.dismissStockAdjustmentForm();
            this.props.getResourceStocks();
          })
          .catch(() => this.setState({ adjustingStock: false }));
      }
    });
  };

  handleCancelAdjustment = () => {
    this.props.dismissStockAdjustmentForm();
  };

  handleFetchOwner = value => {
    this.setState({ fetchingOwner: true });
    findStakeholders({ q: value })
      .then(result => {
        this.setState({ owners: result.data, fetchingOwner: false });
      })
      .catch(() => this.setState({ fetchingOwner: false }));
  };

  handleFetchItems = value => {
    this.setState({ fetchingItem: true });
    findResourceItems({ q: value })
      .then(result => {
        this.setState({ items: result.data, fetchingItem: false });
      })
      .catch(() => this.setState({ fetchingItem: false }));
  };

  handleFetchWarehouses = value => {
    this.setState({ fetchingWarehouse: true });
    findWarehouses({ q: value })
      .then(result => {
        this.setState({ warehouses: result.data, fetchingWarehouse: false });
      })
      .catch(() => this.setState({ fetchingWarehouse: false }));
  };

  render() {
    const {
      adjustingStock,
      owners,
      fetchingOwner,
      items,
      fetchingItem,
      fetchingWarehouse,
      warehouses,
    } = this.state;
    const { stockToAdjust, form, adjustmentSchema } = this.props;
    const { getFieldDecorator } = form;
    const showAdjustForm = stockToAdjust !== null;
    // Check if is stock update form
    const isStockUpdate = !!(stockToAdjust && stockToAdjust.item);
    let title = '';
    if (isStockUpdate) {
      title = (
        <span>
          Adjust <strong>{stockToAdjust.item.name}</strong>
        </span>
      );
    } else {
      title = <span>New stock</span>;
    }

    const formItemLayout = {
      labelCol: {
        span: 7,
      },
      wrapperCol: {
        span: 15,
      },
    };
    return (
      <Modal
        width="40%"
        placement="right"
        visible={showAdjustForm}
        onCancel={this.handleCancelAdjustment}
        onOk={this.handleSaveAdjustment}
        maskClosable={false}
        confirmLoading={adjustingStock}
        okText={isStockUpdate ? 'Adjust' : 'Save'}
        title={title}
      >
        {stockToAdjust && adjustmentSchema ? (
          <div>
            <Form>
              <FormItem {...formItemLayout} label="Owner">
                {getFieldDecorator('owner', {
                  rules: [
                    {
                      required: true,
                      message: 'Owner must be specified',
                    },
                  ],
                })(
                  <Select
                    showSearch
                    placeholder="Select owner"
                    notFoundContent={
                      fetchingOwner ? <Spin size="small" /> : null
                    }
                    filterOption={false}
                    onSearch={this.handleFetchOwner}
                    disabled={isStockUpdate}
                  >
                    {owners.map(owner => (
                      <Option key={owner._id}>{owner.name}</Option>
                    ))}
                  </Select>
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="Item">
                {getFieldDecorator('item', {
                  rules: [
                    {
                      required: true,
                      message: 'Item must be specified',
                    },
                  ],
                })(
                  <Select
                    showSearch
                    placeholder="Select item"
                    notFoundContent={
                      fetchingItem ? <Spin size="small" /> : null
                    }
                    filterOption={false}
                    onSearch={this.handleFetchItems}
                    disabled={isStockUpdate}
                  >
                    {items.map(item => (
                      <Option key={item._id}>{item.name}</Option>
                    ))}
                  </Select>
                )}
              </FormItem>
              {!isStockUpdate && (
                <FormItem {...formItemLayout} label="Store">
                  {getFieldDecorator('store', {
                    rules: [
                      {
                        required: true,
                        message: 'Store must be specified',
                      },
                    ],
                  })(
                    <Select
                      showSearch
                      placeholder="Select store"
                      notFoundContent={
                        fetchingWarehouse ? <Spin size="small" /> : null
                      }
                      filterOption={false}
                      onSearch={this.handleFetchWarehouses}
                    >
                      {warehouses.map(warehouse => (
                        <Option key={warehouse._id}>{warehouse.name}</Option>
                      ))}
                    </Select>
                  )}
                </FormItem>
              )}
              {isStockUpdate && (
                <FormItem {...formItemLayout} label="Adjustment Type">
                  {getFieldDecorator('type', {
                    rules: [
                      {
                        required: adjustmentSchema.required.some(
                          property => property === 'type'
                        ),
                        message: 'Please select adjustment type',
                      },
                    ],
                  })(
                    <Select placeholder="Adjustment Type">
                      {adjustmentSchema.properties.type.enum.map(enumValue => (
                        <Option key={enumValue}>{enumValue}</Option>
                      ))}
                    </Select>
                  )}
                </FormItem>
              )}
              <FormItem {...formItemLayout} label="Reason">
                {getFieldDecorator('reason', {
                  rules: [
                    {
                      required: adjustmentSchema.required.some(
                        property => property === 'reason'
                      ),
                      message: 'Please select adjustment reason',
                    },
                  ],
                })(
                  <Select placeholder="Reason">
                    {adjustmentSchema.properties.reason.enum.map(enumValue => (
                      <Option key={enumValue} value={enumValue}>
                        {enumValue}
                      </Option>
                    ))}
                  </Select>
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="Quantity">
                {getFieldDecorator('quantity', {
                  rules: [
                    {
                      required: adjustmentSchema.required.some(
                        property => property === 'quantity'
                      ),
                      message: 'Please specify quantity',
                    },
                    {
                      type: 'number',
                      message: 'Quantity must be a number',
                    },
                  ],
                })(<InputNumber placeholder="Quantity" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Cost">
                {getFieldDecorator('cost', {
                  rules: [
                    {
                      required: adjustmentSchema.required.some(
                        property => property === 'cost'
                      ),
                      message: 'Please specify cost',
                    },
                    {
                      type: 'number',
                      message: 'Cost must be a number',
                    },
                  ],
                })(<InputNumber placeholder="Cost" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Expire Date">
                {getFieldDecorator('expiredAt')(<DatePicker />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Remarks">
                {getFieldDecorator('remarks', {
                  rules: [
                    {
                      required: adjustmentSchema.required.some(
                        property => property === 'remarks'
                      ),
                      message: 'Please specify remarks',
                    },
                  ],
                })(<TextArea rows={5} />)}
              </FormItem>
            </Form>
          </div>
        ) : (
          ''
        )}
      </Modal>
    );
  }
}

export default Form.create()(AdjustStockForm);
