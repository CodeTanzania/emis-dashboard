import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

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
    <Fragment>
      <h4 className="ActivityDetailsBodyHeader">Description</h4>
      <p>{description}</p>
    </Fragment>
  );
}

ActivityDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
