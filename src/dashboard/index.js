import { Icon, Layout, Menu } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
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
            <NavLink to="/contacts">
              <Icon type="idcard" className="f-25" />
              <span>
                Contacts
              </span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className={cx('content')}>
          <Switch>
            <Route path="/contacts" exact component={Contacts} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
