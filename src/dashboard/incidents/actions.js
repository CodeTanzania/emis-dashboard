/* Actions for the incident */;

/* const actions */
 const ADD_NEW_INCIDENT = 'ADD_NEW_INCIDENT';
 const FETCH_INCIDENTS = 'FETCH_INCIDENTS';
 const SELECTED_INCIDENT = 'SELECTED_INCIDENT';
 const FILTER_INCIDENTS_TYPE = 'FILTER_INCIDENT_TYPE';
 const FILTER_PLACES = 'FILTER_PLACES';
 const TRIGGER_GET_INCIDENTS = 'INCIDENS:TRIGER_GET';
 const STORE_INCIDENTS = 'INCIDENTS:STORE';

/* Actions creaters */

const addNewIncident = incident => {
    return {
        type: ADD_NEW_INCIDENT,
        incident
    }
}

const triggerGetIncidents = () => ({type: TRIGGER_GET_INCIDENTS});
const storeIncidents = (incidents = []) => ({type: STORE_INCIDENTS, incidents});

const fetchIncidents = () => {
    return {
        type: FETCH_INCIDENTS
    }
}

const selectIncident = incidentSelected => {
    return {
        type: SELECTED_INCIDENT,
        incidentSelected
    }
}

const filterIncidentType = filterIcident => {
    return {
        type: FILTER_INCIDENTS_TYPE,
        filterIcident
    }
}
const filterPlaces = places => {
    return {
        type: FILTER_PLACES,
        places
    }
}


export  {addNewIncident, fetchIncidents,
    selectIncident, filterIncidentType, filterPlaces,
    TRIGGER_GET_INCIDENTS, triggerGetIncidents,
    STORE_INCIDENTS, storeIncidents
}