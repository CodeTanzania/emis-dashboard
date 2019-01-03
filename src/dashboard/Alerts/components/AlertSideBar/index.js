import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import './styles.css';

/**
 * Component for rendering
 * right sidebar contents on map
 *
 * @function
 * @name AlertSideBar
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function AlertSideBar({ title, children }) {
  return (
    <div className="AlertSideBar">
      <div className="Title">{title}</div>
      <Divider />
      <div className="Contents">{children}</div>
    </div>
  );
}

export default AlertSideBar;

AlertSideBar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
