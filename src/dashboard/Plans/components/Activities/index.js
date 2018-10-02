import {
  Button,
  Col,
  Drawer,
  Dropdown,
  Icon,
  Layout,
  Menu,
  Modal,
  Row,
} from 'antd';
import React, { Component } from 'react';
import Toolbar from '../../../../common/components/Toolbar';
import Phase from './components/ActivitiesPhase';
import { ActionBody, ActionHeader } from './components/ActivityDetails';
import ActivityForm from './components/ActivityForm';

/* local constants */
const { Header, Content } = Layout;
const { Filters, Actions } = Toolbar;
const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="file-pdf" />
      PDF
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="file-excel" />
      Excel
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="file-text" />
      CSV
    </Menu.Item>
  </Menu>
);

// fake Plan activities
const planActivities = [
  { name: 'Clean Up', incident: 'Flood', taskCount: 120 },
  {
    name: 'Teach Risk education in schools',
    incident: 'Flood',
    taskCount: 30,
  },
  {
    name: 'Public Risk awareness campaign and this is not the longest text',
    incident: 'Flood',
    taskCount: 110,
  },
  { name: 'Public Risk awareness campaign', incident: 'Flood', taskCount: 110 },
  { name: 'Public Risk awareness campaign', incident: 'Flood', taskCount: 110 },
  { name: 'Public Risk awareness campaign', incident: 'Flood', taskCount: 110 },
  { name: 'Public Risk awareness campaign', incident: 'Flood', taskCount: 110 },
];

/**
 * Plan Components which arrange plan activities according
 * to their phases
 *
 * @class
 * @name Phases
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default class PlanActions extends Component {
  state = { showActivityForm: false, showActivityDetails: false };

  /**
   * Open drawer which contains action form
   *
   * @function
   * @name handleOpenActivityForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOpenActivityForm = () => {
    this.setState({ showActivityForm: true });
  };

  /**
   * Close drawer which contains action form
   *
   * @function
   * @name handleCloseActivityForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleCloseActivityForm = () => {
    this.setState({ showActivityForm: false });
  };

  /**
   * Handle Open Activity details drawer event
   *
   * @function
   * @name handleOpenActivityDetails
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOpenActivityDetails = () => {
    this.setState({ showActivityDetails: true });
  };

  /**
   * Handle Close Activity details drawer event
   *
   * @function
   * @name handleCloseActivityDetails
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleCloseActivityDetails = () => {
    this.setState({ showActivityDetails: false });
  };

  render() {
    const { showActivityForm, showActivityDetails } = this.state;
    return (
      <Layout
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* start primary header */}
        <Header
          style={{
            background: '#fff',
            padding: '0 10px',
            borderBottom: '1px solid #E0E0E0',
          }}
        >
          <h3>Plans</h3>
        </Header>
        {/* end primary header */}
        {/* Toolbar */}
        <Toolbar
          style={{
            background: '#fff',
            padding: '0 10px',
            borderBottom: '1px solid #E0E0E0',
          }}
        >
          <Filters span={18} />
          <Actions span={6}>
            <Row type="flex" justify="end">
              <Col span={10}>
                <Button
                  icon="plus"
                  type="primary"
                  onClick={this.handleOpenActivityForm}
                >
                  New Action
                </Button>
              </Col>
              <Col span={10}>
                <Dropdown overlay={menu}>
                  <Button style={{ marginLeft: 8 }} type="primary">
                    <Icon type="export" />
                    Export
                    <Icon type="down" />
                  </Button>
                </Dropdown>
              </Col>
            </Row>
          </Actions>
        </Toolbar>
        {/* end Toolbar */}
        {/* start plan actions */}
        <Content
          style={{ backgroundColor: '#fff', flex: '1 0', overflow: 'hidden' }}
        >
          <Row style={{ height: '100%' }}>
            <Col
              span={6}
              style={{ height: '100%', borderRight: '1px solid #e0e0e0' }}
            >
              <Phase
                title="Mitigation"
                count={20}
                actions={planActivities}
                onClickCard={this.handleOpenActivityDetails}
                onClickAddActivity={this.handleOpenActivityForm}
              />
            </Col>
            <Col
              span={6}
              style={{ height: '100%', borderRight: '1px solid #e0e0e0' }}
            >
              <Phase
                title="Preparedness"
                count={5}
                actions={planActivities}
                onClickCard={this.handleOpenActivityDetails}
                onClickAddActivity={this.handleOpenActivityForm}
              />
            </Col>
            <Col
              span={6}
              style={{ height: '100%', borderRight: '1px solid #e0e0e0' }}
            >
              <Phase
                title="Response"
                count={30}
                onClickCard={this.handleOpenActivityDetails}
                onClickAddActivity={this.handleOpenActivityForm}
              />
            </Col>
            <Col span={6} style={{ height: '100%' }}>
              <Phase
                title="Recovery"
                count={40}
                onClickCard={this.handleOpenActivityDetails}
                onClickAddActivity={this.handleOpenActivityForm}
              />
            </Col>
          </Row>
        </Content>
        {/* end plan actions */}
        {/* Drawer for plan form */}
        <Drawer
          title={<ActionHeader />}
          placement="right"
          width="100%"
          onClose={this.handleCloseActivityDetails}
          visible={showActivityDetails}
        >
          <ActionBody />
        </Drawer>
        {/* end Drawer for plan form */}
        {/* Activity form modal */}
        <Modal
          visible={showActivityForm}
          title="New Activity"
          onCancel={this.handleCloseActivityForm}
          okText="Save"
          maskClosable={false}
        >
          <ActivityForm />
        </Modal>
        {/* End Activity form modal */}
      </Layout>
    );
  }
}
