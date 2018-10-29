import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

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
    <div style={{ marginTop: 20 }}>
      <h4 style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 10 }}>
        Description{' '}
        <Button
          title="Edit Description"
          type="default"
          icon="edit"
          style={{ border: 0 }}
        />
      </h4>
      <p>{description}</p>
    </div>
  );
}

ActivityDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
