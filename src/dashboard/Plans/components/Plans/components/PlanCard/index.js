import { Badge, Card, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

/**
 * Plan card component
 *
 * A card component renders in plan list
 *
 * @function
 * @name Plan
 *
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
        className="PlanCard"
        style={{
          borderLeft: `3px solid ${color}`,
        }}
      >
        <Row justify="space-between">
          <Col span={21} xl={18} xxl={20}>
            <h3 title={name}>{name}</h3>
            <p className="subtitle">{jurisdiction}</p>
          </Col>
          <Col span={3} xl={6} xxl={4} className="activitiesBadge">
            <Badge
              count={activityCount}
              style={{
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
              }}
            />
            <p className="activitiesBadgeTitle">Activities</p>
          </Col>
        </Row>
        <p className="subtitle">
          Last Review Date: {new Intl.DateTimeFormat('en-GB').format(updatedAt)}
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
