/*
 * @file: Stakeholder base component, this component hold all stakeholders details
 * and facilitate communication between them 
 * @Author: kasongoyo@gmail.com 
 * @Date: 2018-09-27 13:45:02 
 */

import React, { Component, Fragment } from 'react';
import { Layout, Button, Spin } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StakeholderFilter from './components/StakeholderFilter';
import StakeholderList from './components/StakeholderList';
import StakeholderProfile from './components/StakeholderProfile';
import StakeholderForm from './components/StakeholderFormWrapper';
import styles from './styles.css';

const cx = classNames.bind(styles);

const { Header } = Layout;
class Stakeholders extends Component {
  static propTypes = {
    initStakeholders: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    showStakeholderForm: PropTypes.func.isRequired,
    renderNotificationPanel: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.initStakeholders(); // eslint-disable-line react/destructuring-assignment
  }

  handleNewStakeholderBtn = () => {
    this.props.showStakeholderForm({ title: 'Create Stakeholder' });
  };

  handleNewNotificationBtn = () => {
    this.props.renderNotificationPanel();
  };

  render() {
    const { loading } = this.props;

    return (
      <Fragment>
        <Layout className={cx('Stakeholders')}>
          <Header className={cx('header')}>
            <h3>Stakeholders</h3>
          </Header>
          {!loading && (
            <Header className={cx('actionBar')}>
              <Button
                icon="plus"
                type="primary"
                onClick={this.handleNewStakeholderBtn}
              >
                New Stakeholder
              </Button>
              <Button
                icon="notification"
                type="primary"
                style={{ marginLeft: '10px' }}
                onClick={this.handleNewNotificationBtn}
              >
                New Notification
              </Button>
            </Header>
          )}
          <Layout className={cx('content')}>
            {loading ? (
              <div className={cx('loading')}>
                <Spin />
              </div>
            ) : (
              <Fragment>
                <div className={cx('filters')}>
                  <StakeholderFilter />
                </div>
                <div className={cx('list')}>
                  <StakeholderList />
                </div>
                <div className={cx('profile')}>
                  <StakeholderProfile />
                </div>
              </Fragment>
            )}
          </Layout>
        </Layout>
        <StakeholderForm />
      </Fragment>
    );
  }
}

export default Stakeholders;
