/* eslint no-underscore-dangle: "off" */
import classNames from 'classnames/bind';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { from } from 'rxjs';
import API from '../../../../../../common/API';
import { addNewIncidentType } from '../../../../actions';

import {
    Form, Input, Select, Modal, Icon,
    Divider, Button, Row, Col
} from 'antd';
import { ChromePicker } from 'react-color';
import styles from '../../SystemSettings.css';

const cx = classNames.bind(styles);
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;



class AddIncidentTypeForm extends Component {
    state= {
        submitting:false
    }
    handleOnClickAddNewIncidentType = () => {
        this.setState({ visible: true, showEditProfile: false });
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            showEditProfile: false,
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFieldsAndScroll((err, {
            name, given, cap, nature, family, description, color }) => {
            const data = { name, code: { given, cap }, nature, family, description, color }
            if (!err) {
                this.createIncidentType(data);
            }
                else {
                    console.log("Error occurs")
                }
        });
    };

    /**
     * Create incidentType helper function
     */
    createIncidentType = data => {
        this.setState({ submitting: true });
        from(API.createIncidentType(data)).subscribe(result => {
            if (result.error) {
                this.setState({ submitting: false });

            } else {
                const { addNewIncidentType } = this.props;
                addNewIncidentType(result);
                this.setState({ submitting: false });
                this.handleCancel();
            }
        });
    };

    render() {
        const {  form } = this.props;
        const { submitting } = this.state;
        const { getFieldDecorator } = form;
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


        return (<div className={cx('content')}>
            <Icon style={{ cursor: "pointer" }} type="plus"
                theme="outlined" onClick={this.handleOnClickAddNewIncidentType}
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
                    <FormItem
                        {...formItemLayout}
                        label="Color code" >
                        {getFieldDecorator('color')(
                            <Input placeholder="Color code" />
                        )}
                        <ChromePicker />
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
const mapDispatchToProps = dispatch => {
    return {
        addNewIncidentType: bindActionCreators(addNewIncidentType, dispatch)

    }
}

export default connect(
    null,mapDispatchToProps
)(Form.create()(AddIncidentTypeForm));

