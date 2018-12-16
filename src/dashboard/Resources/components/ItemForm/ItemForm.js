/* eslint  no-underscore-dangle: 'off' */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Select, Input, InputNumber, Switch, message } from 'antd';
import {
  loadResourceItemSchema,
  createResourceItem,
} from '../../../../common/API';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

class ItemForm extends Component {
  state = { saving: false };

  static propTypes = {
    showForm: PropTypes.bool.isRequired,
    item: PropTypes.shape({
      _id: PropTypes.string,
    }),
    itemSchema: PropTypes.shape({
      properties: PropTypes.object,
    }),
    dismissItemForm: PropTypes.func.isRequired,
    setResourceSchema: PropTypes.func.isRequired,
  };

  static defaultProps = {
    item: null,
    itemSchema: null,
  };

  componentDidMount() {
    if (!this.props.itemSchema) {
      // Set resource item schema is not set then set it
      loadResourceItemSchema().then(result => {
        this.props.setResourceSchema(result);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item !== this.props.item) {
      const { item, form } = nextProps;
      if (item) {
        // Here setTimeout is used to allow time
        // for the form field to render before
        // setting their value with setFieldsValue
        setTimeout(() => {
          const formFields = Object.keys(form.getFieldsValue());
          // set field values only available in a form to prevent
          // antd warning i.e you cannot set field before registering it.
          const fieldsValues = {};
          formFields.forEach(field => {
            fieldsValues[field] = item[field];
            return fieldsValues[field];
          });
          form.setFieldsValue(fieldsValues);
        });
      }
    }
  }

  handleSaveItem = () => {
    const { form } = this.props;
    form.validateFields(errors => {
      if (errors) {
        // There is the validation error, quit save
        return;
      }
      const fields = form.getFieldsValue();
      const data = { ...fields };
      this.setState({ saving: true });
      createResourceItem(data)
        .then(() => {
          // TODO refresh resource items
          this.props.form.resetFields();
          this.setState({ saving: false });
          message.success(`${data.name} successfully saved`);
        })
        .catch(() => {
          this.setState({ saving: false });
          message.error(`${data.name} cannot be saved`);
        });
    });
  };

  handleDismissForm = () => {
    this.props.form.resetFields();
    this.props.dismissItemForm();
  };

  render() {
    const { saving } = this.state;
    const { item, showForm, form, itemSchema } = this.props;
    const { getFieldDecorator } = form;

    const title = item ? (
      <span>
        Edit <strong>{item.name}</strong>{' '}
      </span>
    ) : (
      'New Resource Item'
    );

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
        visible={showForm}
        onCancel={this.handleDismissForm}
        onOk={this.handleSaveItem}
        maskClosable={false}
        confirmLoading={saving}
        okText={item ? 'Update' : 'Add Item'}
        title={title}
      >
        {itemSchema ? (
          <Form>
            <FormItem {...formItemLayout} label="Name">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: itemSchema.required.some(
                      property => property === 'name'
                    ),
                    message: 'Item name must be specified',
                  },
                ],
              })(<Input type="text" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Code">
              {getFieldDecorator('code', {
                rules: [
                  {
                    required: itemSchema.required.some(
                      property => property === 'code'
                    ),
                    message: 'Item code must be specified',
                  },
                ],
              })(<Input type="text" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Type">
              {getFieldDecorator('type', {
                rules: [
                  {
                    required: itemSchema.required.some(
                      property => property === 'type'
                    ),
                    message: 'Item type must be specified',
                  },
                ],
              })(
                <Select placeholder="Select Type">
                  {itemSchema.properties.type.enum.map(enumValue => (
                    <Option key={enumValue} value={enumValue}>
                      {enumValue}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Unit">
              {getFieldDecorator('uom', {
                rules: [
                  {
                    required: itemSchema.required.some(
                      property => property === 'uom'
                    ),
                    message: 'Item unit must be specified',
                  },
                ],
              })(
                <Select placeholder="Select Unit">
                  {itemSchema.properties.uom.enum.map(enumValue => (
                    <Option key={enumValue} value={enumValue}>
                      {enumValue}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Color">
              {getFieldDecorator('color', {
                rules: [
                  {
                    required: itemSchema.required.some(
                      property => property === 'color'
                    ),
                    message: 'Item Color must be specified',
                  },
                ],
              })(
                <Select placeholder="Select Color">
                  {itemSchema.properties.color.enum.map(enumValue => (
                    <Option key={enumValue} value={enumValue}>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '20px',
                          height: '10px',
                          backgroundColor: `${enumValue}`,
                        }}
                      />{' '}
                      {enumValue}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Description">
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: itemSchema.required.some(
                      property => property === 'description'
                    ),
                    message: 'Item description must be specified',
                  },
                ],
              })(<TextArea rows={4} />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Expirable">
              {getFieldDecorator('expirable', {
                valuePropName: 'checked',
              })(<Switch />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Minimum">
              {getFieldDecorator('minStockAllowed', {
                rules: [
                  {
                    required: itemSchema.required.some(
                      property => property === 'minStockAllowed'
                    ),
                    message: 'Item minimum value cannot be empty',
                  },
                  {
                    type: 'number',
                    message: ' Item minimum value must be a number',
                  },
                ],
              })(<InputNumber />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Maximum">
              {getFieldDecorator('maxStockAllowed', {
                rules: [
                  {
                    required: itemSchema.required.some(
                      property => property === 'maxStockAllowed'
                    ),
                    message: 'Item maximum value cannot be empty',
                  },
                  {
                    type: 'number',
                    message: 'Item maximum value must be a number',
                  },
                ],
              })(<InputNumber />)}
            </FormItem>
          </Form>
        ) : (
          ''
        )}
      </Modal>
    );
  }
}

export default Form.create()(ItemForm);
