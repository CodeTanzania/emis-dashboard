import { Button, Col, Drawer, Dropdown, Icon, Layout, Menu, Row } from 'antd';
import React, { Component } from 'react';
import Phase from './components/Phase';

/* local constants */
const { Header, Content } = Layout;
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

// fake Plan actions
const planActions = [
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
 * Plan Components which arrange plan actions(activities) according
 * to their phases
 *
 * @class
 * @name Phases
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default class Phases extends Component {
  state = { showForm: false };

  /**
   * Open drawer which contains action form
   *
   * @function
   * @name handleOpenForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOpenForm = () => {
    this.setState({ showForm: true });
  };

  /**
   * Close drawer which contains action form
   *
   * @function
   * @name handleCloseForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleCloseForm = () => {
    this.setState({ showForm: false });
  };

  render() {
    const { showForm } = this.state;
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
        {/* start secondary header */}
        <Header
          style={{
            background: '#fff',
            padding: '0 10px',
            borderBottom: '1px solid #E0E0E0',
          }}
        >
          <Row type="flex" justify="space-around">
            {/* start filters */}
            <Col span={18} />
            {/* end filters */}
            {/* start actions */}
            <Col span={6}>
              <Row type="flex" justify="end">
                <Col span={10}>
                  <Button
                    icon="plus"
                    type="primary"
                    onClick={this.onOpenDrawer}
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
            </Col>
            {/* end actions */}
          </Row>
        </Header>
        {/* end secondary header */}
        {/* start plan actions */}
        <Content
          style={{ backgroundColor: '#fff', flex: '1 0', overflow: 'hidden' }}
        >
          <Row style={{ height: '100%' }}>
            <Col span={6} style={{ height: '100%' }}>
              <Phase title="Mitigation" count={20} actions={planActions} />
            </Col>
            <Col span={6} style={{ height: '100%' }}>
              <Phase title="Preparedness" count={5} actions={planActions} />
            </Col>
            <Col span={6} style={{ height: '100%' }}>
              <Phase title="Response" count={30} />
            </Col>
            <Col span={6} style={{ height: '100%' }}>
              <Phase title="Recovery" count={40} />
            </Col>
          </Row>
        </Content>
        {/* end plan actions */}
        {/* Drawer for plan form */}
        <Drawer
          title="New Action"
          placement="right"
          width="600px"
          onClose={this.handleCloseForm}
          visible={showForm}
        />
        {/* end Drawer for plan form */}
      </Layout>
    );
  }
}
