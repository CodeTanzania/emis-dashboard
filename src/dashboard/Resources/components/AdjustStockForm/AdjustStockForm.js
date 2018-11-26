/* eslint  no-underscore-dangle: 'off' */

import React, { Component } from 'react';
import { Modal, Form, Select, Input, DatePicker } from 'antd';
import { createResourceStockAdjustment } from '../../../../common/API';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

class AdjustStockForm extends Component {
  state = { adjustingStock: false };

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
        })
        .catch(() => this.setState({ adjustingStock: false }));
    });
  };

  handleCancelAdjustment = () => {
    this.props.cancelAdjustStock();
  };

  render() {
    const { adjustingStock } = this.state;
    const { stockToAdjust, form } = this.props;
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
        {stockToAdjust ? (
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
                      required: true,
                      message: 'Please select adjustment type',
                    },
                  ],
                })(
                  <Select placeholder="Adjustment Type">
                    <Option value="Addition">Addition</Option>
                    <Option value="Deduction">Deduction</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="Quantity">
                {getFieldDecorator('quantity', {
                  rules: [
                    {
                      required: true,
                      message: 'Please specify quantity',
                    },
                  ],
                })(<Input type="number" placeholder="Quantity" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Expire Date">
                {getFieldDecorator('expiredAt')(<DatePicker />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Remarks">
                <TextArea rows={5} />
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
