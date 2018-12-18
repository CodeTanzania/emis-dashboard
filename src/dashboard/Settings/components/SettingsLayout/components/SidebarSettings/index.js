import React, { Fragment } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

class SidebarSettings extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Fragment>
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>System Settings</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <NavLink to="/settings/IncidentType">
                <span>IncidentType</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">Alert Category</Menu.Item>
            <SubMenu key="sub3" title="Warning">
              <Menu.Item key="3">
                <NavLink to="/settings/warning/message">Message Type</NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/settings/warning/">Warning Type</NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <NavLink to="/settings/plan">Plan</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <span>General Settings</span>
              </span>
            }
          >
            <Menu.Item key="6">User</Menu.Item>
            <Menu.Item key="7">Roles</Menu.Item>
            <Menu.Item key="8">Preference</Menu.Item>
            <Menu.Item key="9">COnfiguration</Menu.Item>
          </SubMenu>
        </Menu>
      </Fragment>
    );
  }
}

export default SidebarSettings;
