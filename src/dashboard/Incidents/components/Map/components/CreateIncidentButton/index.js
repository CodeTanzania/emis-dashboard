import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './styles.css';

/**
 * CreateIncidentButton component
 * Button for creating new incident
 *
 *
 * @function
 * @name CreateIncidentButton
 *
 * @version 0.1.0
 * @since 0.1.0
 */

export default function CreateIncidentButton() {
  return (
    <Link to="/incidents/new">
      <Button type="primary" className="CreateIncidentButton ">
        <Icon type="plus" /> New Incident{' '}
      </Button>
    </Link>
  );
}
