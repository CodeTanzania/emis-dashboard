import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

/**
 * ActivityHeader
 *
 * @function
 * @name ActivityHeader
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function ActivityHeader({ name, incidentType, phase }) {
  return (
    <div className="ActivityDetailsHeader">
      <h4>{name}</h4>
      <p className="subtitle">
        Dar es Salaam &gt; {incidentType} &gt; {phase}
      </p>
    </div>
  );
}

/* props validation */
ActivityHeader.propTypes = {
  name: PropTypes.string.isRequired,
  incidentType: PropTypes.string.isRequired,
  phase: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state.selectedPlanActivity.name,
  incidentType: state.selectedPlanActivity.incidentType.name,
  phase: state.selectedPlanActivity.phase,
});

export default connect(mapStateToProps)(ActivityHeader);
