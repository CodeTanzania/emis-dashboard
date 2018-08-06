import {
 Avatar, Button, Col, Popover, Row 
} from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
/* import styles */
import styles from './personnel.css';

/* local constants */
const actions = (
  <div>
    <div>
      <Button icon="share-alt" className="b-0">
        Share
      </Button>
    </div>
    <div>
      <Button icon="edit" className="b-0">
        Edit
      </Button>
    </div>
    <div>
      <Button icon="delete" className="b-0">
        Delete
      </Button>
    </div>
  </div>
);
const cx = classnames.bind(styles);

export default function PersonnelCard({
  name, title, phone, address,
}) {
  return (
    <Row className={cx('personnel-card')}>
      <Col span={4}>
        <Avatar size="large" icon="user" />
      </Col>
      <Col span={18}>
        <Row>
          <Col span={16}>
            <h3>
              {name}
            </h3>
          </Col>
          <Col span={8}>
            {phone}
          </Col>
          <Col span={24}>
            {title}
          </Col>
          <Col span={24}>
            {address}
          </Col>
        </Row>
      </Col>
      <Col span={2} className="p-0">
        <Popover placement="bottom" trigger="click" content={actions}>
          <Button icon="ellipsis" className="f-20 b-0" />
        </Popover>
      </Col>
    </Row>
  );
}

PersonnelCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
