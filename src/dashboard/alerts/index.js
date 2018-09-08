
import React from 'react';
import { Row, Col, Button, Divider } from 'antd';
import AlertFilters  from './components/AlertFilters';
import AlertsList from './components/AlertsList';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);

export default function Alerts() {
    return(
        <div className={cx('alerts')}>
            <div className={cx('alerts-heading')}><h1>Alerts</h1></div>
            <Row className={cx('top-row')}>
                <Col span={20}>
                <AlertFilters />
                </Col>
                <Col span={4}>
                <Button type="primary" >Export to PDF</Button>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={24}>
                    <AlertsList />
                </Col>
            </Row>
        </div>
    );
}






