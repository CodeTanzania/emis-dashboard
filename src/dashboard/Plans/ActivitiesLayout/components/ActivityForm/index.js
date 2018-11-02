import { Button, Col, Form, Input, Radio, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* local constants */
const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

/**
 * Activity Form component
 *
 * @class
 * @name ActivityForm
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ActivityForm extends Component {
  static defaultProps = {
    initialSelectedPhase: undefined,
  };

  static propTypes = {
    initialSelectedPhase: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      onCancel,
      form: { validateFields, resetFields },
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        resetFields();
        onCancel();
      }
    });
  };

  render() {
    const {
      initialSelectedPhase,
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
        {/* activity description */}
        <FormItem {...formItemLayout} label="Activity Description">
          {getFieldDecorator('description', {
            rules: [
              { required: true, message: 'Activity Description is Required' },
            ],
          })(
            <TextArea
              autosize={{ minRows: 3, maxRows: 6 }}
              placeholder="Enter Activity Description"
            />
          )}
        </FormItem>
        {/* end activity description */}

        {/* activity phases */}
        {!!initialSelectedPhase === false && (
          <FormItem label="Phases">
            {getFieldDecorator('phase', {
              rules: [
                { required: true, message: 'Activity Phase is Required' },
              ],
              initialValue: initialSelectedPhase,
            })(
              <RadioGroup>
                <Radio value="Mitigation">Mitigation</Radio>
                <Radio value="Preparedness">Preparedness</Radio>
                <Radio value="Response">Response</Radio>
                <Radio value="Recovery">Recovery</Radio>
              </RadioGroup>
            )}
          </FormItem>
        )}
        {/* end activity phases */}

        {/* form actions */}
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
        {/* end form actions */}
      </Form>
    );
  }
}

export default Form.create()(ActivityForm);
