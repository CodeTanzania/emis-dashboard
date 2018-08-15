import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import classnames from 'classnames';
import styles from './styles.css';


const cx = classnames.bind(styles);
const FormItem = Form.Item;
const Option = Select.Option;

class StakeholderForm extends Component {
  render() {
    const { handleCancelClick } = this.props;
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

    return (
      <div className={cx('content')}>
        <Form>
          <FormItem label='Name' {...formItemLayout} >
            <Input />
          </FormItem>
          <FormItem label='Type' {...formItemLayout} >
            <Select>
              <Option value='Agency'>Agency</Option>
              <Option value='Committee'>Committee</Option>
              <Option value='Team'>Team</Option>
              <Option value='Individual'>Individual</Option>
            </Select>
          </FormItem>
          <FormItem label='Ownership' {...formItemLayout} >
            <Select>
              <Option value='Government'>Government</Option>
              <Option value='Private'>Private</Option>
            </Select>
          </FormItem>
          <FormItem label='Email' {...formItemLayout} >
            <Input />
          </FormItem>
          <FormItem label='Phone' {...formItemLayout} >
            <Input />
          </FormItem>
          <FormItem label='Fax' {...formItemLayout} >
            <Input />
          </FormItem>
          <FormItem label='Website' {...formItemLayout} >
            <Input />
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Add Stakeholder</Button>
            <Button onClick={handleCancelClick} style={{ marginLeft: 8 }}>Cancel</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default StakeholderForm;