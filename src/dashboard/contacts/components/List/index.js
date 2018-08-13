import { List } from 'antd';
import React from 'react';
import ListFooter from './footer';
/* import component */
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
 * Contacts list component
 *
 * @function
 * @name ContactsList
 *
 * @param {Object} props - data which is an array of contacts
 *
 * @version 0.1.0
 * @since 0.1.0
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
