import React, { Fragment } from 'react';
import { Icon, Layout, Menu } from 'antd';
import classnames from 'classnames';
import { NavLink, Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import Plans from './Plans';
import Stakeholders from './Stakeholders';
import Resources from './Resources';
import NotificationPanel from '../common/components/NotificationPanel';
import AdjustStockForm from './Resources/components/AdjustStockForm';
import ItemForm from './Resources/components/ItemForm';
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
    <Fragment>
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
              <NavLink to="/contacts">
                <Icon type="setting" className="f-25" />
                <span>Settings</span>
              </NavLink>
            </Menu.Item>
            {/* end setting menu */}
            <Menu.Item key="4">
              <NavLink to="/resources">
                <Icon type="idcard" className="f-25" />
                <span>Resources</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* content section */}
        <Layout>
          <Content className={cx('content')}>
            <Switch>
              <Route path="/plans" component={Plans} />
              <Route path="/stakeholders" exact component={Stakeholders} />
              <Route path="/resources" exact component={Resources} />
            </Switch>
          </Content>
        </Layout>
        {/* end content section */}
      </Layout>
      <NotificationPanel />
      <AdjustStockForm />
      <ItemForm />
    </Fragment>
  );
}
