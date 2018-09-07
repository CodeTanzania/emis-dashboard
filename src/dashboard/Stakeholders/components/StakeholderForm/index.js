import React, { Component } from 'react';
import { Form, Input, Select, Button, Radio } from 'antd';
import { connect } from 'react-redux'
import API from 'API';
import classnames from 'classnames';
import { addNewStakeholderSuccess } from '../../actions';
import styles from './styles.css';


const cx = classnames.bind(styles);
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class BasicDetailsForm extends Component {
  state = { errorMsg: '', submitting: false };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        this.setState({ submitting: true });
        API.createStakeholder(data)
          .then(result => {
            console.log(result);
            if (!result.status) {
              this.props.addNewStakeholderSuccess(result);
              this.setState({ submitting: false });
              this.props.handleCancelClick();
            } else {
              this.setState({ submitting: false });
              this.setState({ errorMsg: result.message });
            }
          });
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
          <FormItem label='Phone' {...formItemLayout} >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input phone number!' }],
            })(
              <Input addonBefore={prefixSelector} placeholder='Phone Number' />
            )}
          </FormItem>
          <FormItem label='Category' {...formItemLayout} >
            {getFieldDecorator('type', {
              rules: [
                { required: true, message: 'Please select stakeholder category' },
              ],
            })(
              <Select placeholder='Select Category'>
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
          <FormItem label='Fax' {...formItemLayout} >
            <Input />
          </FormItem>
          <FormItem label='Website' {...formItemLayout} >
            <Input />
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" loading={submitting}>Add Stakeholder</Button>
            <Button onClick={handleCancelClick} style={{ marginLeft: 8 }}>Cancel</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default connect(null, { addNewStakeholderSuccess })(Form.create()(BasicDetailsForm));