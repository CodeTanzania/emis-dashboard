/**
 * Action creators for contacts
 */
export const FETCH_STAKEHOLDERS = 'FETCH_STAKEHOLDERS';
export const FETCH_STAKEHOLDERS_SUCCESS = 'FETCH_STAKEHOLDERS_SUCCESS';
export const FETCH_STAKEHOLDERS_FAILURE = 'FETCH_STAKEHOLDERS_FAILURE';
export const SEARCH_STAKEHOLDERS = 'SEARCH_STAKEHOLDERS';
export const SELECT_STAKEHOLDER = 'SELECT_STAKEHOLDER';
export const ADD_NEW_STAKEHOLDER_SUCCESS = 'ADD_NEW_STAKEHOLDER_SUCCESS';
export const UPDATE_STAKEHOLDER_SUCCESS = 'UPDATE_STAKEHOLDER_SUCCESS';


export const fetchStakeholders = () => ({ type: FETCH_STAKEHOLDERS });

export const fetchStakeholdersSuccess = (stakeholders) => ({
  type: FETCH_STAKEHOLDERS_SUCCESS,
  payload: stakeholders
});

export const fetchStakeholdersFailure = (message) => ({
  type: FETCH_STAKEHOLDERS_FAILURE,
  payload: message
});

// action fired when stakeholder is selected 
export const selectStakeholder = stakeholder => ({ type: SELECT_STAKEHOLDER, stakeholder });

// action fired when search for stakeholder using search box
export const searchStakeholders = searchText => ({ type: SEARCH_STAKEHOLDERS, searchText });

// action fired on add new stakeholder success
export const addNewStakeholderSuccess =
  stakeholder => ({ type: ADD_NEW_STAKEHOLDER_SUCCESS, stakeholder });

// action fired on update stakeholder successfully
export const updateStakeholderSuccess =
  stakeholder => ({ type: UPDATE_STAKEHOLDER_SUCCESS, stakeholder });
