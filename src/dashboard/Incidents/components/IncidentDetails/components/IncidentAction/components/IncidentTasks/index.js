import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * Incident tasks Layout component
 * this component contain all tasks
 * performed per specific incident
 *
 *
 * @function
 * @name IncidentTasks
 *
 * @version 0.1.0
 * @since 0.1.0
 */

function IncidentTasks({ incidentTask }) {
  const { name, description, phase } = incidentTask;
  return (
    <div>
      <h5 className="IncidentTask">task name</h5>
      <p className="IncidentTaskDetail">{name}</p>
      <h5 className="IncidentTask">task phase</h5>
      <p className="IncidentTaskDetail">{phase}</p>
      <h5 className="IncidentTask">task description</h5>
      <p className="IncidentTaskDetail">{description}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  incidentTask: state.selectedIncident.incidentTask
    ? state.selectedIncident.incidentTask
    : {},
});

IncidentTasks.propTypes = {
  incidentTask: PropTypes.shape({
    incidentType: PropTypes.shape({
      name: PropTypes.string,
      nature: PropTypes.string.isRequired,
      family: PropTypes.string.isRequired,
      color: PropTypes.string,
      _id: PropTypes.string,
    }),
    incident: PropTypes.shape({
      event: PropTypes.string,
      _id: PropTypes.string,
    }),
    action: PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string,
    }),
    name: PropTypes.string,
    description: PropTypes.string,
    phase: PropTypes.string,
    number: PropTypes.number,
    tags: PropTypes.array,
    _id: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(IncidentTasks);
