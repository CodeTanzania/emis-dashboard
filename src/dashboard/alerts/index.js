
import React from 'react';
import { Row, Col, Button, Divider, Icon } from 'antd';
import AlertFilters  from './components/AlertFilters';
import AlertsList from './components/AlertsList';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);

export default function Alerts() {
    return(
        <div className={cx('alerts')}>
            <Row className={cx('alerts-heading')}>
                <Col span={24}>
                <div>Alerts</div>
                </Col>
            </Row>
            <Row style={{margin: '15px 0px 0px 40px'}}>
                <Col span={16} className={cx('filters-alerts')}>
                <AlertFilters />
                </Col>
                <Col span={4} offset={4}>
                    <div class='map-export-text'>
                        <span  ><Icon type="global" theme="outlined" style={{fontSize: '32px'}} /> Map</span>
                        <span><Icon type="export" theme="outlined" style={{fontSize: '32px'}} /> Export</span>
                    </div>
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



