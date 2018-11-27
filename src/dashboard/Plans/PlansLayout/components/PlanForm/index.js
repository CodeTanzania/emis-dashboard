import { Button, Col, Form, Row } from 'antd';
import flow from 'lodash/flow';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getFeatures,
  getIncidentTypes,
  getStakeholders,
} from '../../../../../common/API/api';
import SelectSearchBox from '../../../../../common/components/SelectSearchBox';
import { postPlan, putPlan } from '../../../actions';
import './styles.css';

/* local constants */
const FormItem = Form.Item;

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
      onPostPlan,
      onUpdatePlan,
      plan,
      isEditForm,
    } = this.props;

    validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (isEditForm) {
          const updatedPlan = Object.assign({}, plan, values);
          onUpdatePlan(updatedPlan);
        } else {
          onPostPlan(values);
        }
      }
    });
  };

  render() {
    /* layout for formItem */
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
      posting,
      plan,
      isEditForm,
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
            initialValue: isEditForm ? plan.incidentType._id : undefined, //eslint-disable-line
          })(
            <SelectSearchBox
              placeholder="Select Incident Type ..."
              onSearch={getIncidentTypes}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? plan.incidentType : undefined}
            />
          )}
        </FormItem>
        {/* end incident type select input */}

        {/* plan owner select input */}
        <FormItem label="Owner" {...formItemLayout}>
          {getFieldDecorator('owner', {
            rules: [
              {
                required: true,
                message: 'Please Select the Plan Owner',
              },
            ],
            initialValue: isEditForm ? plan.owner._id : undefined, //eslint-disable-line
          })(
            <SelectSearchBox
              placeholder="Select Plan Owner ..."
              onSearch={getStakeholders}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? plan.owner : undefined}
            />
          )}
        </FormItem>
        {/* end plan owner select input */}

        {/* plan owner select input */}
        <FormItem label="boundary" {...formItemLayout}>
          {getFieldDecorator('boundary', {
            rules: [
              {
                required: true,
                message: 'Please Select the Plan Applicable boundary',
              },
            ],
            initialValue: isEditForm ? plan.boundary._id : undefined, // eslint-disable-line
          })(
            <SelectSearchBox
              placeholder="Select Plan Boundary ..."
              onSearch={getFeatures}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? plan.boundary : undefined}
            />
          )}
        </FormItem>
        {/* end plan owner select input */}

        {/* form action buttons */}
        <FormItem {...tailFormItemLayout}>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit" loading={posting}>
                Save
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={onCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </FormItem>
        {/* end form action buttons */}
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  plan: state.selectedPlan,
  posting: state.plans.posting,
});

const mapDispatchToProps = dispatch => ({
  onPostPlan(plan) {
    dispatch(postPlan(plan));
  },
  onUpdatePlan(plan) {
    dispatch(putPlan(plan));
  },
});

export default flow(
  Form.create(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlanForm);
