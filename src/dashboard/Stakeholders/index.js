import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import React, { Fragment } from 'react';
import Header from '../../common/components/Header';
import StakeholderFilter from './components/StakeholderFilter';
import StakeholderList from './components/StakeholderList';
import StakeholderProfile from './components/StakeholderProfile';
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
    <Header title="Stakeholders" />
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
