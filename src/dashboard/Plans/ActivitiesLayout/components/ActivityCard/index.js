import { Badge, Card, Col, Row, Icon } from 'antd';
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
          <h4 title={name} className="name">
            {name}
          </h4>
          <Row>
            <Col span={8} title="Participant Stakeholders">
              <Icon type="team" /> {` : 10`}
            </Col>
            <Col span={8} title="Resource Count">
              <Icon type="gold" /> {` : 10`}
            </Col>
          </Row>
        </Col>
        <Col title="SOP count" span={2} className="tasksBadge">
          <Badge
            count={taskCount}
            style={{
              backgroundColor: '#fff',
              color: '#999',
              boxShadow: '0 0 0 1px #d9d9d9 inset',
            }}
          />
          <p className="tasksBadgeTitle">SOP(s)</p>
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
