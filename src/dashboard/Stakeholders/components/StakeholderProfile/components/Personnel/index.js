import { Col, Row } from 'antd';
import React from 'react';
// import component
import PersonnelCard from './PersonnelCard';

// fake data
const personnelList = [{
  name: 'John Done',
  phone: '255 790 323',
  title: 'Someone Out there',
  address: 'This, That, There',
}, {
  name: 'John Done',
  phone: '255 790 323',
  title: 'Someone Out there',
  address: 'This, That, There',
}, {
  name: 'John Done',
  phone: '255 790 323',
  title: 'Someone Out there',
  address: 'This, That, There',
}, {
  name: 'John Done',
  phone: '255 790 323',
  title: 'Someone Out there',
  address: 'This, That, There',
}, {
  name: 'John Done',
  phone: '255 790 323',
  title: 'Someone Out there',
  address: 'This, That, There',
}, {
  name: 'John Done',
  phone: '255 790 323',
  title: 'Someone Out there',
  address: 'This, That, There',
}];


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
        <Col span={10}>
          <PersonnelCard {...personnel} />
        </Col>
      ))}
    </Row>
  );
}
