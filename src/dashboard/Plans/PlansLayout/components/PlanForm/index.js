import { Button, Col, Form, Row, Select } from 'antd';
import React, { Component } from 'react';
import { getIncidentTypes } from '../../../../../common/API/api';
import SelectSearchBox from '../../../../../common/components/SelectSearchBox';
import './styles.css';

/* local constants */
const FormItem = Form.Item;
const { Option } = Select;

// fake data
const locations = [
  { label: 'Dar es salaam', value: 'dar es salaam' },
  { label: 'Mwanza', value: 'mwanza' },
  { label: 'Iringa', value: 'iringa' },
  { label: 'Temeke', value: 'temeke' },
  { label: 'Arusha', value: 'arusha' },
];

/**
 * Form for creating and editing plan
 *
 * @class
 * @extends React.Component
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class PlanForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // todo handle form submission
    const {
      form: { validateFieldsAndScroll },
    } = this.props;

    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    /* layout for formItem */
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

    /* layout for form action buttons */
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

    /* destructuring props */
    const {
      onCancel,
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="PlanForm">
        {/* incident type select input */}
        <FormItem label="Incident Type" {...formItemLayout}>
          {getFieldDecorator('incidentType', {
            rules: [
              {
                required: true,
                message: 'Please Select Plan Incident Type',
              },
            ],
          })(
            <SelectSearchBox
              placeholder="Select Incident Type ..."
              onSearch={getIncidentTypes}
              onChange={() => {}}
              optionLabel="name"
              optionValue="_id"
            />
          )}
        </FormItem>
        {/* end incident type select input */}
        {/* location select input */}
        <FormItem label="Location" {...formItemLayout}>
          {getFieldDecorator('location', {
            rules: [
              {
                required: true,
                message: 'Please Select Applicable Plan Location',
              },
            ],
          })(
            <Select placeholder="Select Location ...">
              {locations.map(location => (
                <Option key={location.value}>{location.label}</Option>
              ))}
            </Select>
          )}
        </FormItem>
        {/* end location select input */}
        {/* form action buttons */}
        <FormItem {...tailFormItemLayout}>
          <Row justify="space-between">
            <Col span={10}>
              <Button onClick={onCancel}>Cancel</Button>
            </Col>
            <Col span={10}>
              <Button type="primary" onClick={this.handleSubmit}>
                Save
              </Button>
            </Col>
          </Row>
        </FormItem>
        {/* end form action buttons */}
      </Form>
    );
  }
}

export default Form.create()(PlanForm);
