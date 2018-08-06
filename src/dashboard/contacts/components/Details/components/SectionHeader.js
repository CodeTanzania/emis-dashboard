import { Col, Divider, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * Renders header for contact details sections
 * @param {title} title - title for the header
 * @param {actions} actions - React node for actions
 */
export default function SectionHeader({ title, actions }) {
  return (
    <Row className="p-20">
      <Col span={23}>
        <h2>
          {title}
        </h2>
      </Col>
      <Col span={1}>
        {actions}
      </Col>
      <Divider type="horizontal" />
    </Row>
  );
}


SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
};
