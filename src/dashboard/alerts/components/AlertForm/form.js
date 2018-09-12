import React from 'react';
import { Form, Input, Select, DatePicker, Row, Col, Button } from 'antd';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

class NewAlertForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  
 
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const rangeConfig = {
      rules: [],
    };

    return (
      <Form onSubmit={this.handleSubmit} className={cx('ant-form-custom-styles')}>
        <FormItem
          {...formItemLayout}
          label="Event"
        >
          {getFieldDecorator('event', {
            rules: [],
          })(
            <Input size='large' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Headline"
        >
          {getFieldDecorator('headline', {
            rules: [],
          })(
            <Input size='large' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Source"
          hasFeedback
        >
          {getFieldDecorator('Source', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Status"
          hasFeedback
        >
          {getFieldDecorator('Status', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Type"
          hasFeedback
        >
          {getFieldDecorator('type', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Scope"
          hasFeedback
        >
          {getFieldDecorator('scope', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Urgency"
          hasFeedback
        >
          {getFieldDecorator('urgency', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Severity"
          hasFeedback
        >
          {getFieldDecorator('Severity', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Category"
          hasFeedback
        >
          {getFieldDecorator('category', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Certainty"
          hasFeedback
        >
          {getFieldDecorator('Certainty', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Response Type"
          hasFeedback
        >
          {getFieldDecorator('response-type', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Code"
          hasFeedback
        >
          {getFieldDecorator('code', {
            rules: [],
          })(
            <Select size='large'>
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Description"
        >
          {getFieldDecorator('description', {
            rules: [],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Instruction"
        >
          {getFieldDecorator('instruction', {
            rules: [],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Onset"
        >
          {getFieldDecorator('onset')(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Expires"
        >
          {getFieldDecorator('expires')(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
        >
          <Row className={cx('form-actions')}>
            <Col span={6} offset={6}>
            <Button id={cx('button-cancel')}>Cancel</Button>
            </Col>
            <Col span={10} offset={1}>
            <Button type="primary" id={cx('button-save')} htmlType="submit">Save</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNewAlertForm = Form.create()(NewAlertForm);

export default WrappedNewAlertForm;