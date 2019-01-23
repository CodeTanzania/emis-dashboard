import React from 'react';
import PropTypes from 'prop-types';
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

IncidentDrawControl.propTypes = {
  onDrawCreated: PropTypes.func,
};

IncidentDrawControl.defaultProps = {
  onDrawCreated: null,
};
