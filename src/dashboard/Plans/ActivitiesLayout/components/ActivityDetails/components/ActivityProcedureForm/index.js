import { Button, Col, Form, Input, Row } from 'antd';
import flow from 'lodash/flow';
import map from 'lodash/map';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getQuestionnaires,
  getResourceItems,
  getRoles,
} from '../../../../../../../common/API';
import SelectSearchBox from '../../../../../../../common/components/SelectSearchBox';
import {
  postPlanActivityProcedure,
  putPlanActivityProcedure,
} from '../../../../../actions';

/* local constants */
const FormItem = Form.Item;
const { TextArea } = Input;

/**
 * Activity Form component
 *
 * @class
 * @name ActivityProcedureForm
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ActivityProcedureForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      procedure,
      isEditForm,
      postProcedure,
      updateProcedure,
      form: { validateFields },
    } = this.props;

    validateFields((error, values) => {
      if (!error) {
        if (isEditForm) {
          const updatedProcedure = Object.assign({}, procedure, values);
          updateProcedure(updatedProcedure);
        } else {
          postProcedure(values);
        }
      }
    });
  };

  render() {
    const {
      isEditForm,
      posting,
      procedure,
      onCancel,
      form: { getFieldDecorator },
      form,
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
        {/* procedure name */}
        <FormItem {...formItemLayout} label="SOP Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Procedure name is Required' }],
            initialValue: isEditForm ? procedure.name : undefined,
          })(
            <TextArea
              autosize={{ minRows: 2, maxRows: 6 }}
              placeholder="Enter Procedure Name"
            />
          )}
        </FormItem>
        {/* end procedure name */}

        {/* procedure description */}
        <FormItem {...formItemLayout} label="SOP Description">
          {getFieldDecorator('description', {
            initialValue: isEditForm ? procedure.description : undefined,
          })(
            <TextArea
              autosize={{ minRows: 2, maxRows: 6 }}
              placeholder="Enter Procedure Description"
            />
          )}
        </FormItem>
        {/* end procedure description */}

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
              ? map(procedure.primary, role => role._id) // eslint-disable-line
              : [],
          })(
            <SelectSearchBox
              placeholder="Select Role ..."
              mode="multiple"
              onSearch={getRoles}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? procedure.primary : []}
            />
          )}
        </FormItem>
        {/* end responsible roles select input */}

        {/* responsible roles select input */}
        <FormItem label="Supportive Role(s)" {...formItemLayout}>
          {getFieldDecorator('supportive', {
            initialValue: isEditForm
              ? map(procedure.supportive, role => role._id) // eslint-disable-line
              : [],
          })(
            <SelectSearchBox
              placeholder="Select Role ..."
              mode="multiple"
              onSearch={getRoles}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? procedure.supportive : []}
            />
          )}
        </FormItem>
        {/* end responsible roles select input */}

        {/* resource select input */}
        <FormItem label="Resources Needed" {...formItemLayout}>
          {getFieldDecorator('resources', {
            initialValue: isEditForm
              ? map(procedure.resources, item => item._id) // eslint-disable-line
              : [],
          })(
            <SelectSearchBox
              placeholder="Select Resource items ..."
              mode="multiple"
              onSearch={getResourceItems}
              optionLabel="name"
              optionValue="_id"
              initialValue={isEditForm ? procedure.resources : []}
            />
          )}
        </FormItem>
        {/* end resource select input */}

        {/* Questionnaires select input */}
        <FormItem label="Assessment(s) to be performed" {...formItemLayout}>
          {getFieldDecorator('assessments', {
            initialValue: isEditForm
              ? map(procedure.assessments, item => item._id) // eslint-disable-line
              : [],
          })(
            <SelectSearchBox
              placeholder="Select Questionnaires ..."
              mode="multiple"
              onSearch={getQuestionnaires}
              optionLabel="title"
              optionValue="_id"
              initialValue={isEditForm ? procedure.assessments : []}
            />
          )}
        </FormItem>
        {/* end Questionnaires select input */}

        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" loading={posting}>
              Save
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => {
                form.resetFields();
                onCancel();
              }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  procedure: state.selectedPlanActivityProcedure,
  posting: state.planActivityProcedures.posting,
});

const mapDispatchToProps = dispatch => ({
  postProcedure(procedure) {
    dispatch(postPlanActivityProcedure(procedure));
  },
  updateProcedure(procedure) {
    dispatch(putPlanActivityProcedure(procedure));
  },
});

export default flow(
  Form.create(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ActivityProcedureForm);
