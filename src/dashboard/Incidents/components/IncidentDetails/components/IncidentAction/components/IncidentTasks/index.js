import React from 'react';
import { connect } from 'react-redux'
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
    const { name , description, phase} = incidentTask;
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


export default connect(mapStateToProps)(IncidentTasks)