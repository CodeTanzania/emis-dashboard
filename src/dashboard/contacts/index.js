import { Col, Row } from 'antd';
import React from 'react';

export default function Contacts() {
  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col span={4} style={{ borderRight: '1px solid #E0E0E0', minHeight: '100vh' }}>
        Filters
      </Col>
      <Col span={6} style={{ borderRight: '1px solid #E0E0E0', minHeight: '100vh' }}>
        List
      </Col>
      <Col span={14}>
        Details
      </Col>
    </Row>
  );
}
