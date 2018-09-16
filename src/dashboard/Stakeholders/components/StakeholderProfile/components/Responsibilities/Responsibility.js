import { Button, Col, List, Popover, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

// TODO refactor this to external component
const actions = (
  <div>
    <div>
      <Button icon="edit" className="b-0">
        edit
      </Button>
    </div>
    <div>
      <Button icon="delete" className="b-0">
        Remove
      </Button>
    </div>
  </div>
);

/**
 * ResponsibilityTitle
 *
 * @param {description
 * @param actions}
 */

function ResponsibilityTitle({ description, actionsList }) {
  return (
    <Row>
      <Col xs={22}>
        <span className="f-600 f-15">{description}</span>
      </Col>
      <Col xs={2}>
        <Popover placement="bottom" trigger="click" content={actionsList}>
          <Button icon="ellipsis" className="f-20 b-0" />
        </Popover>
      </Col>
    </Row>
  );
}

/**
 * Renders Responsibility item component for contact details view
 *
 * @function
 * @name Responsibility
 *
 * @param {Object} props - Component props
 * @param {string} props.description - Responsibility description
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Responsibility({ description }) {
  return (
    <List.Item className="p-l-20">
      <List.Item.Meta
        title={
          <ResponsibilityTitle
            description={description}
            actionsList={actions}
          />
        }
      />
    </List.Item>
  );
}

/* props validation */
Responsibility.propTypes = {
  description: PropTypes.string.isRequired,
};

ResponsibilityTitle.propTypes = {
  description: PropTypes.string.isRequired,
  actionsList: PropTypes.element.isRequired,
};
