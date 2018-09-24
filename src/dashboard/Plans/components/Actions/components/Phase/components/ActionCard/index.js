import { Badge, Card, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

/* local constants */
const { Meta } = Card;

/**
 * Action Detail component
 *
 * @function
 * @name Details
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.incident
 * @param {number} props.taskCount
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Details({ name, incident, taskCount }) {
  return (
    <Row justify="space-between">
      <Col span={21}>
        <h3 title={name}>{name}</h3>
        <p style={{ fontSize: '11px', color: '#909090' }}>{incident}</p>
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
  );
}

/**
 * Action card component
 *
 * @function
 * @name Action
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.incident
 * @param {number} props.taskCount
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ActionCard({ name, incident, taskCount }) {
  return (
    <Link to="/plans/actions/action">
      <Card
        style={{
          width: '90%',
          margin: '5px auto',
          borderLeft: '3px solid #0092fd',
        }}
      >
        <Meta
          title={
            <Details name={name} incident={incident} taskCount={taskCount} />
          }
        />
      </Card>
    </Link>
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
};

/* default Details props */
Details.defaultProps = {
  taskCount: 0,
};

/* props validation for details */
Details.propTypes = {
  name: PropTypes.string.isRequired,
  incident: PropTypes.string.isRequired,
  taskCount: PropTypes.number,
};
