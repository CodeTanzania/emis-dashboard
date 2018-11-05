import { Badge, Card, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

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
export default function ActivityCard({ name, taskCount, onClick }) {
  return (
    <Card className="ActivityCard" onClick={onClick}>
      <Row type="flex" justify="space-around">
        <Col span={20}>
          <h4 title={name}>{name}</h4>
        </Col>
        <Col span={2} className="tasksBadge">
          <Badge
            count={taskCount}
            style={{
              backgroundColor: '#fff',
              color: '#999',
              boxShadow: '0 0 0 1px #d9d9d9 inset',
            }}
          />
          <p className="tasksBadgeTitle">Tasks</p>
        </Col>
      </Row>
    </Card>
  );
}

/* default Action props */
ActivityCard.defaultProps = {
  taskCount: 0,
};

/* props validations for Action */
ActivityCard.propTypes = {
  name: PropTypes.string.isRequired,
  taskCount: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
