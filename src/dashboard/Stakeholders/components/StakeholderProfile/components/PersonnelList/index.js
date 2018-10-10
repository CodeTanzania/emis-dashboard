/* eslint no-underscore-dangle: "off" */
import { Col, Row } from 'antd';
import React from 'react';
// import component
import PersonnelCard from './components/PersonnelCard';

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
 * @name PersonnelList
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function PersonnelList() {
  return (
    <Row type="flex" justify="space-around">
      {personnelList.map(personnel => (
        <Col key={personnel._id} span={10}>
          <PersonnelCard {...personnel} />
        </Col>
      ))}
    </Row>
  );
}
