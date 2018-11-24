import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

/**
 * ActivityDescription
 *
 * @function
 * @name ActivityDescription
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ActivityDescription({ description }) {
  return (
    <div className="ActivityDescription">
      <h4 className="header">Description</h4>
      <p>{description}</p>
    </div>
  );
}

ActivityDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
