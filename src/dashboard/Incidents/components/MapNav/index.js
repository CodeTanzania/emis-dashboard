import React from 'react';
import { Button } from 'antd';
import './styles.css';

/**
 * Map Navigation  Layout component
 * this navigations layout will show
 * different Map actions
 *
 * @function
 * @name MapNav
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function MapNav({newIncidentButton}) {

  return (
    <div className="MapNav">
      <Button type="primary" onClick={newIncidentButton}>
        + New Incident
      </Button>
    </div>
  );
}
