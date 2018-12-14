/* eslint  no-underscore-dangle: 'off' */

import React, { Component } from 'react';
import { Modal, Form, Select, Input, DatePicker, InputNumber } from 'antd';
import {
  createResourceStockAdjustment,
  loadResourceAdjustmentSchema,
} from '../../../../common/API';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

class AdjustStockForm extends Component {
  state = { adjustingStock: false };

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
      if (stock) {
        // Here setTimeout is used to allow time
        // for the form field to render before
        // setting their value with setFieldsValue
        setTimeout(() => {
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
    form.validateFields(errors => {
      if (errors) {
        // There is the validation error, quit save
        return;
      }
      const fields = form.getFieldsValue();
      const data = {
        ...fields,
        item: stockToAdjust.item._id,
        party: stockToAdjust.owner._id,
      };
      if (fields.expiredAt) {
        data.expiredAt = fields.expiredAt.toDate();
      }
      this.setState({ adjustingStock: true });
      createResourceStockAdjustment(data)
        .then(() => {
          // TODO refresh stock adjusted & dismiss stock form
          this.setState({ adjustingStock: false });
          this.props.dismissStockAdjustmentForm();
        })
        .catch(() => this.setState({ adjustingStock: false }));
    });
  };

  handleCancelAdjustment = () => {
    this.props.dismissStockAdjustmentForm();
  };

  render() {
    const { adjustingStock } = this.state;
    const { stockToAdjust, form, adjustmentSchema } = this.props;
    const { getFieldDecorator } = form;
    const showAdjustForm = stockToAdjust !== null;
    let title = '';
    if (stockToAdjust) {
      title = (
        <span>
          Adjust <strong>{stockToAdjust.item.name}</strong>
        </span>
      );
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
        okText="Adjust"
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
                })(<Input type="text" disabled />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Item">
                {getFieldDecorator('item', {
                  rules: [
                    {
                      required: true,
                      message: 'Item must be specified',
                    },
                  ],
                })(<Input type="text" disabled />)}
              </FormItem>
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
                      <Option key={enumValue} value={enumValue}>
                        {enumValue}
                      </Option>
                    ))}
                  </Select>
                )}
              </FormItem>
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
