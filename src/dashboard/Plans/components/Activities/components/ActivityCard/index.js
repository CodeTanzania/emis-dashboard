import { Badge, Card, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Action card component
 *
 * @function
 * @name Action
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.incident
 * @param {number} props.taskCount
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ActionCard({ name, incident, taskCount, onClick }) {
  return (
    <Card
      style={{
        width: '90%',
        margin: '5px auto',
        borderLeft: '3px solid #0092fd',
      }}
      onClick={onClick}
    >
      <Row type="flex" justify="space-around">
        <Col span={20}>
          <h4 title={name}>{name}</h4>
          <p
            style={{
              fontSize: '11px',
              color: '#909090',
            }}
          >
            {incident}
          </p>
        </Col>
        <Col span={2}>
          <Badge
            count={taskCount}
            style={{
              backgroundColor: '#fff',
              color: '#999',
              boxShadow: '0 0 0 1px #d9d9d9 inset',
            }}
          />
          <p style={{ fontSize: '11px', marginTop: '5px' }}>Tasks</p>
        </Col>
      </Row>
    </Card>
  );
}

/* default Action props */
ActionCard.defaultProps = {
  taskCount: 0,
};

/* props validations for Action */
ActionCard.propTypes = {
  name: PropTypes.string.isRequired,
  incident: PropTypes.string.isRequired,
  taskCount: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
