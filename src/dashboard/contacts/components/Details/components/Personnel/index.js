import { Col, Row } from 'antd';
import React from 'react';
// import component
import PersonnelCard from './PersonnelCard';


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
