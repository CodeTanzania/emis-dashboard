/* Actions for the incident */;

/* const actions */
const ADD_NEW_INCIDENT_TYPE = 'INCIDENTS_TYPE:ADD_NEW_INCIDENT_TYPE';
const SELECTED_INCIDENT_TYPE = 'INCIDENTS_TYPE :SELECTED_INCIDENTS_TYPE ';
const FILTER_INCIDENTS_TYPE = 'INCIDENTS_TYPE :FILTER_INCIDENT_TYPE';
const TRIGGER_GET_INCIDENTS_TYPE = 'INCIDENTS_TYPE :TRIGER_GET';
const STORE_INCIDENTS_TYPE = 'INCIDENTS_TYPE:STORE';
const UPDATE_INCIDENT_TYPE ="INCIDENTS_TYPE :UPDATE_INCIDENT_TYPE";
const COLOR_AUTOFILL = "INCIDENTS_TYPE :COLOR_AUTOFILL";

/* Actions creater */

const triggerGetIncidentstype = () => ({ type: TRIGGER_GET_INCIDENTS_TYPE });
const storeIncidents = (incidentsType = []) => ({ type: STORE_INCIDENTS_TYPE, incidentsType });

const selectedIncidentType = incidentSelected => {
    return {
        type: SELECTED_INCIDENT_TYPE,
        incidentSelected
    }
}
const addNewIncidentType = incidentType => ({
        type: ADD_NEW_INCIDENT_TYPE,
        incidentType
})
const updateIncidentType = incidentType => ({
    type: UPDATE_INCIDENT_TYPE,
    incidentType
})
const filterIncidentType = filterIcident => {
    return {
        type: FILTER_INCIDENTS_TYPE,
        filterIcident
    }
}
const colorAutofill = colorSelected =>{
    return {
        type:COLOR_AUTOFILL,
        colorSelected
    }
}
export {
   ADD_NEW_INCIDENT_TYPE, addNewIncidentType,
    SELECTED_INCIDENT_TYPE,selectedIncidentType, 
    FILTER_INCIDENTS_TYPE, filterIncidentType,
    TRIGGER_GET_INCIDENTS_TYPE, triggerGetIncidentstype,
    STORE_INCIDENTS_TYPE, storeIncidents,
    UPDATE_INCIDENT_TYPE, updateIncidentType,
    COLOR_AUTOFILL, colorAutofill
}