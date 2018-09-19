/* Actions for the incident */;

/* const actions */
export const ADD_NEW_INCIDENT = 'ADD_NEW_INCIDENT';
export const FETCH_INCIDENTS = 'FETCH_INCIDENTS';
export const SELECTED_INCIDENT = 'SELECTED_INCIDENT';
export const FILTER_INCIDENTS_TYPE = 'FILTER_INCIDENT_TYPE';
export const FILTER_PLACES = 'FILTER_PLACES';

/* Actions creaters */

const addNewIncident = incident => {
    return {
        type: ADD_NEW_INCIDENT,
        incident
    }
}

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


export default (addNewIncident, fetchIncidents,
    selectIncident, filterIncidentType, filterPlaces
)