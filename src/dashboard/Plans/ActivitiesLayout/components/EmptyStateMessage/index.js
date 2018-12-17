import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

/**
 * Empty State component
 *
 * @function
 * @name EmptyStateMessage
 *
 * @param {Object} props
 * @param {bool} props.show
 * @param {string} props.message
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function EmptyStateMessage({ show, message }) {
  return show ? <p className="EmptyStateMessage">{message}</p> : null;
}

EmptyStateMessage.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

EmptyStateMessage.defaultProps = {
  show: false,
};
