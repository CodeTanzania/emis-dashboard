import React, { Component } from 'react';
import { Form, Input, Select, Button, Radio, Checkbox } from 'antd';
import { connect } from 'react-redux'
import { from } from 'rxjs';
import API from 'API';
import classNames from 'classnames/bind';
import { addNewStakeholderSuccess, updateStakeholderSuccess } from '../../actions';
import styles from './styles.css';


const cx = classNames.bind(styles);
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

class BasicDetailsForm extends Component {
  state = { errorMsg: '', submitting: false };

  componentDidMount() {
    const { stakeholder } = this.props;
    if (stakeholder) {
      const formFields = Object.keys(this.props.form.getFieldsValue());
      // set field values only available in a form to prevent 
      // antd warning i.e you cannot set field before registering it.
      let fieldsValues = {};
      formFields.forEach(field => fieldsValues[field] = stakeholder[field]);
      this.props.form.setFieldsValue(fieldsValues);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        const { stakeholder } = this.props;
        if (stakeholder) {
          this.updateStakeholder(stakeholder._id, data);
        } else {
          this.createStakeholder(data);
        }
      }
    });
  }

  /**
   * Create stakeholder helper function
   */
  createStakeholder = (data) => {
    this.setState({ submitting: true });
    from(API.createStakeholder(data))
      .subscribe(result => {
        if (result.error) {
          // There is an error upon submitting
          this.setState({ submitting: false });
          this.setState({ errorMsg: result.message });
        } else {
          // submitted successfully
          this.props.addNewStakeholderSuccess(result);
          this.setState({ submitting: false });
          this.props.handleCancelClick();
        }
      });
  }

  updateStakeholder = (stakeholderId, updates) => {
    this.setState({ submitting: true });
    from(API.updateStakeholder(stakeholderId, updates))
      .subscribe(result => {
        if (result.error) {
          // There is an error upon submitting
          this.setState({ submitting: false });
          this.setState({ errorMsg: result.message });
        } else {
          // patch submitted successfully
          this.props.updateStakeholderSuccess(result);
          this.setState({ submitting: false });
          this.props.handleCancelClick();
        }
      });
  }


  render() {
    const { handleCancelClick, form } = this.props;
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
      <Select style={{ width: 70 }}>
        <Option value="255">+255</Option>
        <Option value="254">+254</Option>
      </Select>
    );

    return (
      <div className={cx('content')}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label='Name' {...formItemLayout} >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input stakeholder name!' }],
            })(
              <Input placeholder='Stakeholder Name' />
            )}
          </FormItem>
          <FormItem label='Phone' {...formItemLayout} >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input phone number!' }],
            })(
              <Input addonBefore={prefixSelector} placeholder='Phone Number' />
            )}
          </FormItem>
          <FormItem label='Email' {...formItemLayout} >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input stakeholder E-mail!',
              }],
            })(
              <Input placeholder='Email' />
            )}

          </FormItem>
          <FormItem label='Type' {...formItemLayout} >
            {getFieldDecorator('type', {
              rules: [
                { required: true, message: 'Please select stakeholder category' },
              ],
            })(
              <Select placeholder='Select Type'>
                <Option value='Agency'>Agency</Option>
                <Option value='Committee'>Committee</Option>
                <Option value='Team'>Team</Option>
                <Option value='Individual'>Individual</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label='Ownership' {...formItemLayout} >
            {getFieldDecorator('ownership', { initialValue: 'Government' })(
              <RadioGroup>
                <Radio value="Government">Government</Radio>
                <Radio value="Private">Private</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem label='Area' {...formItemLayout} >
            {getFieldDecorator('area')(
              <Input placeholder='Area' />
            )}
          </FormItem>
          <FormItem label='Physical Address' {...formItemLayout} >
            {getFieldDecorator('physicalAddress')(
              <Input placeholder='Physical Address' />
            )}
          </FormItem>
          <FormItem label='Postal Address' {...formItemLayout} >
            {getFieldDecorator('postalAddress')(
              <Input placeholder='Postal Address' />
            )}
          </FormItem>
          <FormItem label='Fax' {...formItemLayout} >
            {getFieldDecorator('fax')(
              <Input placeholder='Fax' />
            )}
          </FormItem>
          <FormItem label='Website' {...formItemLayout} >
            {getFieldDecorator('website')(
              <Input placeholder='Website' />
            )}
          </FormItem>
          <FormItem label='Phase' {...formItemLayout} >
            {getFieldDecorator('phases', { initialValue: ['Mitigation'] })(
              <CheckboxGroup options={['Mitigation', 'Preparedness', 'Response', 'Recovery']} />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button onClick={handleCancelClick} >Cancel</Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }} loading={submitting}>Save</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default connect(null, {
  addNewStakeholderSuccess,
  updateStakeholderSuccess
})(Form.create()(BasicDetailsForm));