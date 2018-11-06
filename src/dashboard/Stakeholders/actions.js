// dependencies
import { extractSelectedFilters } from './helpers';
/**
 * ----------------------------------------
 * Stakeholders action types
 * -----------------------------------
 */

/**
 * initialize stakeholders for the first time
 */
export const INIT_STAKEHOLDERS_START = 'INIT_STAKEHOLDERS_START';
export const INIT_STAKEHOLDERS_SUCCESS = 'INIT_STAKEHOLDERS_SUCCESS';
export const INIT_STAKEHOLDERS_ERROR = 'INIT_STAKEHOLDERS_ERROR';

// Retrieve stakeholders at any time
export const GET_STAKEHOLDERS_START = 'GET_STAKEHOLDERS_START';
export const GET_STAKEHOLDERS_SUCCESS = 'GET_STAKEHOLDERS_SUCCESS';
export const GET_STAKEHOLDERS_ERROR = 'GET_STAKEHOLDERS_ERROR';

// Search stakeholder by using search query string
export const SEARCH_STAKEHOLDERS = 'SEARCH_STAKEHOLDERS';

// Select stakeholder
export const SELECT_STAKEHOLDER = 'SELECT_STAKEHOLDER';

// Create stakeholder
export const CREATE_STAKEHOLDER = 'CREATE_STAKEHOLDER';

// Update stakeholder list
export const UPDATE_STAKEHOLDER = 'UPDATE_STAKEHOLDER';

// Toggle stakeholder filter
export const TOGGLE_STAKEHOLDER_FILTER = 'TOGGLE_STAKEHOLDER_FILTER';

// Reset stakeholder filters
export const RESET_STAKEHOLDER_FILTERS = 'RESET_STAKEHOLDER_FILTERS';

export const SHOW_STAKEHOLDER_FORM = 'SHOW_STAKEHOLDER_FORM';

/**
 * Initialize stakeholders
 */
export const initStakeholders = () => (dispatch, getState, { API }) => {
  dispatch({ type: INIT_STAKEHOLDERS_START });
  Promise.all([
    API.findStakeholders(),
    API.loadStakeholdersSchema(),
    API.getStakeholderPredRoles(),
  ])
    .then(result => {
      const [stakeholders, schema, predRoles] = result;
      const { phases, type } = schema.properties;
      const filters = [
        { group: 'phases', data: phases.enum },
        { group: 'type', data: type.enum },
      ];
      dispatch({
        type: INIT_STAKEHOLDERS_SUCCESS,
        payload: { data: { ...stakeholders, filters, schema, predRoles } },
      });
    })
    .catch(error => {
      dispatch({ type: INIT_STAKEHOLDERS_ERROR, payload: { data: error } });
    });
};

/**
 * Fetch Stakeholders at anytime
 */
export const loadStakeholders = () => (dispatch, getState, { API }) => {
  const { filters, page } = getState().stakeholders;
  dispatch({ type: GET_STAKEHOLDERS_START });
  const selected = extractSelectedFilters(filters); // get selected filters only
  API.findStakeholders({ filters: selected, page })
    .then(result =>
      dispatch({ type: GET_STAKEHOLDERS_SUCCESS, payload: { data: result } })
    )
    .catch(error =>
      dispatch({ type: GET_STAKEHOLDERS_ERROR, payload: { data: error } })
    );
};

/**
 * This is called on toggling stakeholder UI filter
 * @param {string} group - Filter group name
 * @param {string} name - Filter name
 * @param {boolean} selected - Filter selected status
 */
export const toggleFilter = (group, name, selected) => dispatch => {
  dispatch({
    type: TOGGLE_STAKEHOLDER_FILTER,
    payload: {
      data: {
        group,
        name,
        selected,
      },
    },
  });

  dispatch(loadStakeholders());
};

/**
 *  Action fired when stakeholder is selected
 * @param {Object} stakeholder - Stakeholder object
 * @param {string} stakeholder._id - Stakeholder Id
 */
export const selectStakeholder = stakeholder => ({
  type: SELECT_STAKEHOLDER,
  payload: {
    data: stakeholder,
  },
});

/**
 * action fired when search for stakeholder using search box
 * @param {string} searchText - Query search text
 */
export const searchStakeholders = searchText => (
  dispatch,
  getState,
  { API }
) => {
  // reset stakeholder filters
  dispatch({ type: RESET_STAKEHOLDER_FILTERS });
  // init search
  dispatch({ type: GET_STAKEHOLDERS_START });
  API.searchStakeholder(searchText)
    .then(result =>
      dispatch({ type: GET_STAKEHOLDERS_SUCCESS, payload: { data: result } })
    )
    .catch(error =>
      dispatch({ type: GET_STAKEHOLDERS_ERROR, payload: { data: error } })
    );
};

/**
 * action fired on add new stakeholder success
 * @param {Object} - Stakeholder data
 */
export const addNewStakeholderSuccess = stakeholder => ({
  type: CREATE_STAKEHOLDER,
  payload: {
    data: stakeholder,
  },
});

/**
 * action fired on update stakeholder successfully
 * @param {Object} - Stakeholder object
 */
export const updateStakeholderSuccess = stakeholder => ({
  type: UPDATE_STAKEHOLDER,
  payload: {
    data: stakeholder,
  },
});

/**
 * Called to display stakeholder form
 * @param {Object} drawerOptions - antd drawer options to customize form
 */
export const showStakeholderForm = (drawerOptions, stakeholder) => ({
  type: SHOW_STAKEHOLDER_FORM,
  payload: {
    data: { drawerOptions, stakeholder },
  },
});
