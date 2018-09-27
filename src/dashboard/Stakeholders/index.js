/*
 * @file: Stakeholder base component, this component hold all stakeholders details
 * and facilitate communication between them 
 * @Author: kasongoyo@gmail.com 
 * @Date: 2018-09-27 13:45:02 
 */

import React, { Component, Fragment } from 'react';
import { Layout, Button, Drawer } from 'antd';
import StakeholderFilter from './components/StakeholderFilter';
import StakeholderList from './components/StakeholderList';
import StakeholderProfile from './components/StakeholderProfile';
import StakeholderForm from './components/StakeholderForm';

const { Header } = Layout;
class Stakeholders extends Component {
  state = { visible: false };

  handleCancelEdit = () => {
    this.setState({ visible: false });
  };

  handleOnClickAddPersonnel = () => {
    this.setState({ visible: true });
  };

  render() {
    const { visible } = this.state;
    const headerStyle = {
      background: '#fafafa',
      paddingLeft: '10px',
      borderBottom: '1px solid rgb(224, 224, 224)',
    };

    const secondaryHeaderStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      background: '#ffffff',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingRight: '5%',
      borderBottom: '1px solid rgb(224, 224, 224)',
      lineHeight: 'normal',
      height: 'auto',
    };

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
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
          <Header style={headerStyle}>
            <h3>Stakeholders</h3>
          </Header>
          <Header style={secondaryHeaderStyle}>
            <Button
              icon="plus"
              type="primary"
              onClick={this.handleOnClickAddPersonnel}
            >
              New Stakeholder
            </Button>
          </Header>
          <Layout style={{ flexDirection: 'row', flex: 1 }}>
            <div style={{ width: '20%', borderRight: '1px solid #E0E0E0' }}>
              <StakeholderFilter />
            </div>
            <div style={{ width: '25%', borderRight: '1px solid #E0E0E0' }}>
              <StakeholderList />
            </div>
            <div style={{ width: '55%' }}>
              {' '}
              <StakeholderProfile />
            </div>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

export default Stakeholders;
