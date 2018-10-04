import React from 'react'
import {
    Form, Input, Row, Col, Divider
} from 'antd';
import { CirclePicker,SketchPicker } from 'react-color';

const FormItem = Form.Item;
const { TextArea } = Input;
class IncidentForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
            style:{
                padding:0,
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
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Name" >
                    {getFieldDecorator('incidenttype', {
                        rules: [{
                            type: 'text', message: 'The input is not valid!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout}
                    label="Nature" >
                    {getFieldDecorator('incidenttype', {
                        rules: [{
                            type: 'text', message: 'The input is not valid!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout}
                    label="Family" >
                    {getFieldDecorator('incidenttype', {
                        rules: [{
                            type: 'text', message: 'The input is not valid!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <Divider />
                <FormItem
                    {...formItemLayout}
                    label="Code:">
                    {getFieldDecorator('reporter')(
                        <Input type="text" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="System" >
                    {getFieldDecorator('location', {
                        rules: [{
                            type: 'text', message: 'The input is not valid!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="CAP" >
                    {getFieldDecorator('location', {
                        rules: [{
                            type: 'text', message: 'The input is not valid!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <Divider />
                <FormItem
                    {...formItemLayout}
                    label="Description" >
                    {getFieldDecorator('description', {
                        rules: [{
                            type: 'text', message: 'The input is not valid!',
                        }]
                    })(
                        <TextArea rows={4} />
                    )}
                </FormItem>
                <Divider />
                <FormItem
                    {...formItemLayout}
                    label="Color code" >
                    {getFieldDecorator('location', {
                        rules: [{
                            type: 'text', message: 'The input is not valid!',
                        }],
                    })(
                        <Input />
                    )}
                
                     <SketchPicker/> 
                      

                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Row>

                        <Col span="12">
                        </Col>
                    </Row>
                </FormItem>
            </Form>
        )
    }
}
export default Form.create()(IncidentForm);
