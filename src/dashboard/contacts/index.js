import {
 Button, Col, Input, Row 
} from 'antd';
import classnames from 'classnames';
import React from 'react';
// Components
import Header from './components/Header';
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
          Filters
        </Header>
        {/* end header */}
      </Col>
      {/* end filter section */}
      {/* start list section */}
      <Col span={6} className={cx('section')}>
        {/* start header */}
        <Header>
          <Row type="flex" justify="space-between">
            {/* start search component */}
            <Col span={20}>
              <Search
                placeholder="Search here"
                onSearch={value => console.log(value)}
                style={{ width: '100%' }}
                enterButton={<Button icon="search" />}
              />
            </Col>
            {/* end search component */}
            {/* start add button */}
            <Col span={2}>
              <Button icon="plus" title="Add New Contact" className="b-0 f-20" />
            </Col>
            {/* end add button */}
          </Row>
        </Header>
        {/* end header */}
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
