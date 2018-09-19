import { Button, Col, Form, Row } from 'antd';
import React, { Component } from 'react';
import Select from '../../../../common/components/Select';

/* local constants */
const FormItem = Form.Item;

// fake data
const incidentTypes = [
  { label: 'Flood', value: 'flood' },
  { label: 'Earthquake', value: 'earthquake' },
  { label: 'Fire', value: 'fire' },
  { label: 'Cholera', value: 'cholera' },
  { label: 'Tornado', value: 'tornado' },
];
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
 * @extends React.Component
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default class PlanForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // todo handle form submission
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

    const { onCancel } = this.props;

    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ maxWidth: '400px', margin: '0 auto' }}
      >
        {/* incident type select input */}
        <FormItem label="Incident Type" {...formItemLayout}>
          <Select
            options={incidentTypes}
            placeholder="Select Incident Type ..."
          />
        </FormItem>
        {/* end incident type select input */}
        {/* location select input */}
        <FormItem label="Location" {...formItemLayout}>
          <Select options={locations} placeholder="Select Location ..." />
        </FormItem>
        {/* end location select input */}
        {/* form action buttons */}
        <FormItem {...tailFormItemLayout}>
          <Row justify="space-between">
            <Col span={10}>
              <Button onClick={onCancel}>Cancel</Button>
            </Col>
            <Col span={10}>
              <Button type="primary">Save</Button>
            </Col>
          </Row>
        </FormItem>
        {/* end form action buttons */}
      </Form>
    );
  }
}
