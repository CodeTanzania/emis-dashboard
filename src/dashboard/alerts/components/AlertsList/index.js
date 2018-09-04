
import React from 'react';
import { Row, Col, Card, Icon} from 'antd';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);
const cardInlineStyles = { width: '90%', margin: '5%'};
export default function AlertsList() {
    return(
        <Row align="center" >
            <Col span={8} className={cx('alert-column')}>
            <Card style={cardInlineStyles}>
                    <Icon type="plus-circle" theme="filled" style={{ fontSize: '80px',  marginLeft: '45%'}} />
                    <h1 className={cx('plus-icon-text')}>New Alert</h1>
            </Card>
            </Col>
            <Col span={8} className={cx('alert-column')}>
                <Card style={cardInlineStyles}>
                    <Row>
                        <Col>
                        First row
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        Second row
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={8}>
                <Card style={cardInlineStyles}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
        </Row>
    );
}






