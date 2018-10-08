/*
 * @file: Stakeholder base component, this component hold all stakeholders details
 * and facilitate communication between them 
 * @Author: kasongoyo@gmail.com 
 * @Date: 2018-09-27 13:45:02 
 */

import React, { Component, Fragment } from 'react';
import { Layout, Button, Drawer, Spin } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { fetchStakeholders } from './actions';
import StakeholderFilter from './components/StakeholderFilter';
import StakeholderList from './components/StakeholderList';
import StakeholderProfile from './components/StakeholderProfile';
import StakeholderForm from './components/StakeholderForm';
import styles from './styles.css';

const cx = classNames.bind(styles);

const { Header } = Layout;
class Stakeholders extends Component {
  state = { visible: false };

  static propTypes = {
    handleFetchStakeholders: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { handleFetchStakeholders } = this.props;
    handleFetchStakeholders();
  }

  handleCancelEdit = () => {
    this.setState({ visible: false });
  };

  handleOnClickAddPersonnel = () => {
    this.setState({ visible: true });
  };

  render() {
    const { loading } = this.props;
    const { visible } = this.state;

    return (
      <Fragment>
        <Drawer
          title="Create Stakeholder"
          width="50%"
          placement="right"
          visible={visible}
          onClose={this.handleCancelEdit}
          maskClosable={false}
        >
          <StakeholderForm handleCancelClick={this.handleCancelEdit} />
        </Drawer>
        <Layout className={cx('Stakeholders')}>
          <Header className={cx('header')}>
            <h3>Stakeholders</h3>
          </Header>
          {!loading && (
            <Header className={cx('actionBar')}>
              <Button
                icon="plus"
                type="primary"
                onClick={this.handleOnClickAddPersonnel}
              >
                New Stakeholder
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
                <div className={cx('stakeholderFilters')}>
                  <StakeholderFilter />
                </div>
                <div className={cx('stakeholderList')}>
                  <StakeholderList />
                </div>
                <div className={cx('stakeholderProfile')}>
                  <StakeholderProfile />
                </div>
              </Fragment>
            )}
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.stakeholders.isLoading,
});

export default connect(
  mapStateToProps,
  {
    handleFetchStakeholders: fetchStakeholders,
  }
)(Stakeholders);
