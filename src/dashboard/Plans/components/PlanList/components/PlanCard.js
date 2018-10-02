import { Badge, Card, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Plan card component
 *
 * @function
 * @name Plan
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.incident
 * @param {number} props.activityCount
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function PlanCard({
  name,
  jurisdiction,
  activityCount,
  color,
  updatedAt,
}) {
  return (
    <Link to="/plans/plan/activities">
      <Card
        style={{
          width: '90%',
          margin: '20px auto',
          borderLeft: `3px solid ${color}`,
        }}
      >
        {/* TODO make sure once hover color changes */}
        <Row justify="space-between">
          <Col span={21}>
            <h3 title={name}>{name}</h3>
            <p style={{ fontSize: '11px', color: '#909090' }}>{jurisdiction}</p>
          </Col>
          <Col span={2}>
            <Badge
              count={activityCount}
              style={{
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
              }}
            />
            <p style={{ fontSize: '11px', marginTop: '5px' }}>Activities</p>
          </Col>
        </Row>
        <p style={{ fontSize: '11px', color: '#909090' }}>
          Last Review Date:
          {new Intl.DateTimeFormat('en-GB').format(updatedAt)}
        </p>
      </Card>
    </Link>
  );
}

/* default Plan props */
PlanCard.defaultProps = {
  activityCount: 0,
  color: '#0071fc',
};

/* props validations for Plan */
PlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  jurisdiction: PropTypes.string.isRequired,
  activityCount: PropTypes.number,
  color: PropTypes.string,
  updatedAt: PropTypes.instanceOf(Date).isRequired,
};
