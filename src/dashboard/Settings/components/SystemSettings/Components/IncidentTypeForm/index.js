/* eslint no-underscore-dangle: "off" */
import classNames from 'classnames/bind';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { from } from 'rxjs';
import API from '../../../../../../common/API';
import { addNewIncidentType, updateIncidentType } from '../../../../actions'
import {
    Form, Input,Select,
    Divider, Button, Row, Col
} from 'antd';
import { ChromePicker } from 'react-color';
import styles from '../../SystemSettings.css'

const cx = classNames.bind(styles);
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;



class IncidentTypeForm extends Component {
    // state = { errorMsg: '', submitting: false };
    state = { submitting: false, background: '#fff',};
    
      handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };

    componentDidMount() {
        const { incidentType, form } = this.props;
        if (incidentType) {
            const formFields = Object.keys(form.getFieldsValue());
            // set field values only available in a form to prevent
            // antd warning i.e you cannot set field before registering it.
            const fieldsValues = {};
            formFields.forEach(field => {
                fieldsValues[field] = incidentType[field];
                return fieldsValues[field];
            });
            form.setFieldsValue(fieldsValues);
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFieldsAndScroll((err, { 
            name, given,cap, nature, family, description, color} ) => {
            const data = {name, code: { given, cap}, nature, family, description, color }
            if (!err) {
                const { incidentType } = this.props;
                if (incidentType) {
                    this.updateIncidentType(incidentType._id, data);
                } else {
                    this.createIncidentType(data);
                }

            }
        });
    };

    /**
     * Create stakeholder helper function
     */
    createIncidentType = data => {
        const { handleCancelClick } = this.props;
        this.setState({ submitting: true });
        from(API.createIncidentType(data)).subscribe(result => {
            if (result.error) {
                // There is an error upon submitting
                this.setState({ submitting: false });
                // this.setState({ errorMsg: result.message });
                console.log('the error object');
                console.log(result);
            } else {
                // submitted successfully
                addNewIncidentType(result);
                this.setState({ submitting: false });
                handleCancelClick();
            }
        });
    };

    updateIncidentType = (incidentTypeId, updates) => {
        const { handleCancelClick } = this.props;
        this.setState({ submitting: true });
        from(API.updateIncidentType(incidentTypeId, updates)).subscribe(result => {
            if (result.error) {
                // There is an error upon submitting
                this.setState({ submitting: false });
                // this.setState({ errorMsg: result.message });
            } else {
                // patch submitted successfully
                this.updateIncidentType(result);
                this.setState({ submitting: false });
                handleCancelClick();
            }
        });
    };

    render() {
        const { handleCancelClick, form } = this.props;
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


        return (
            <div className={cx('content')}>
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
                            <Input  placeholder="Color code"/>
                        )}
                        <ChromePicker />
                   </FormItem>
                    <FormItem {...tailFormItemLayout}>
                    <Row>
                    <Col span={4} offset={14}>
                    <Button onClick={handleCancelClick} >Cancel</Button>
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
            </div>
        );
    }
}

export default connect(
    null,
    {
        addNewIncidentType,
        updateIncidentType,
    }
)(Form.create()(IncidentTypeForm));


            // <div className={cx('content')}>
            //     <Form onSubmit={this.handleSubmit}>
            //         <FormItem
            //             {...formItemLayout}
            //             label="Name" >
            //             {getFieldDecorator('incidenttype', {
            //                 rules: [{
            //                     type: 'text', message: 'The input is not valid!',
            //                 }],
            //             })(
            //                 <Input />
            //             )}
            //         </FormItem>
            //         <FormItem {...formItemLayout}
            //             label="Nature" >
            //             {getFieldDecorator('incidenttype', {
            //                 rules: [{
            //                     type: 'text', message: 'The input is not valid!',
            //                 }],
            //             })(
            //                 <Input />
            //             )}
            //         </FormItem>
            //         <FormItem {...formItemLayout}
            //             label="Family" >
            //             {getFieldDecorator('incidenttype', {
            //                 rules: [{
            //                     type: 'text', message: 'The input is not valid!',
            //                 }],
            //             })(
            //                 <Input />
            //             )}
            //         </FormItem>
            //         <Divider />
            //         <FormItem
            //             {...formItemLayout}
            //             label="Code:">
            //             {getFieldDecorator('reporter')(
            //                 <Input type="text" />
            //             )}
            //         </FormItem>
            //         <FormItem
            //             {...formItemLayout}
            //             label="System" >
            //             {getFieldDecorator('location', {
            //                 rules: [{
            //                     type: 'text', message: 'The input is not valid!',
            //                 }],
            //             })(
            //                 <Input />
            //             )}
            //         </FormItem>
            //         <FormItem
            //             {...formItemLayout}
            //             label="CAP" >
            //             {getFieldDecorator('location', {
            //                 rules: [{
            //                     type: 'text', message: 'The input is not valid!',
            //                 }],
            //             })(
            //                 <Input />
            //             )}
            //         </FormItem>
            //         <Divider />

                   
            //         <FormItem {...tailFormItemLayout}>
            //             <Row>
            //                 <Col span="12">
            //                     <Button onClick={handleCancelClick}>Cancel</Button>
            //                 </Col>
            //                 <Col span="12">
            //                     <Button
            //                         type="primary"
            //                         htmlType="submit"
            //                         style={{ marginLeft: 8 }}
            //                         loading={submitting}
            //                     >
            //                         Save
            //                 </Button>
            //                 </Col>
            //             </Row>
            //         </FormItem>
            //     </Form>
            // </div>