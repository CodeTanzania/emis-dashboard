import React from 'react';
import {
  Form,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  Divider,
  Select,
} from 'antd';
import { connect } from 'react-redux';
import './styles.css';
/**
 * IncidentForm component
 * this component displays  form
 * for creating a new incident
 *
 * @class
 * @name IncidentForm
 *
 * @version 0.1.0
 * @since 0.1.0
 */

const FormItem = Form.Item;
const { TextArea } = Input;
const  Option  = Select.Option;

class IncidentForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmitButton } = this.props;
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          'date-time-picker': fieldsValue['date-time-picker'].format(
            'YYYY-MM-DD HH:mm:ss'
          ),
        };
        console.log('Received values of form: ', values);
      }
      onSubmitButton();
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { onCancelButton } = this.props;

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

    const config = {
      rules: [
        { type: 'object', required: true, message: 'Please select time!' },
      ],
    };

    return (
      <Form onSubmit={this.handleSubmit} className="IncidentForm">
        <div className="FormHeader">
          <h3>Record new incident</h3>
        </div>
        <Divider />
        <FormItem {...formItemLayout} label="Incident name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input incident name!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Incident type" {...formItemLayout}>
          {getFieldDecorator('incidentType', {
            rules: [
              {
                required: true,
                message: 'Please select incident-type',
              },
            ],
          })(
            <Select placeholder="Select incidentType">
              <Option value="Flood">Flood</Option>
              <Option value="Fire">Fire</Option>
              <Option value="Drought">Drought</Option>
              <Option value="Volcanic">Volcanic</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Date/Time initiated:">
          {getFieldDecorator('date-time-picker', config)(
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              style={{ width: '100%' }}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Location">
          {getFieldDecorator('location', {
            rules: [
              {
                required: true,
                message: 'Please input incident location!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Incident Summary">
          {getFieldDecorator('summary', {
            rules: [
              { required: true, message: 'Please input the summary you got!' },
            ],
          })(<TextArea rows={4} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Row>
            <Col span={12}>
              <Button type="danger" onClick={onCancelButton}>
                Cancel
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(IncidentForm));
