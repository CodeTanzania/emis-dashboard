import { List } from 'antd';
import React from 'react';
import ListFooter from './footer';
/* import component */
import Contact from './item';


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
export default function ContactsList(props) {
  const { stakeholders } = props;
  return (
    <React.Fragment>
      <div className="content scrollable">
        <List
          itemLayout="horizontal"
          dataSource={stakeholders}
          renderItem={item => (<Contact {...item} />)}
        />
      </div>
      <ListFooter />
    </React.Fragment>
  );
}
