import { Icon, Layout, Menu } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
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
    <Layout className={cx('full-view-height')}>
      <Sider
        trigger={null}
        collapsible
        collapsed
        className={cx('sider')}
      >
        <img src={logo} alt="logo" className={cx('logo')} />
        <Menu mode="inline">
          {/* contact menu */}
          <Menu.Item key="1">
            <NavLink to="/contacts">
              <Icon type="idcard" className="f-25" />
              <span>
                Contacts
              </span>
            </NavLink>
          </Menu.Item>
          {/* end contact menu */}
          {/* setting menu */}
          <Menu.Item key="1">
            <NavLink to="/contacts">
              <Icon type="setting" className="f-25" />
              <span>
                Settings
              </span>
            </NavLink>
          </Menu.Item>
          {/* end setting menu */}
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
