import React from 'react';
import DrawControls from '../../../../../../common/components/DrawControls';
import './styles.css';

function IncidentDrawControl({ onDrawCreated }) {
  return (
    <div className="IncidentDrawControl">
      <DrawControls onDrawCreated={onDrawCreated} />
    </div>
  );
}

export default IncidentDrawControl;
