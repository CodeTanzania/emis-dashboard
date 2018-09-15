import { Badge, Card, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/* local constants */
const { Meta } = Card;

/**
 * Plan Detail component
 *
 * @function
 * @name Details
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.incident
 * @param {number} props.activityCount
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Details({ name, jurisdiction, activityCount, updatedAt }) {
  return (
    <React.Fragment>
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
          <p style={{ fontSize: '11px', marginTop: '5px' }}>Actions</p>
        </Col>
      </Row>
      <p style={{ fontSize: '11px', color: '#909090' }}>
        Last updated Date: {new Intl.DateTimeFormat('en-GB').format(updatedAt)}
      </p>
    </React.Fragment>
  );
}

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
  updatedAt,
}) {
  return (
    <Card
      style={{
        width: '90%',
        margin: '20px auto',
        borderLeft: '3px solid #0092fd',
      }}
    >
      <Meta
        title={
          <Details
            name={name}
            jurisdiction={jurisdiction}
            activityCount={activityCount}
            updatedAt={updatedAt}
          />
        }
      />
    </Card>
  );
}

/* default Plan props */
PlanCard.defaultProps = {
  activityCount: 0,
};

/* props validations for Plan */
PlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  jurisdiction: PropTypes.string.isRequired,
  activityCount: PropTypes.number,
  updatedAt: PropTypes.instanceOf(Date).isRequired,
};

/* default Details props */
Details.defaultProps = {
  activityCount: 0,
};

/* props validation for details */
Details.propTypes = {
  name: PropTypes.string.isRequired,
  jurisdiction: PropTypes.string.isRequired,
  activityCount: PropTypes.number,
  updatedAt: PropTypes.instanceOf(Date).isRequired,
};
