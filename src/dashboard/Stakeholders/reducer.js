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
} from './actions';

import { buildUIFilters, updateFilterItem, resetFilters } from './helpers';

// initial stakeholders state
const initialState = {
  data: [], // contain the stakeholders returned by the API
  total: 0, // total number of stakeholders returned
  isLoading: false, // check if stakeholders fetching in progress
  init: false, // check if stakeholders UI booted
  error: null, // set if stakeholder init or fetch failed
  selected: null, // keep track of the selected stakeholder in UI stakeholders list
  filters: [], // keep track of stakeholder UI filters and their status
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
      const { filters, data, total, page } = action.payload.data;
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

    default:
      return state;
  }
}
