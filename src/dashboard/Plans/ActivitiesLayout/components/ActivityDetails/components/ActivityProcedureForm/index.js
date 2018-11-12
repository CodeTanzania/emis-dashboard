import { Button, Col, Form, Input, Row } from 'antd';
import flow from 'lodash/flow';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      onCancel,
      procedure,
      isEditForm,
      form,
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
        form.resetFields();
        onCancel();
      }
    });
  };

  render() {
    const {
      isEditForm,
      procedure,
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

const mapStateToProps = state => ({
  procedure: state.selectedPlanActivityProcedure,
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
