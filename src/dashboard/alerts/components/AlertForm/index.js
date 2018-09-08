import React from 'react';
import { Divider, Row, Col } from 'antd';
import classnames from 'classnames';
import WrappedNewAlertForm from './form';
import styles from './index.css';

const cx = classnames.bind(styles);

function AlertForm () {

    return (
        <div className={cx('alert-form')}>
            <Row>
                <Col span={12} offset = {9} >
                <div className={cx('alert-form-title')}>Create New Alert</div>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={23} ><WrappedNewAlertForm /></Col>
            </Row>
        </div>
    );
}

export default AlertForm;