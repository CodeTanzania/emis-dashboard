import { Col, Row } from 'antd';
import React from 'react';
/* import component */
import InformationItem from './Item';


/**
 * Contact information component
 * Render basic information about the contact
 *
 * @function
 * @name Information
 *
 * @version 0.1.0
 * @since 0.1.0
 */
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
