/* Actions for the incident */;

/* const actions */
const ADD_NEW_INCIDENTS_TYPE = 'ADD_NEW_INCIDENTS-TYPE';
const SELECTED_INCIDENT_TYPE = 'SELECTED_INCIDENTS_TYPE ';
const FILTER_INCIDENTS_TYPE = 'FILTER_INCIDENT_TYPE';
const TRIGGER_GET_INCIDENTS_TYPE = 'INCIDENTS_TYPE :TRIGER_GET';
const STORE_INCIDENTS_TYPE = 'INCIDENTS_TYPE:STORE';

/* Actions creater */

const addNewIncident = incident => {
    return {
        type: ADD_NEW_INCIDENTS_TYPE,
        incident
    }
}

const triggerGetIncidentstype = () => ({ type: TRIGGER_GET_INCIDENTS_TYPE });
const storeIncidents = (incidentsType = []) => ({ type: STORE_INCIDENTS_TYPE, incidentsType });


const selectedIncidentType = incidentSelected => {
    return {
        type: SELECTED_INCIDENT_TYPE,
        incidentSelected
    }
}

const filterIncidentType = filterIcident => {
    return {
        type: FILTER_INCIDENTS_TYPE,
        filterIcident
    }
}



export {
    addNewIncident,
    SELECTED_INCIDENT_TYPE,
    selectedIncidentType, filterIncidentType,
    TRIGGER_GET_INCIDENTS_TYPE, triggerGetIncidentstype,
    STORE_INCIDENTS_TYPE, storeIncidents
}