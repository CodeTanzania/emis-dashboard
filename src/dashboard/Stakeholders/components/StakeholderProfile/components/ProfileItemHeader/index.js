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
    <Row className="p-20">
      <Col span={23}>
        <h2>{title}</h2>
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
