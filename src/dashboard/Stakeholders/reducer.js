/* eslint no-underscore-dangle: "off" */
import {
  INIT_STAKEHOLDERS_START,
  INIT_STAKEHOLDERS_SUCCESS,
  INIT_STAKEHOLDERS_ERROR,
  CREATE_STAKEHOLDER,
  GET_STAKEHOLDERS_START,
  GET_STAKEHOLDERS_ERROR,
  GET_STAKEHOLDERS_SUCCESS,
  SELECT_STAKEHOLDER,
  UPDATE_STAKEHOLDER,
  TOGGLE_STAKEHOLDER_FILTER,
  RESET_STAKEHOLDER_FILTERS,
  SHOW_STAKEHOLDER_FORM,
} from './actions';

import { buildUIFilters, updateFilterItem, resetFilters } from './helpers';

/**
 * State shape
{
  stakeholders: Object
    stakeholders.data: Object[], // contain the stakeholders returned by the API
    stakeholders.total: number, // total number of stakeholders returned
    stakeholders.isLoading: boolean, // check if stakeholders fetching in progress
    stakeholders.init: boolean, // check if stakeholders UI booted
    stakeholders.error: Object, // set if stakeholder init or fetch failed
    stakeholders.selected: Object, // keep track of the selected stakeholder in UI stakeholders list
    stakeholders.filters: Object[], // keep track of stakeholder UI filters and their status
    stakeholders.schema: Object, // stakeholder schema definition,
    stakeholders.predRoles: Object[] // predefined roles
    stakeholders.form: Object // monitor the stakeholder form 
}
 */

// initial stakeholders state
const initialState = {
  data: [],
  total: 0,
  isLoading: false,
  init: false,
  error: null,
  selected: null,
  filters: [],
  schema: null,
  predRoles: null,
  form: null,
};

/**
 * Stakeholder reducer function
 * @param {Object=} state - Redux store state
 * @param {Object} action - Redux action
 */
export default function stakeholders(state = initialState, action) {
  switch (action.type) {
    case INIT_STAKEHOLDERS_START:
      return { ...state, init: true };
    case INIT_STAKEHOLDERS_SUCCESS: {
      const {
        filters,
        schema,
        data,
        total,
        page,
        predRoles,
      } = action.payload.data;
      const uiFilters = buildUIFilters(filters);
      return {
        ...state,
        init: false,
        selected: data[0],
        // we set filters dynamically to prevent showing filters that doesn't work / removed
        // we want to set filters only once and use it per session as the result
        // we prevent to set filter everytime stakeholders change
        filters: uiFilters,
        data,
        total,
        page,
        schema,
        predRoles,
      };
    }
    case INIT_STAKEHOLDERS_ERROR:
      return {
        ...state,
        init: false,
        error: action.payload.data,
      };
    case GET_STAKEHOLDERS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_STAKEHOLDERS_SUCCESS: {
      const { data, total, page } = action.payload.data;
      return {
        ...state,
        selected: data[0],
        isLoading: false,
        error: null,
        data,
        total,
        page,
      };
    }
    case GET_STAKEHOLDERS_ERROR: {
      const { data } = action.payload;
      return {
        data: [],
        isLoading: false,
        error: data,
      };
    }
    case TOGGLE_STAKEHOLDER_FILTER: {
      const { group, name, selected } = action.payload.data;
      const uiFilters = state.filters;
      const updatedFilters = updateFilterItem(uiFilters, group, name, selected);
      return { ...state, filters: updatedFilters };
    }
    case SELECT_STAKEHOLDER:
      return {
        ...state,
        selected: action.payload.data,
      };
    case CREATE_STAKEHOLDER:
      return {
        ...state,
        data: [action.payload.data, ...state.data],
      };
    case UPDATE_STAKEHOLDER: {
      const data = [...state.data]; // grab stakeholder array
      const stakeholder = action.payload.data; // grab stakeholder
      const foundIndex = data.findIndex(item => item._id === stakeholder._id);
      data[foundIndex] = stakeholder;
      return {
        ...state,
        data,
        selected: stakeholder,
      };
    }
    case RESET_STAKEHOLDER_FILTERS: {
      const filters = resetFilters(state.filters);
      return { ...state, filters };
    }
    case SHOW_STAKEHOLDER_FORM: {
      const { drawerOptions, stakeholder } = action.payload.data;
      return {
        ...state,
        form: {
          show: true,
          drawerOptions,
          stakeholder,
        },
      };
    }
    default:
      return state;
  }
}
