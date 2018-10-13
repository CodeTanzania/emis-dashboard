import { Button, Col, Drawer, Layout, List, Row } from 'antd';
import React, { Component } from 'react';
import Select from '../../../common/components/Select';
import Toolbar from '../../../common/components/Toolbar';
import PlanCard from './components/PlanCard';
import PlanForm from './components/PlanForm';
import './styles.css';

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
    color: '#0071fc',
  },
  {
    name: 'Flood',
    jurisdiction: 'Pwani',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 24,
    color: '#0071fc',
  },
  {
    name: 'Fire',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#FADF7F',
  },
  {
    name: 'Epidemic',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 123,
    color: '#e55934',
  },
  {
    name: 'Road Accident',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#596157',
  },
  {
    name: 'Earthquake',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#627C85',
  },
  {
    name: 'Marine Accident',
    jurisdiction: 'Dar es Salaam',
    createdAt: new Date(),
    updatedAt: new Date(),
    activityCount: 13,
    color: '#FCEADE',
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
 * @class
 * @name PlansLayout
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default class PlansLayout extends Component {
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
      <Layout className="PlansLayout">
        {/* start primary header */}
        <Header className="header">
          <h3>Plans</h3>
        </Header>
        {/* end primary header */}
        {/* Toolbar */}
        <Toolbar>
          <Filters span={21}>
            <Row>
              <Col span={4}>
                <Select
                  options={options}
                  placeholder="Select Incident type"
                  style={{ width: '250px' }}
                  onChange={() => {}}
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
        <Content className="content">
          {/* plan list container */}
          <div className="listCardContainer">
            {/* plan list */}
            <List
              grid={{ gutter: 10, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
              dataSource={fakeData}
              renderItem={item => (
                <List.Item>
                  <PlanCard {...item} />
                </List.Item>
              )}
            />
            {/* end plan list */}
          </div>
          {/* end plan list container */}
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
