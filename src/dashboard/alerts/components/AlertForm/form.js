import React from 'react';
import { Form, Divider, Input, Select, DatePicker, Row, Col, Button } from 'antd';
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



    const config = {
      rules: [],
    };

    return (
      <Form onSubmit={this.handleSubmit} className={cx('ant-form-custom-styles')}>
        <FormItem
          {...formItemLayout}
          label="Event"
        >
          {getFieldDecorator('Event', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Status"
          hasFeedback
        >
          {getFieldDecorator('status', {
            rules: [],
          })(
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Message Type"
          hasFeedback
        >
          {getFieldDecorator('message-type', {
            rules: [],
          })(
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Source"
        >
          {getFieldDecorator('source', {
            rules: [],
          })(
            <Input style={{ width: '50%' }}  />
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
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Restriction"
          hasFeedback
        >
          {getFieldDecorator('restriction', {
            rules: [],
          })(
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Addresses"
        >
          {getFieldDecorator('addresses', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Code"
        >
          {getFieldDecorator('code', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Note"
        >
          {getFieldDecorator('note', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Reference"
        >
          {getFieldDecorator('references', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Incidents"
        >
          {getFieldDecorator('references', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Message Type"
          hasFeedback
        >
          {getFieldDecorator('message-type', {
            rules: [],
          })(
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Language"
        >
          {getFieldDecorator('language', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <Divider />
        <FormItem
          {...formItemLayout}
          label="Response Type"
          hasFeedback
        >
          {getFieldDecorator('response-type', {
            rules: [],
          })(
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
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
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Severity"
        >
          {getFieldDecorator('severity', {
            rules: [],
          })(
            <Input style={{ width: '50%' }}  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Certainty"
          hasFeedback
        >
          {getFieldDecorator('certainty', {
            rules: [],
          })(
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Audience"
          hasFeedback
        >
          {getFieldDecorator('audience', {
            rules: [],
          })(
            <Select style={{ width: '50%' }} >
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Onset"
        >
          {getFieldDecorator('onset', config)(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Expires"
        >
          {getFieldDecorator('onset', config)(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="HeadLine"
        >
          {getFieldDecorator('head-line', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Description"
        >
          {getFieldDecorator('description', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Instruction"
        >
          {getFieldDecorator('instruction', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Web"
        >
          {getFieldDecorator('web', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Contact"
        >
          {getFieldDecorator('contact', {
            rules: [],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
        >
          <Row>
            <Col span={4} offset={8}>
            <Button>Cancel</Button>
            </Col>
            <Col span={8}>
            <Button type="primary" htmlType="submit">Save</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNewAlertForm = Form.create()(NewAlertForm);

export default WrappedNewAlertForm;