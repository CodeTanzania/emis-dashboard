import { Avatar, Button, Col, Popover, Row } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
/* import styles */
import styles from './styles.css';

/* local constants */
const cx = classNames.bind(styles);
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


/**
 * Renders Key personnel contact card
 *
 * @function
 * @name PersonnelCard
 *
 * @param {Object} props - component props
 * @param {string} props.name - contact name
 * @param {string} props.title - contact title
 * @param {string} props.phone - contact phone number
 * @param {string} props.address  - contact physical address
 */
export default function PersonnelCard({
  name, title, phone, address,
}) {
  return (
    <Row className={cx('personnel-card')}>
      <Col xs={20} sm={20} md={20} lg={20} xl={22} xxl={22}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={4}>
            <Avatar size="large" icon="user" />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={18} xxl={20}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={14}>
                <h3>
                  {name}
                </h3>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={10}>
                {phone}
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                {title}
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                {address}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} xl={2} xxl={2} className="p-0">
        <Popover placement="bottom" trigger="click" content={actions}>
          <Button icon="ellipsis" className="f-20 b-0" />
        </Popover>
      </Col>
    </Row>
  );
}


/* props validation */
PersonnelCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
