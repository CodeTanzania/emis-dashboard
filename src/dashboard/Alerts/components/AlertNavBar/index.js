import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * Renders components for navigating
 * the Alerts Dashboard
 *
 * @function
 * @name AlertNavBar
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function AlertNavBar(props) {
  return <div className="AlertNavBar">{props.children}</div>;
}

export default AlertNavBar;

AlertNavBar.propTypes = {
  children: PropTypes.element.isRequired,
};
