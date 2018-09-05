
import React from 'react';
import { Row, Col, Card, Icon} from 'antd';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);
const { Meta } = Card;

function AlertCardDetails() {

    return(
        <div>
            <h1>Heavy Rains Forecast</h1>
            <p>Created at: 06/08/2018 by Tanznia Meteorogical Agency</p>
            <p>Dar es salaam</p>
            <p>Probable duration: 14/08/2018</p>
        </div>
    );
}

export default function AlertsList() {
    return(
        <Row align="center" >
            <Col span={8} className={cx('alert-column')}>
            <Card>
                    <Icon type="plus-circle" theme="filled" style={{ fontSize: '80px',  marginLeft: '45%'}} />
                    <h1 className={cx('plus-icon-text')}>New Alert</h1>
            </Card>
            </Col>
            <Col span={8} className={cx('alert-column')}>
                <Card
                className={cx('ant-card-custom-style')}
                 title={<AlertCardDetails />}
                 extra={<span>Flood</span>}
                >
                    <Row>
                        <Col span={12} className={cx('ant-card-action-first-col')}>
                        <p>Read More</p>
                        </Col>
                        <Col span={12} className={cx('ant-card-action-second-col')}>
                        <p>View Plan</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={8}>
            <Card
                className={cx('ant-card-custom-style')}
                 title={<AlertCardDetails />}
                 extra={<span>Flood</span>}
                >
                    <Row>
                        <Col span={12} className={cx('ant-card-action-first-col')}>
                        <p>Read More</p>
                        </Col>
                        <Col span={12} className={cx('ant-card-action-second-col')}>
                        <p>View Plan</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}






