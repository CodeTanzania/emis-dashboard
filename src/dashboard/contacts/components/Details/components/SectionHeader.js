import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * Renders header for contact details sections
 * @param {title} title - title for the header
 * @param {actions} actions - React node for actions
 */
export default function SectionHeader({ title, actions }) {
  return (
    <Row style={{ padding: '20px' }}>
      <Col span={23}>
        <h2>
          {title}
        </h2>
      </Col>
      <Col span={1}>
        {actions}
      </Col>
    </Row>
  );
}


SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
};
