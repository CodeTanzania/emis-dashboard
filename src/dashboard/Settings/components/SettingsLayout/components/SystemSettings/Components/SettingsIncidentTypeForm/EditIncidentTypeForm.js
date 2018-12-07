/* eslint no-underscore-dangle: "off" */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form,
  Input,
  Select,
  Modal,
  Divider,
  Button,
  Row,
  Col,
  Icon,
} from 'antd';
import { ChromePicker } from 'react-color';
import {
  updateIncidentType,
  selectColorAutofill,
} from '../../../../../../actions';
import '../../SystemSettings.css';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

class EditIncidentTypeForm extends Component {
  constructor(props) {
    super(props);
    const { incidentType } = this.props;
    this.state = {
      visible: false,
      background: `${incidentType}`,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, incidentType } = this.props;
    form.validateFieldsAndScroll(
      (err, { name, given, cap, nature, family, description, color }) => {
        const data = {
          name,
          code: { given, cap },
          nature,
          family,
          description,
          color,
        };
        if (!err) {
          this.incidentTypeEdit(incidentType._id, data);
        }
      }
    );
  };

  handleOnClickEditIncidentType = () => {
    this.setState({ visible: true });
    const { incidentType, form } = this.props;
    if (incidentType) {
      const formFields = Object.keys(form.getFieldsValue());
      const fieldsValues = {};
      formFields.forEach(field => {
        fieldsValues[field] = incidentType[field]
          ? incidentType[field]
          : incidentType.code[field];
        return fieldsValues[field];
      });
      form.setFieldsValue(fieldsValues);
    }
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  incidentTypeEdit = (incidentTypeId, updates) => {
    const { incidentTypeUpdate } = this.props;
    incidentTypeUpdate(incidentTypeId, updates);
    this.setState({ submitting: false });
    this.handleCancel();
  };

  onClick = () => {
    const { colorSelected, form } = this.props;
    form.setFieldsValue({
      prevColor: '',
      color: colorSelected,
    });
  };

  handleChangeComplete = color => {
    const { autoFillColor } = this.props;
    autoFillColor(color.hex);
    this.setState({ background: color.hex });
    this.onClick();
  };

  render() {
    const { form } = this.props;
    const { submitting, visible, background } = this.state;
    const { getFieldDecorator, getFieldValue } = form;

    getFieldDecorator('prevColor');

    getFieldDecorator('color');

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
      style: {
        padding: 0,
        marginBottom: '4px',
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

    return (
      <div className="EditIncidentTypeForm">
        <Icon
          style={{ cursor: 'pointer' }}
          type="edit"
          theme="outlined"
          onClick={this.handleOnClickEditIncidentType}
        />
        <Modal
          title="Settings: Edit Incident-Type"
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          width="50%"
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="Name" {...formItemLayout}>
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input Incident-type name!',
                  },
                ],
              })(<Input placeholder="Incident-type Name" />)}
            </FormItem>
            <FormItem label="Nature" {...formItemLayout}>
              {getFieldDecorator('nature', {
                rules: [
                  {
                    required: true,
                    message: 'Please input incident-type nature!',
                  },
                ],
              })(
                <Select placeholder="Select Type">
                  <Option value="Natural">Natural</Option>
                  <Option value="Technological/Man-Made">
                    Technological/Man-Made
                  </Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Family" {...formItemLayout}>
              {getFieldDecorator('family', {
                rules: [
                  {
                    required: true,
                    message: 'Please select incident-type family',
                  },
                ],
              })(
                <Select placeholder="Select Type">
                  <Option value="Geophysical">Geophysical</Option>
                  <Option value="Meteorological">Meteorological</Option>
                  <Option value="Hydrological">Hydrological</Option>
                  <Option value="Climatological">Climatological</Option>
                  <Option value="Biological">Biological</Option>
                  <Option value="terrestrial">terrestrial</Option>
                </Select>
              )}
            </FormItem>
            <Divider />
            <FormItem label="Given" {...formItemLayout}>
              {getFieldDecorator('given')(<Input placeholder="Given" />)}
            </FormItem>
            <FormItem label="CAP" {...formItemLayout}>
              {getFieldDecorator('cap', {
                rules: [
                  {
                    required: true,
                    message: 'Please input incident-type cap!',
                  },
                ],
              })(
                <Select placeholder="Select Type">
                  <Option value="Geo">Geo </Option>
                  <Option value="Met">Met</Option>
                  <Option value="Safety">Safety</Option>
                  <Option value="Rescue">Rescue</Option>
                  <Option value="Fire">Fire</Option>
                  <Option value="Health">Health</Option>
                  <Option value="Env">Env</Option>
                  <Option value="Transport">Transport</Option>
                  <Option value="Infra">Infra</Option>
                  <Option value="CBRNE">CBRNE</Option>
                  <Option value="Other">Other</Option>
                </Select>
              )}
            </FormItem>
            <Divider />
            <FormItem {...formItemLayout} label="Description">
              {getFieldDecorator('description')(
                <TextArea rows={4} placeholder="Description" />
              )}
            </FormItem>
            <Divider />
            {getFieldValue('prevColor') === '' ? (
              <FormItem {...formItemLayout} label="Color code">
                {getFieldDecorator('color')(<Input placeholder="Color code" />)}
              </FormItem>
            ) : (
              <FormItem {...formItemLayout} label="Color code">
                {getFieldDecorator('color')(<Input placeholder="Color code" />)}
              </FormItem>
            )}
            <FormItem {...formItemLayout} label="Pick color">
              <ChromePicker
                color={background}
                onChangeComplete={this.handleChangeComplete}
              />
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Row>
                <Col span={4} offset={14}>
                  <Button onClick={this.handleCancel}>Cancel</Button>
                </Col>
                <Col span={4}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginLeft: 8 }}
                    loading={submitting}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colorSelected: state.incidentsType.colorSelected,
});

const mapDispatchToProps = dispatch => ({
  incidentTypeUpdate: bindActionCreators(updateIncidentType, dispatch),
  autoFillColor: bindActionCreators(selectColorAutofill, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(EditIncidentTypeForm));
