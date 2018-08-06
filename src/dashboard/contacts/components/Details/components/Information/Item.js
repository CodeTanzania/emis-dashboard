import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

export default function InformationItem({ label, value }) {
  return (
    <Row type="flex" justify="space-around" style={{ marginBottom: '15px' }}>
      <Col span={6}>
        <h3>
          {label}
          {' '}
          :
        </h3>
      </Col>
      <Col span={18}>
        <span style={{ fontSize: '15px', fontWeight: 600 }}>
          {value}
        </span>
      </Col>
    </Row>
  );
}

InformationItem.defaultProps = {
  value: 'N/A',
};

InformationItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};
