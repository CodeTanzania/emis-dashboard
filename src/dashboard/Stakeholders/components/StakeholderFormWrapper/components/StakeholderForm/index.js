/* eslint no-underscore-dangle: "off" */
import { Button, Checkbox, Form, Input, Select, message } from 'antd';
// import classNames from 'classnames/bind';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../../../../../common/API';
import { addStakeholder, updateStakeholder } from '../../../../actions';
// import styles from './styles.css';

// const cx = classNames.bind(styles);
const FormItem = Form.Item;
const { Option } = Select;
const CheckboxGroup = Checkbox.Group;

class StakeholderForm extends Component {
  // state = { errorMsg: '', submitting: false };
  state = { submitting: false };

  componentDidMount() {
    const { stakeholder, form } = this.props;
    if (stakeholder) {
      const formFields = Object.keys(form.getFieldsValue());
      // set field values only available in a form to prevent
      // antd warning i.e you cannot set field before registering it.
      const fieldsValues = {};
      formFields.forEach(field => {
        fieldsValues[field] =
          field === 'role' ? stakeholder[field]._id : stakeholder[field];
        return fieldsValues[field];
      });
      form.setFieldsValue(fieldsValues);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        const { stakeholder } = this.props;
        if (stakeholder) {
          this.patchStakeholder(stakeholder._id, data);
        } else {
          this.createStakeholder(data);
        }
      }
    });
  };

  /**
   * Create stakeholder helper function
   */
  createStakeholder = data => {
    const { onCancel } = this.props;
    this.setState({ submitting: true });
    API.createStakeholder(data)
      .then(result => {
        // submitted successfully
        this.props.addStakeholder(result);
        this.setState({ submitting: false });
        message.success('New stakeholder successfully added');
        onCancel();
      })
      .catch(() => {
        // There is an error upon submitting
        this.setState({ submitting: false });
        message.error('Adding new stakeholder failed');
      });
  };

  patchStakeholder = (stakeholderId, updates) => {
    const { onCancel } = this.props;
    this.setState({ submitting: true });
    API.updateStakeholder(stakeholderId, updates)
      .then(result => {
        // patch submitted successfully
        this.props.updateStakeholder(result);
        this.setState({ submitting: false });
        message.success('Stakeholder updated successfully');
        onCancel();
      })
      .catch(() => {
        // There is an error upon submitting
        this.setState({ submitting: false });
        message.error('Stakeholder update failed');
      });
  };

  render() {
    const { onCancel, form, phases, types, predRoles } = this.props;
    const { submitting } = this.state;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '255',
    })(
      <Select style={{ width: 80 }}>
        <Option value="255">+255</Option>
        <Option value="254">+254</Option>
      </Select>
    );

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Name" {...formItemLayout}>
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: 'Please input stakeholder name!' },
              ],
            })(<Input placeholder="Stakeholder Name" />)}
          </FormItem>
          <FormItem label="Mobile" {...formItemLayout}>
            {getFieldDecorator('mobile', {
              rules: [
                { required: true, message: 'Please input mobile number!' },
              ],
            })(
              <Input addonBefore={prefixSelector} placeholder="Mobile Number" />
            )}
          </FormItem>
          <FormItem label="Email" {...formItemLayout}>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input stakeholder E-mail!',
                },
              ],
            })(<Input placeholder="Email" />)}
          </FormItem>
          <FormItem label="Type" {...formItemLayout}>
            {getFieldDecorator('type', {
              rules: [
                {
                  required: true,
                  message: 'Please select stakeholder category',
                },
              ],
            })(
              <Select placeholder="Select Type">
                {types.map(type => (
                  <Option key={type} value={type}>
                    {type}
                  </Option>
                ))}
              </Select>
            )}
          </FormItem>
          <FormItem label="Role" {...formItemLayout}>
            {getFieldDecorator('role')(
              <Select placeholder="Select Role">
                {predRoles.map(predRole => (
                  <Option key={predRole._id} value={predRole._id}>
                    {predRole.name}
                  </Option>
                ))}
              </Select>
            )}
          </FormItem>
          <FormItem label="Physical Address" {...formItemLayout}>
            {getFieldDecorator('physicalAddress')(
              <Input placeholder="Physical Address" />
            )}
          </FormItem>
          <FormItem label="Postal Address" {...formItemLayout}>
            {getFieldDecorator('postalAddress')(
              <Input placeholder="Postal Address" />
            )}
          </FormItem>
          <FormItem label="Fax" {...formItemLayout}>
            {getFieldDecorator('fax')(<Input placeholder="Fax" />)}
          </FormItem>
          <FormItem label="Website" {...formItemLayout}>
            {getFieldDecorator('website')(<Input placeholder="Website" />)}
          </FormItem>
          <FormItem label="Phase" {...formItemLayout}>
            {getFieldDecorator('phases', { initialValue: ['Mitigation'] })(
              <CheckboxGroup options={phases} />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button onClick={onCancel}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginLeft: 8 }}
              loading={submitting}
            >
              Save
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { schema, predRoles } = state.stakeholders;
  const { phases, type } = schema.properties;

  return {
    phases: phases.enum,
    types: type.enum.reverse(),
    predRoles: predRoles.data,
  };
};

export default connect(
  mapStateToProps,
  {
    addStakeholder,
    updateStakeholder,
  }
)(Form.create()(StakeholderForm));
