import { Icon, Layout, Menu } from 'antd';
import React from 'react';
// Components
import Contacts from './contacts';

// local constants
const { Sider, Content } = Layout;

/**
 * Dashboard layout component
 * This renders layout for dashboard components
 * @name Dashboard
 *
 */
export default function Dashboard() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed
        style={{ backgroundColor: '#fff', borderRight: '1px solid #E0E0E0' }}
      >
        <div className="logo" />
        <Menu mode="inline">
          <Menu.Item key="1">
            <Icon type="user" />
            <span>
              nav 1
            </span>
          </Menu.Item>
        </Menu>

      </Sider>
      <Layout>
        <Content style={{
          background: '#fff', minHeight: '100vh',
        }}
        >
          <Contacts />
        </Content>
      </Layout>
    </Layout>
  );
}
