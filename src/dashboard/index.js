import React, { Fragment } from 'react';
import { Icon, Layout, Menu } from 'antd';
import classnames from 'classnames';
import { NavLink, Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import Plans from './Plans';
import Stakeholders from './Stakeholders';
import Settings from './Settings';
import Resources from './Resources';
import NotificationPanel from '../common/components/NotificationPanel';
import ItemForm from './Resources/components/ItemForm';
/* import styles */
import styles from './styles.css';

/* local constants */
const { Sider, Content } = Layout;
const cx = classnames.bind(styles);

const resourceSvg = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1417.32 1417.32"
  >
    <path d="M1222.75,65H154.36a96.52,96.52,0,0,0-96.52,96.52V1229.87a96.52,96.52,0,0,0,96.52,96.53H1222.75a96.53,96.53,0,0,0,96.53-96.53V161.48A96.52,96.52,0,0,0,1222.75,65ZM110.64,185a67.2,67.2,0,0,1,67.2-67.2H662.63a5.29,5.29,0,0,1,5.29,5.28V324.16a20.63,20.63,0,0,0,20.64,20.64h28.5c22.52,0,45.61-5.14,72.69-16.2a61.69,61.69,0,0,1,41-1.74,61.06,61.06,0,0,1,41.9,44.46c4.38,19.36.19,38.31-11.82,53.36-16.51,20.68-45.62,28.83-70.28,19.19-28.69-11.27-52.86-16.51-76.06-16.51H688.56A20.63,20.63,0,0,0,667.92,448V669.75a5.29,5.29,0,0,1-5.29,5.29H487.44a5.28,5.28,0,0,1-5.28-5.29,128.73,128.73,0,0,1,3.33-28.29,223.26,223.26,0,0,1,10.31-32.68,100.62,100.62,0,0,0,7-36.94A102.76,102.76,0,0,0,464,491.18c-24.66-19.73-56.8-26.92-88.23-19.86-35.38,8-64.83,35.73-75,70.61-6.73,23-5.63,46.61,3.14,68.13,9,21.94,13.15,40.11,13.15,57.13v2.56a5.29,5.29,0,0,1-5.29,5.29H115.92a5.28,5.28,0,0,1-5.28-5.29Zm557.28,861.6v221.75a5.29,5.29,0,0,1-5.29,5.29H177.84a67.21,67.21,0,0,1-67.2-67.21V721.6a5.27,5.27,0,0,1,5.28-5.28H337.68a20.64,20.64,0,0,0,20.64-20.64V667.19c0-22.55-5.16-45.67-16.2-72.73a61.63,61.63,0,0,1,42.74-82.85c19.36-4.35,38.31-.18,53.36,11.83a61.69,61.69,0,0,1,23.3,48.4,59.82,59.82,0,0,1-4.13,21.88c-11.27,28.69-16.51,52.86-16.51,76v25.91a20.63,20.63,0,0,0,20.64,20.64H662.63a5.28,5.28,0,0,1,5.29,5.28V922.72a20.63,20.63,0,0,0,20.64,20.64H717c22.52,0,45.63-5.14,72.71-16.21a61.75,61.75,0,0,1,41-1.73A59.53,59.53,0,0,1,845.36,932a61.08,61.08,0,0,1,27.28,37.94c4.38,19.36.19,38.29-11.82,53.33-16.51,20.68-45.62,28.84-70.28,19.2-28.69-11.27-52.86-16.51-76.06-16.51H688.56A20.63,20.63,0,0,0,667.92,1046.56Zm598.55,159.83a67.2,67.2,0,0,1-67.2,67.21H714.48a5.28,5.28,0,0,1-5.28-5.29V1072.48a5.27,5.27,0,0,1,5.28-5.28,128.89,128.89,0,0,1,28.3,3.33,223,223,0,0,1,32.69,10.31,100.72,100.72,0,0,0,36.93,7A102.75,102.75,0,0,0,893.08,1049c19.71-24.68,26.93-56.84,19.81-88.21-8-35.4-35.71-64.83-70.57-75-23-6.71-46.58-5.63-68.13,3.14-22,9-40.14,13.15-57.15,13.15h-2.56a5.28,5.28,0,0,1-5.28-5.29V721.6a5.27,5.27,0,0,1,5.28-5.28H936.24a20.64,20.64,0,0,0,20.64-20.64V667.19c0-22.55-5.16-45.67-16.21-72.73a61.64,61.64,0,0,1,42.75-82.85c19.34-4.35,38.31-.18,53.35,11.83a61.67,61.67,0,0,1,23.31,48.4,59.82,59.82,0,0,1-4.13,21.88c-11.27,28.67-16.51,52.81-16.51,76v25.93a20.63,20.63,0,0,0,20.64,20.64h201.11a5.27,5.27,0,0,1,5.28,5.28Zm0-536.64a5.28,5.28,0,0,1-5.28,5.29H1086a5.29,5.29,0,0,1-5.29-5.29v0c0-17.87,4.34-37.25,13.65-61a100.61,100.61,0,0,0,7-36.94,102.76,102.76,0,0,0-38.82-80.66c-24.68-19.73-56.82-26.92-88.23-19.86-35.38,8-64.83,35.73-75,70.61-6.73,23.06-5.63,46.63,3.14,68.13,9,21.94,13.15,40.11,13.15,57.13v2.56a5.29,5.29,0,0,1-5.29,5.29H714.48a5.28,5.28,0,0,1-5.28-5.29V473.92a5.27,5.27,0,0,1,5.28-5.28,128.89,128.89,0,0,1,28.3,3.33,223,223,0,0,1,32.69,10.31,100.52,100.52,0,0,0,36.93,7,102.75,102.75,0,0,0,80.68-38.85c19.71-24.66,26.93-56.84,19.81-88.21-8-35.4-35.73-64.83-70.59-75-23-6.7-46.58-5.65-68.13,3.14-22,9-40.12,13.15-57.11,13.15h-2.58a5.28,5.28,0,0,1-5.28-5.28V123a5.28,5.28,0,0,1,5.28-5.28h484.79a67.2,67.2,0,0,1,67.2,67.2Z" />
  </svg>
);

const ResourceIcon = props => <Icon component={resourceSvg} {...props} />;

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
              <NavLink to="/settings/incidentType">
                <Icon type="setting" className="f-25" />
                <span>Settings</span>
              </NavLink>
            </Menu.Item>
            {/* end setting menu */}
            <Menu.Item key="4">
              <NavLink to="/resources">
                <ResourceIcon />
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
              <Route path="/settings/incidentType" exact component={Settings} />
            </Switch>
          </Content>
        </Layout>
        {/* end content section */}
      </Layout>
      <NotificationPanel />
      <ItemForm />
    </Fragment>
  );
}
