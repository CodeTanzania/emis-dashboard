import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function AlertNavBar(props) {
  return <div className="AlertNavBar">{props.children}</div>;
}

export default AlertNavBar;

AlertNavBar.propTypes = {
  children: PropTypes.element.isRequired,
};
