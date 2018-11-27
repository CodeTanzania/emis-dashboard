import { Button, Col, Form, Input, Radio, Row } from 'antd';
import flow from 'lodash/flow';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResourceItems, getRoles } from '../../../../../common/API/api';
import SelectSearchBox from '../../../../../common/components/SelectSearchBox';
import { postPlanActivity, putPlanActivity } from '../../../actions';

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
      initialSelectedPhase,
      form: { validateFields },
      postActivity,
      activity,
      updateActivity,
      isEditForm,
    } = this.props;

    validateFields((error, values) => {
      if (!error) {
        if (isEditForm) {
          const updatedActivity = Object.assign({}, activity, values);
          updateActivity(updatedActivity);
        } else {
          let newActivity = values;
          if (initialSelectedPhase) {
            newActivity = Object.assign({}, values, {
              phase: initialSelectedPhase,
            });
          }

          postActivity(newActivity);
        }
      }
    });
  };

  render() {
    const {
      initialSelectedPhase,
      onCancel,
      posting,
      isEditForm,
      activity,
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
        {/* activity name */}
        <FormItem {...formItemLayout} label="Activity Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Activity Name is Required' }],
            initialValue: isEditForm ? activity.name : undefined,
          })(
            <TextArea
              autosize={{ minRows: 2, maxRows: 6 }}
              placeholder="Enter Activity Name"
            />
          )}
        </FormItem>
        {/* end activity name */}

        {/* activity description */}
        <FormItem {...formItemLayout} label="Activity Description">
          {getFieldDecorator('description', {
            initialValue: isEditForm ? activity.description : undefined,
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
              initialValue: isEditForm ? activity.phase : initialSelectedPhase,
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

        {/* responsible roles select input */}
        <FormItem label="Primary Responsible Role(s)" {...formItemLayout}>
          {getFieldDecorator('primary', {
            rules: [
              {
                required: true,
                message: 'Please Select Responsible Role(s)',
              },
            ],
            initialValue: isEditForm
              ? map(activity.primary, role => role._id) // eslint-disable-line
              : [],
          })(
            <SelectSearchBox
              placeholder="Select Role ..."
              mode="multiple"
              onSearch={getRoles}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? activity.primary : []}
            />
          )}
        </FormItem>
        {/* end responsible roles select input */}

        {/* responsible roles select input */}
        <FormItem label="Supportive Role(s)" {...formItemLayout}>
          {getFieldDecorator('supportive', {
            initialValue: isEditForm
              ? map(activity.supportive, role => role._id) // eslint-disable-line
              : [],
          })(
            <SelectSearchBox
              placeholder="Select Role ..."
              mode="multiple"
              onSearch={getRoles}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? activity.supportive : []}
            />
          )}
        </FormItem>
        {/* end responsible roles select input */}

        {/* resource select input */}
        <FormItem label="Resources Needed" {...formItemLayout}>
          {getFieldDecorator('resources', {
            initialValue: isEditForm
              ? map(activity.resources, item => item._id) // eslint-disable-line
              : [],
          })(
            <SelectSearchBox
              placeholder="Select Resources Needed ..."
              mode="multiple"
              onSearch={getResourceItems}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? activity.resources : []}
            />
          )}
        </FormItem>
        {/* end resource select input */}

        {/* form actions */}
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
        {/* end form actions */}
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  activity: state.selectedPlanActivity,
  posting: state.planActivities.posting,
});

const mapDispatchToProps = dispatch => ({
  postActivity(activity) {
    dispatch(postPlanActivity(activity));
  },
  updateActivity(activity) {
    dispatch(putPlanActivity(activity));
  },
});

export default flow(
  Form.create(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ActivityForm);
