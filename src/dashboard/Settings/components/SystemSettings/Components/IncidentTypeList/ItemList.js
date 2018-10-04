import { Col, List, Avatar, Row } from 'antd';
import React from 'react';



/**
 * Render a single contact item component for contacts list
 *
 * @function
 * @name Contact
 * @version 0.1.0
 * @since 0.1.0
 */
export default class IncidentTypeItem extends React.Component {

    render() {
        const { name, natural, family, code, description, color } = this.props
        return (
            <List.Item className="p-l-20">
                <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large">
                        {name.charAt(0)}
                    </Avatar>}
                    title={(
                        <Row>
                            <Col xs={21}>
                                <span className="f-600 f-15">
                                    {name}
                                </span>
                            </Col>
                            <Col xs={3} style={{
                                paddingRight: '10px'
                            }}>
                                {code.given}
                            </Col>
                        </Row>
                    )}
                    description={(
                        <Row>
                            <Col span={24}>
                                {natural}-{family}

                            </Col>

                            <Col span={24} style={{
                                textOverflow: "ellipsis",
                                width: "350px",
                                whiteSpace: "nowrap",
                                overflow: "hidden"
                            }}>
                                {description}
                            </Col>
                        </Row>
                    )}
                />
            </List.Item>
        );
    }
}
