import React from 'react';
import className from 'classnames/bind';
import { Icon, Col, Badge, Row } from 'antd';

/*Loaded css */
import styles from '../styles.css'


const cx = className.bind(styles);



const Phase = (props) => {
    const { title, count } = props;
    return (
        <div className="mitigation">
        <Row>
            <Col span={8}>
                <h2 className={cx('phaseName')}>{title}</h2>
            </Col>
            <Col span={11} className={cx('barge')}>
                <Badge count={count} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
            </Col>
            <Col span={3}>
                <Icon type="ellipsis" theme="outlined" style={{ marginTop: '6px', fontSize: '25px' }} />
            </Col>
            </Row>
        </div>

    );
}
export default Phase;

