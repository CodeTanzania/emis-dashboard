import { Icon, Layout, Menu } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import Plans from './plans';
import Stakeholders from './Stakeholders';
import Settings from './Settings';
/* import styles */
import styles from './styles.css';

/* local constants */
const { Sider, Content } = Layout;
const cx = classnames.bind(styles);

/**
 * Dashboard layout component
 * This renders layout for dashboard components
 *
 * @function
 * @name Dashboard
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Dashboard() {
  return (
    <Layout className={cx('full-view-height')}>
      <Sider trigger={null} collapsible collapsed className={cx('sider')}>
        {/* application logo */}
        <img src={logo} alt="logo" className={cx('logo')} />
        {/* end application logo */}
        <Menu mode="inline">
          {/* plan menu */}
          <Menu.Item key="1">
            <NavLink to="/plans/index">
              <Icon type="file-text" theme="outlined" className="f-25" />
              <span>Plans</span>
            </NavLink>
          </Menu.Item>
          {/* end plan menu */}
          {/* contact menu */}
          <Menu.Item key="2">
            <NavLink to="/stakeholders">
              <Icon type="idcard" className="f-25" />
              <span>Stakeholders</span>
            </NavLink>
          </Menu.Item>
          {/* end contact menu */}
          {/* setting menu */}
          <Menu.Item key="3">
            <NavLink to="/settings/incidentType">
              <Icon type="setting" className="f-25" />
              <span>Settings</span>
            </NavLink>
          </Menu.Item>
          {/* end setting menu */}
        </Menu>
      </Sider>
      {/* content section */}
      <Layout style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#fff',
        borderTop: '1px solid #e6e6e6',
         
        }}>
        <Content className={cx('content')}>
          <Switch>
            <Route path="/plans" component={Plans} />
            <Route path="/stakeholders" exact component={Stakeholders} />
            <Route path="/settings/incidentType" exact component={Settings}></Route>
          </Switch>
        </Content>
      </Layout>
      {/* end content section */}
    </Layout>
  );
}
