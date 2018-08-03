import { List } from 'antd';
import React from 'react';
// import component
import Contact from './item';


const fakeData = [
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
];

export default function ContactsList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={fakeData}
      renderItem={item => (<Contact {...item} />)}
    />
  );
}
