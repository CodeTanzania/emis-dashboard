import { Icon, Layout, Menu } from 'antd';
import classnames from 'classnames';
import React from 'react';
// Components
import Contacts from './contacts';
// import styles
import styles from './dashboard.css';

// local constants
const { Sider, Content } = Layout;
const cx = classnames.bind(styles);

/**
 * Dashboard layout component
 * This renders layout for dashboard components
 * @name Dashboard
 */
export default function Dashboard() {
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed
        className={cx('sider')}
      >
        <div className="logo" />
        <Menu mode="inline">
          <Menu.Item key="1">
            <Icon type="user" />
            <span>
              Contacts
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className={cx('content')}>
          <Contacts />
        </Content>
      </Layout>
    </Layout>
  );
}
