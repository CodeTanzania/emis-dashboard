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
export default function Information(props) {
  const { stakeholder } = props;
  const { phone, email } = stakeholder;
  return (
    <div>
      <Row>
        <Col span={12}>
          <InformationItem label="Phone" value={phone} />
        </Col>
        <Col span={12}>
          <InformationItem label="Address" value="Samora Avenue, Block 79" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <InformationItem label="Email" value={email} />
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
