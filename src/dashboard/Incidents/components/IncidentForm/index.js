import React from 'react';
import { Form, Input, DatePicker, Button, AutoComplete, Row, Col, Divider } from 'antd';
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
const AutoCompleteOption = AutoComplete.Option;

class IncidentForm extends React.Component {
  state = {
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const {onCancelButton} = this.props;

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

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit} className="IncidentForm">
      <div className='FormHeader'>
        <h3>Record new incident</h3>
      </div>
      <Divider />
        <FormItem {...formItemLayout} label="Incident name">
          {getFieldDecorator('name', {
            rules: [
              {
                type: 'name',
                message: 'The input is not valid name',
              },
              {
                required: true,
                message: 'Please input incident name!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Incident Type">
          {getFieldDecorator('type', {
            rules: [
              {
                type: 'type',
                message: 'The input is not valid name',
              },
              {
                required: true,
                message: 'Please input incident type!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Date/Time initiated:">
          {getFieldDecorator('date-picker', config)(
            <DatePicker />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Location">
          {getFieldDecorator('location', {
            rules: [
              {
                type: 'location',
              },
              {
                required: true,
                message: 'Please input incident location!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Website">
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Incident Summary"
        >
          {getFieldDecorator('summary', {
            rules: [
              { required: true, message: 'Please input the summary you got!' },
            ],
          })(<TextArea rows={4} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
        <Row>
          <Col span={12}>
              <Button type="danger" onClick={onCancelButton}>Cancel</Button>
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
