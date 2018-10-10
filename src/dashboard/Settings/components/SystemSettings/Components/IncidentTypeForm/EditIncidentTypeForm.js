/* eslint no-underscore-dangle: "off" */
import classNames from 'classnames/bind';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { from } from 'rxjs';
import API from '../../../../../../common/API';
import { updateIncidentType,colorAutofill } from '../../../../actions';
import { bindActionCreators } from 'redux';
import {
    Form, Input, Select, Modal,
    Divider, Button, Row, Col, Icon
} from 'antd';
import { ChromePicker } from 'react-color';
import styles from '../../SystemSettings.css';

const cx = classNames.bind(styles);
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;



class EditIncidentTypeForm extends Component {
    constructor(props){
        super(props);
        const { incidentType} = this.props
        this.state = {
            visible: false, 
            showEditProfile: false,
            background: `${incidentType}`,
   
           };
    }


    handleSubmit = e => {
        e.preventDefault();
        const { form, incidentType } = this.props;
        form.validateFieldsAndScroll((err, {
            name, given, cap, nature, family, description, color }) => {
            const data = { name, code: { given, cap }, nature, family, description, color }
            if (!err) {
                    this.updateIncidentType(incidentType._id, data);
            }
             else {
                    console.log("errors");
                
            }
        });
    };
  

    handleOnClickEditIncidentType = () => {
        this.setState({ visible: true, showEditProfile: true });
        const { incidentType, form } = this.props;
        if (incidentType) {
            const formFields = Object.keys(form.getFieldsValue());
            const fieldsValues = {};
            formFields.forEach(field => {
                fieldsValues[field] = incidentType[field] ? incidentType[field] : incidentType.code[field];
                return fieldsValues[field];
            });
            form.setFieldsValue(fieldsValues);
        }

    };

    handleCancel = (e) => {
        this.setState({
            visible: false,
            showEditProfile: false,
        });
    }

    updateIncidentType = (incidentTypeId, updates) => {
        this.setState({ submitting: true });
        from(API.updateIncidentType(incidentTypeId, updates)).subscribe(result => {
            if (result.error) {
                this.setState({ submitting: false });
            } else {
                const { updateIncidentType } = this.props;
                updateIncidentType(result);
                this.setState({ submitting: false });
                this.handleCancel();
            }
        });
    };

    render() {
        const { form } = this.props;
        const { submitting } = this.state;
        const { getFieldDecorator,setFieldsValue,getFieldValue } = form;

        getFieldDecorator("a");
        getFieldDecorator("color");

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
                marginBottom: '4px'

            }
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

        const onClick = () => {
            const { colorSelected } = this.props;
            setFieldsValue({
                a: '1',
                color: colorSelected
            });
        }
        const handleChangeComplete = (color, e) => {
            const { colorAutofill, } = this.props;
            colorAutofill(color.hex);
            this.setState(
                { background: color.hex });
            onClick()

        };
        return (
            <div className={cx('content')}>

                <Icon style={{ cursor: "pointer" }} type="edit"
                    theme="outlined" onClick={this.handleOnClickEditIncidentType}
                >
                </Icon>
                <Modal
                    title='Settings: Edit Incident-Type'
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    width="50%"
                >

                    <Form onSubmit={this.handleSubmit}>
                        <FormItem label="Name" {...formItemLayout}>
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: true, message: 'Please input Incident-type name!' },
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
                                    <Option value="Technological/Man-Made">Technological/Man-Made</Option>

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
                            {getFieldDecorator('given')(
                                <Input placeholder="Given" />
                            )}
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
                        <FormItem
                            {...formItemLayout}
                            label="Description" >
                            {getFieldDecorator('description')(
                                <TextArea rows={4} placeholder="Description" />
                            )}
                        </FormItem>
                        <Divider />
                        {getFieldValue("a") === "1" ? (
                        <FormItem {...formItemLayout}
                            label="Color code" >
                            {getFieldDecorator("color")(<Input placeholder="Color code" />)}

                        </FormItem>
                    ) : <FormItem
                    {...formItemLayout}
                    label="Color code" >
                    {getFieldDecorator('color')(
                        <Input placeholder="Color code" />
                    )}
                    </FormItem>
                    }
                    <FormItem {...formItemLayout}
                        label="Pick color">

                        <ChromePicker color={this.state.background}
                            onChangeComplete={handleChangeComplete} />
                    </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Row>
                                <Col span={4} offset={14}>
                                    <Button onClick={this.handleCancel} >Cancel</Button>
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

const mapStateToProps = state => {
    return{
        colorSelected: state.incidentsType.colorSelected
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateIncidentType: bindActionCreators(updateIncidentType, dispatch),
        colorAutofill: bindActionCreators(colorAutofill, dispatch)

    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Form.create()(EditIncidentTypeForm));

