import React, { Fragment } from 'react';
import { Col, Row } from 'antd';
import Header from 'Header';
import classNames from 'classnames/bind';
import StakeholderProfile from './components/StakeholderProfile';
import StakeholderFilter from './components/StakeholderFilter';
import StakeholderList from './components/StakeholderList';
/* load styles */
import styles from './styles.css';
const cx = classNames.bind(styles);


/**
 * Render contacts panel component which have all the the components in relation
 * to contacts
 *
 * @function
 * @name Contacts
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const Stakeholders = () => (
  <Fragment>
    <Header title='Stakeholders' />
    <Row>
      <Col span={4} className={cx('section')}>
        <StakeholderFilter />
      </Col>
      <Col span={6} className={cx('section')}>
        <StakeholderList />
      </Col>
      <Col span={14} className={cx('section')}>
        <StakeholderProfile />
      </Col>
    </Row>
  </Fragment>
);


export default Stakeholders;
