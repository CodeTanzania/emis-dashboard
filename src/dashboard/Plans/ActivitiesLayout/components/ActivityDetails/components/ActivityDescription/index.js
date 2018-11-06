import { Button, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

/**
 * ActivityDescription
 *
 * @function
 * @name ActivityDescription
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ActivityDescription({ description }) {
  return (
    <div className="ActivityDescription">
      <Row className="header">
        <Col span={22}>
          <h4>Description</h4>
        </Col>
        <Col span={2}>
          <Button
            title="Edit Activity Description"
            type="default"
            icon="edit"
            style={{ border: 0 }}
          >
            Edit Description
          </Button>
        </Col>
      </Row>
      <p>{description}</p>
    </div>
  );
}

ActivityDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
