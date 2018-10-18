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
export const TOGGLE_STAKEHOLDER_FILTER = 'TOGGLE_STAKEHOLDER_FILTER';

/**
 * It fetch stakeholder
 */
export const fetchStakeholders = () => ({ type: FETCH_STAKEHOLDERS });

/**
 * Action called on stakeholder fetch successfully
 * @param {Object[]} stakeholders - Stakeholder list received
 */
export const fetchStakeholdersSuccess = stakeholders => ({
  type: FETCH_STAKEHOLDERS_SUCCESS,
  payload: stakeholders,
});

/**
 * Action called on stakeholder fetch fails
 * @param {string} message - Stakeholder fetch failed error message
 */
export const fetchStakeholdersFailure = message => ({
  type: FETCH_STAKEHOLDERS_FAILURE,
  payload: message,
});

/**
 *  Action fired when stakeholder is selected
 * @param {Object} stakeholder - Stakeholder object
 * @param {string} stakeholder._id - Stakeholder Id
 */
export const selectStakeholder = stakeholder => ({
  type: SELECT_STAKEHOLDER,
  stakeholder,
});

/**
 * action fired when search for stakeholder using search box
 * @param {string} searchText - Query search text
 */
export const searchStakeholders = searchText => ({
  type: SEARCH_STAKEHOLDERS,
  searchText,
});

/**
 * action fired on add new stakeholder success
 * @param {Object} - Stakeholder data
 */
export const addNewStakeholderSuccess = stakeholder => ({
  type: ADD_NEW_STAKEHOLDER_SUCCESS,
  stakeholder,
});

/**
 * action fired on update stakeholder successfully
 * @param {Object} - Stakeholder object
 */
export const updateStakeholderSuccess = stakeholder => ({
  type: UPDATE_STAKEHOLDER_SUCCESS,
  stakeholder,
});

/**
 * Action called on toggling stakeholder UI checkbox filters
 * @param {string} filterGroup - Filter group name
 * @param {string} filterName - Filter name
 * @param {boolean} selected - Filter selected status
 */
export const toggleStakeholderFilter = (filterGroup, filterName, selected) => ({
  type: TOGGLE_STAKEHOLDER_FILTER,
  filterGroup,
  filterName,
  selected,
});
