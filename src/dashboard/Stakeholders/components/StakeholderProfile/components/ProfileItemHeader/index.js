import { Col, Divider, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Renders header for contact details sections
 *
 * @function
 * @name SectionHeader
 *
 * @param {string} title - title for the header
 * @param {Object} actions - React node for actions
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function SectionHeader({ title, actions }) {
  return (
    <Row style={{ paddingTop: '20px' }}>
      <Col span={23}>
        <h3 style={{ paddingLeft: '20px', paddingRight: '20px' }}>{title}</h3>
      </Col>
      <Col span={1}>{actions}</Col>
      <Divider type="horizontal" />
    </Row>
  );
}

/* prop validations */
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
};
