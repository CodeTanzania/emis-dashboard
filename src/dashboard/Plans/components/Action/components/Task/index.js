import { Checkbox, Col, Icon, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Action task item
 *
 * @function
 * @name Task
 *
 * @param {string} description - Task description
 * @returns {ReactElement}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Task({ description }) {
  return (
    <Row justify="space-between" style={{ width: '100%', paddingLeft: 10 }}>
      <Col span={1}>
        <Checkbox />
      </Col>
      <Col span={22}>
        <p>{description}</p>
      </Col>
      <Col span={1}>
        <Icon type="ellipsis" />
      </Col>
    </Row>
  );
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
};
