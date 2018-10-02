import { Button, Col, Drawer, Layout, List, Row } from 'antd';
import React, { Component } from 'react';
import Select from '../../../../common/components/Select';
import Toolbar from '../../../../common/components/Toolbar';
import PlanForm from '../PlanForm';
import PlanCard from './components/PlanCard';

/* local constants */
const { Header, Content } = Layout;
const { Filters, Actions } = Toolbar;
// fake data
const fakeData = [
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 23,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 24,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 123,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
  {
    name: 'Flood',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#fedefe',
  },
];
const options = [
  { label: 'Flood', value: 'flood' },
  { label: 'Fire', value: 'fire' },
  { label: 'Epidemic', value: 'epidemic' },
];

/**
 * Render Initial List of plans based on selected filters
 *
 * @function
 * @name PlanList
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default class PlanList extends Component {
  state = { showForm: false };

  showPlanForm = () => {
    this.setState({ showForm: true });
  };

  hidePlanForm = () => {
    this.setState({ showForm: false });
  };

  render() {
    const { showForm } = this.state;
    return (
      <Layout
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* start primary header */}
        <Header
          style={{
            background: '#fff',
            paddingLeft: 10,
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
          <Filters span={21}>
            <Row>
              <Col span={4}>
                <Select
                  options={options}
                  placeholder="Select Incident type"
                  style={{ width: 250 }}
                />
              </Col>
            </Row>
          </Filters>
          <Actions span={3}>
            <Row type="flex" justify="center">
              <Col span={12}>
                <Button
                  icon="plus"
                  type="primary"
                  title="Create New Plan"
                  onClick={this.showPlanForm}
                >
                  New Plan
                </Button>
              </Col>
            </Row>
          </Actions>
        </Toolbar>
        {/* end Toolbar */}
        {/* Plan list content */}
        <Content
          style={{
            backgroundColor: '#fff',
            flex: '1 0',
            overflowY: 'auto',
          }}
        >
          <div style={{ margin: '15px 15px' }}>
            <List
              grid={{ gutter: 10, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
              dataSource={fakeData}
              renderItem={item => (
                <List.Item>
                  <PlanCard {...item} />
                </List.Item>
              )}
            />
          </div>
        </Content>
        {/* end Plan list content */}
        {/* drawer for showing plan form */}
        <Drawer
          title="Create New Plan"
          placement="right"
          width="35%"
          onClose={this.hidePlanForm}
          maskClosable={false}
          visible={showForm}
        >
          {/* plan form */}
          <PlanForm onCancel={this.hidePlanForm} />
          {/* end plan form */}
        </Drawer>
        {/* end drawer for showing plan form */}
      </Layout>
    );
  }
}
