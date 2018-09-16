import { Button, Col, Dropdown, Icon, Layout, List, Menu, Row } from 'antd';
import React from 'react';
import Select from '../../../../common/components/Select';
import PlanCard from './components/PlanCard';

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
export default function PlanList() {
  return (
    <Layout>
      {/* start primary header */}
      <Header
        style={{
          background: '#fff',
          paddingLeft: 10,
          borderBottom: '1px solid #E0E0E0',
          flexBasis: '50px',
        }}
      >
        <h3>Plans</h3>
      </Header>
      {/* end primary header */}
      {/* Toolbar */}
      {/* start secondary header */}
      <Header
        style={{
          background: '#fff',
          paddingLeft: 10,
          borderBottom: '1px solid #E0E0E0',
          flexBasis: '50px',
        }}
      >
        <Row justify="space-around">
          {/* start filters */}
          <Col span={21}>
            <Row>
              <Col span={4}>
                <Select
                  options={options}
                  placeholder="Select Incident type"
                  style={{ width: 250 }}
                />
              </Col>
            </Row>
          </Col>
          {/* end filters */}
          {/* start actions */}
          <Col span={3}>
            <Row>
              <Col span={12}>
                <Button icon="plus" type="primary">
                  New Plan
                </Button>
              </Col>
              <Col span={12}>
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
      {/* end Toolbar */}
      {/* Plan list content */}
      <Content style={{ backgroundColor: '#fff' }}>
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
    </Layout>
  );
}
