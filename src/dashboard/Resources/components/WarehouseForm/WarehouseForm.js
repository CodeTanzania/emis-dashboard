/* eslint  no-underscore-dangle: 'off' */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Select, Input, message } from 'antd';
import {
  loadWarehouseSchema,
  createWarehouse,
  updateWarehouse,
} from '../../../../common/API';

const FormItem = Form.Item;
const { Option } = Select;

class WarehouseForm extends Component {
  state = { saving: false };

  static propTypes = {
    showForm: PropTypes.bool.isRequired,
    warehouse: PropTypes.shape({
      _id: PropTypes.string,
    }),
    warehouseSchema: PropTypes.shape({
      properties: PropTypes.object,
    }),
    dismissWarehouseForm: PropTypes.func.isRequired,
    setWarehouseSchema: PropTypes.func.isRequired,
    getWarehouses: PropTypes.func.isRequired,
  };

  static defaultProps = {
    warehouse: null,
    warehouseSchema: null,
  };

  componentDidMount() {
    if (!this.props.warehouseSchema) {
      // Set resource warehouse schema is not set then set it
      loadWarehouseSchema().then(result => {
        this.props.setWarehouseSchema(result);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.warehouse !== this.props.warehouse) {
      const fieldsValues = { category: 'Building' };
      const { warehouse, form } = nextProps;
      if (warehouse && warehouse._id) {
        //  Wwarehouse exist
        const formFields = Object.keys(form.getFieldsValue());
        // set field values only available in a form to prevent
        // antd warning i.e you cannot set field before registering it.
        formFields.forEach(field => {
          fieldsValues[field] = warehouse[field];
          return fieldsValues[field];
        });
      }
      // Here setTimeout is used to allow time
      // for the form field to render before
      // setting their value with setFieldsValue
      setTimeout(() => {
        form.setFieldsValue(fieldsValues);
      });
    }
  }

  handleSaveWarehouse = () => {
    const { form, warehouse } = this.props;
    form.validateFields(errors => {
      if (errors) {
        // There is the validation error, quit save
        return;
      }
      const fields = form.getFieldsValue();
      const data = { ...fields, type: 'Warehouse' };
      this.setState({ saving: true });
      if (warehouse._id) {
        updateWarehouse(warehouse._id, data)
          .then(() => {
            // TODO refresh resource items
            this.props.form.resetFields();
            this.setState({ saving: false });
            message.success(`${data.name} successfully updated`);
            this.props.getWarehouses();
            this.props.dismissWarehouseForm();
          })
          .catch(() => {
            this.setState({ saving: false });
            message.error(`${data.name} cannot be updated`);
          });
      } else {
        createWarehouse(data)
          .then(() => {
            // TODO refresh resource items
            this.props.form.resetFields();
            this.setState({ saving: false });
            message.success(`${data.name} successfully added`);
            this.props.getWarehouses();
            this.props.dismissWarehouseForm();
          })
          .catch(() => {
            this.setState({ saving: false });
            message.error(`${data.name} cannot be created`);
          });
      }
    });
  };

  handleDismissForm = () => {
    this.props.form.resetFields();
    this.props.dismissWarehouseForm();
  };

  render() {
    const { saving } = this.state;
    const { warehouse, showForm, form, warehouseSchema } = this.props;
    const { getFieldDecorator } = form;
    const isUpdateWarehouse = warehouse && warehouse._id;

    const title = isUpdateWarehouse ? (
      <span>
        Edit <strong>{warehouse.name}</strong>{' '}
      </span>
    ) : (
      'New Warehouse'
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
        onOk={this.handleSaveWarehouse}
        maskClosable={false}
        confirmLoading={saving}
        okText={isUpdateWarehouse ? 'Update' : 'Create Warehouse'}
        title={title}
      >
        {warehouseSchema ? (
          <Form>
            <FormItem {...formItemLayout} label="Name">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: warehouseSchema.required.some(
                      property => property === 'name'
                    ),
                    message: 'Warehouse name must be specified',
                  },
                ],
              })(<Input type="text" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Category">
              {getFieldDecorator('category', {
                rules: [
                  {
                    required: warehouseSchema.required.some(
                      property => property === 'category'
                    ),
                    message: 'Warehouse category must be specified',
                  },
                ],
              })(
                <Select placeholder="Select Category" disabled>
                  {warehouseSchema.properties.category.enum.map(enumValue => (
                    <Option key={enumValue} value={enumValue}>
                      {enumValue}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Continent">
              {getFieldDecorator('continent', {
                rules: [
                  {
                    required: warehouseSchema.required.some(
                      property => property === 'continent'
                    ),
                    message: 'Warehouse continent must be specified',
                  },
                ],
              })(
                <Select placeholder="Select Continent">
                  {warehouseSchema.properties.continent.enum.map(enumValue => (
                    <Option key={enumValue} value={enumValue}>
                      {enumValue}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Country">
              {getFieldDecorator('country', {
                rules: [
                  {
                    required: warehouseSchema.required.some(
                      property => property === 'country'
                    ),
                    message: 'Warehouse country must be specified',
                  },
                ],
              })(
                <Select placeholder="Select Country">
                  {warehouseSchema.properties.country.enum.map(enumValue => (
                    <Option key={enumValue} value={enumValue}>
                      {enumValue}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
          </Form>
        ) : (
          ''
        )}
      </Modal>
    );
  }
}

export default Form.create()(WarehouseForm);
