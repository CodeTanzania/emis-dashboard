
import React from 'react';
import { Row, Col, Button, Divider } from 'antd';
import AlertFilters  from './components/AlertFilters';
import AlertsList from './components/AlertsList';

export default function Alerts() {
    return(
        <div>
            <div><h1>Alerts</h1></div>
            <Row>
                <Col span={20}>
                <AlertFilters />
                </Col>
                <Col span={4}>
                <Button>Export to PDF</Button>
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






