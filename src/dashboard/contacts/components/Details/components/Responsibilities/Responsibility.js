import {
 Button, Col, List, Popover, Row 
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

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

export default function Responsibility({ description }) {
  return (
    <List.Item style={{ paddingLeft: '20px' }}>
      <List.Item.Meta
        title={(
          <Row>
            <Col xs={22}>
              <span className="f-600 f-15">
                {description}
              </span>
            </Col>
            <Col xs={2}>
              <Popover placement="bottom" trigger="click" content={actions}>
                <Button icon="ellipsis" className="f-20 b-0" />
              </Popover>
            </Col>
          </Row>
        )}
      />
    </List.Item>
  );
}


Responsibility.propTypes = {
  description: PropTypes.string.isRequired,
};
