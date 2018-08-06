import { Col, Row } from 'antd';
import React from 'react';
// import component
import InformationItem from './Item';

export default function Information() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <InformationItem label="Phone" value="+255 434 4343" />
        </Col>
        <Col span={12}>
          <InformationItem label="Address" value="Samora Avenue, Block 79" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <InformationItem label="Email" value="mail@mail.com" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <InformationItem label="Fax" value="mail@mail.com" />
        </Col>
      </Row>
    </div>
  );
}
