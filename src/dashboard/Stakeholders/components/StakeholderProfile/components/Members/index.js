/* eslint no-underscore-dangle: "off" */
import React from 'react';
import { Col, Row, Button } from 'antd';
import classNames from 'classnames';
// import component
import PersonnelCard from './components/PersonnelCard';
import styles from './styles.css';

const cx = classNames.bind(styles);

// fake data
const personnelList = [
  {
    _id: 1,
    name: 'John Done',
    phone: '255 790 323',
    title: 'Someone Out there',
    address: 'This, That, There',
  },
  {
    _id: 2,
    name: 'John Done',
    phone: '255 790 323',
    title: 'Someone Out there',
    address: 'This, That, There',
  },
  {
    _id: 3,
    name: 'John Done',
    phone: '255 790 323',
    title: 'Someone Out there',
    address: 'This, That, There',
  },
  {
    _id: 4,
    name: 'John Done',
    phone: '255 790 323',
    title: 'Someone Out there',
    address: 'This, That, There',
  },
  {
    _id: 5,
    name: 'John Done',
    phone: '255 790 323',
    title: 'Someone Out there',
    address: 'This, That, There',
  },
  {
    _id: 6,
    name: 'John Done',
    phone: '255 790 323',
    title: 'Someone Out there',
    address: 'This, That, There',
  },
];

/**
 * Renders a grid view list of key personnel
 *
 * @function
 * @name Members
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Members() {
  return (
    <div className={cx('StakeholderMembers')}>
      <div className={cx('addMemberBtn')}>
        <Row type="flex" justify="end">
          <Button icon="plus">Add Members</Button>
        </Row>
      </div>
      <Row type="flex" justify="space-between">
        {personnelList.map(personnel => (
          <Col key={personnel._id} span={10}>
            <PersonnelCard {...personnel} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
