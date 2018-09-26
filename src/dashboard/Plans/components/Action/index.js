import { Button, Col, Layout, List, Row } from 'antd';
import React from 'react';
import Task from './components/Task';

/* local constant */
const { Header, Content } = Layout;

// fake tasks
const fakeTasks = [
  { description: 'Contact all ward leaders' },
  { description: 'Contact Municipal council and let them know' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
  { description: 'Contact all street cleanup contractors' },
];

/**
 * Action base(layout) component which display a single action details, tasks
 * and action stakeholders.
 *
 * @function
 * @name Action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Action() {
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
        <h3>Action specific</h3>
      </Header>
      {/* end primary header */}
      {/* Toolbar */}
      <Header
        style={{
          background: '#fff',
          padding: '0 10px',
          borderBottom: '1px solid #E0E0E0',
          flexBasis: '50px',
        }}
      >
        <Row justify="space-around">
          {/* start filters */}
          <Col span={22} />
          {/* end filters */}
          {/* start actions */}
          <Col span={2}>
            <Row justify="end">
              <Col span={12}>
                <Button icon="plus" type="primary">
                  New Task
                </Button>
              </Col>
            </Row>
          </Col>
          {/* end actions */}
        </Row>
      </Header>
      {/* end Toolbar */}
      {/* content */}
      <Content style={{ backgroundColor: '#fff' }}>
        <Row>
          <Col
            span={18}
            style={{ borderRight: '1px solid #E0E0E0', padding: '10px 20px' }}
          >
            <h3>Tasks</h3>
            <List
              dataSource={fakeTasks}
              renderItem={task => (
                <List.Item style={{ border: 'none' }}>
                  <Task {...task} />
                </List.Item>
              )}
            />
          </Col>
          <Col span={6}>Status Summary</Col>
        </Row>
      </Content>
      {/* end content */}
    </Layout>
  );
}
