import { List } from 'antd';
import React from 'react';
import ListFooter from './footer';
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
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
  { name: 'Tanzania Red Cross Society', phone: '+233 54534545', email: 'trcs@mail.com' },
];

/**
 * This component renders a list of contacts
 * @name ContactsList
 * @param {Object} props - data which is an array of contacts
 */
export default function ContactsList() {
  return (
    <React.Fragment>
      <div className="content scrollable">
        <List
          itemLayout="horizontal"
          dataSource={fakeData}
          renderItem={item => (<Contact {...item} />)}
        />
      </div>
      <ListFooter />
    </React.Fragment>
  );
}
