import { Button, Col, Form, Input, Row } from 'antd';
import React, { Component } from 'react';

/* local constants */
const FormItem = Form.Item;
const { TextArea } = Input;

/**
 * Activity Form component
 *
 * @class
 * @name ActivityTaskForm
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ActivityTaskForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      onCancel,
      form: { validateFields },
    } = this.props;

    validateFields((error, values) => {
      if (!error) {
        console.log('Received values of form: ', values);
        onCancel();
      }
    });
  };

  render() {
    const {
      onCancel,
      form: { getFieldDecorator },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 },
        lg: { span: 24 },
        xl: { span: 24 },
        xxl: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 },
        lg: { span: 24 },
        xl: { span: 24 },
        xxl: { span: 24 },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="SOP Description">
          {getFieldDecorator('description', {
            rules: [
              { required: true, message: 'Procedure Description is Required' },
            ],
          })(
            <TextArea
              autosize={{ minRows: 3, maxRows: 6 }}
              placeholder="Enter Procedure Description"
            />
          )}
        </FormItem>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={onCancel}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(ActivityTaskForm);
