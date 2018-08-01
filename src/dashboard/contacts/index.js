import {
 Button, Col, Input, Row 
} from 'antd';
import classnames from 'classnames';
import React from 'react';
// Components
import Header from './components/Header';
import List from './components/List';
// load styles
import styles from './index.css';

// local constants
const { Search } = Input;
const cx = classnames.bind(styles);

export default function Contacts() {
  return (
    <Row>
      {/* start filter section */}
      <Col span={4} className={cx('section')}>
        {/* start header */}
        <Header>
          <Row type="flex" justify="space-around">
            <Col span={10}>
              <h3>
                Contacts
              </h3>
            </Col>
            <Col span={10}>
              <Button icon="plus" type="primary">
                New Contact
              </Button>
            </Col>
          </Row>
        </Header>
        {/* end header */}
      </Col>
      {/* end filter section */}
      {/* start list section */}
      <Col span={6} className={cx('section')}>
        {/* start header */}
        <Header>
          {/* start search component */}
          <Search
            placeholder="Search here"
            onSearch={value => console.log(value)}
            style={{ width: '100%' }}
            enterButton={<Button icon="search" />}
          />
          {/* end search component */}
        </Header>
        {/* end header */}
        {/* start contact list */}
        <List />
        {/* end contact list */}
      </Col>
      {/* end list section */}
      {/* start details section */}
      <Col span={14}>
        {/* start header */}
        <Header>
          Basic Information
        </Header>
        {/* end header */}
      </Col>
      {/* end details section */}
    </Row>
  );
}
