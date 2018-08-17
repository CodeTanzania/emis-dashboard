import { Button, Checkbox, Col, List, Popover, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';


const actions = (
  <div>
    <div>
      <Button icon="share-alt" className="b-0">
        Share
      </Button>
    </div>
    <div>
      <Button icon="hdd" className="b-0">
        Archive
      </Button>
    </div>
  </div>
);


/**
 * Render a single contact item component for contacts list
 *
 * @function
 * @name Contact
 *
 * @param {Object} props - Receive name, phone and email as props
 * @param {string} props.name - Contact Name
 * @param {string} props.phone - Contact phone number
 * @param {string} props.email - Contact email address
 *
 * @version 0.1.0
 * @since 0.1.0
 */

export default function Contact(props) {
  const { stakeholder, clickedStakeholder } = props;
  const { name, phone, email } = stakeholder;
  const onClick = () => {
    console.log('a click just occured');
    clickedStakeholder(stakeholder);
  };
  return (
    <List.Item className="p-l-20">
      <List.Item.Meta
        onClick={onClick}
        avatar={<Checkbox />}
        title={(
          <Row>
            <Col xs={21}>
              <span className="f-600 f-15">
                {name}
              </span>
            </Col>
            <Col xs={3}>
              <Popover placement="bottom" trigger="click" content={actions}>
                <Button icon="ellipsis" className="f-20 b-0" />
              </Popover>
            </Col>
          </Row>
        )}
        description={(
          <Row>
            <Col span={8}>
              <Button icon="mobile" className="b-0">
                {phone}
              </Button>
            </Col>
            <Col span={8}>
              <Button icon="mail" className="b-0">
                {email}
              </Button>
            </Col>
          </Row>
        )}
      />
    </List.Item>
  );
}


/* Validating props types */
Contact.propTypes = {
  stakeholder: PropTypes.object,
  clickedStakeholder: PropTypes.object,
};

Contact.defaultProps = {
  stakeholder: {},
  clickedStakeholder: {},
};
