import { Avatar, Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * StakeholderDetails
 *
 * @function
 * @name StakeholderDetails
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.phone
 * @param {string} props.email
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ActivityStakeholderRole({ name, phone, email }) {
  return (
    <div>
      <p>
        <Avatar title={name} style={{ backgroundColor: '#7DAA92' }}>
          {
            String(name)
              .trim()
              .split('')[0]
          }
        </Avatar>{' '}
        {name}
      </p>
      <Button icon="mobile" style={{ border: 0, display: 'block' }}>
        {phone}
      </Button>
      <Button icon="mail" style={{ border: 0, display: 'block' }}>
        {email}
      </Button>
    </div>
  );
}

/* Props validations */
ActivityStakeholderRole.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
