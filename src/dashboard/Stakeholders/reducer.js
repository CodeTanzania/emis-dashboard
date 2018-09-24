/* eslint no-underscore-dangle: "off" */
import {
  ADD_NEW_STAKEHOLDER_SUCCESS,
  FETCH_STAKEHOLDERS,
  FETCH_STAKEHOLDERS_FAILURE,
  FETCH_STAKEHOLDERS_SUCCESS,
  SELECT_STAKEHOLDER,
  UPDATE_STAKEHOLDER_SUCCESS,
  TOGGLE_STAKEHOLDER_FILTER,
} from './actions';
/**
 * Stakeholders Reducers
 */

const initialState = {
  data: [],
  total: 0,
  isLoading: false,
  error: null,
  selected: null,
  filters: [],
};

/**
 * Create stakeholder filters using data from the API
 *
 * Transform
 * "filters": [
        {
            "group": "phases",
            "data": [
                {
                    "name": "Mitigation",
                    "count": 0
                }
            ]
        }
      ]
   Into 
    "filters": [
        {
            "group": "phases",
            "data": [
                {
                    "name": "Mitigation",
                    "count": 0
                    "selected": false
                }
            ]
        }
      ]
 * @param {Object[]} filters 
 * @param {string} filters[].group - Filter group name, e.g phases, types etc
 * @param {Object[]} filters[].data - Filter data
 * @param {string} filters[].data[].name - Filter name
 * @param {number} filters[].data[].count - Number of stakeholders tagged with this filter name
 * @returns {Object[]} - Filters with filter item added selected property
 */
function createUIFiltersFromAPI(filters) {
  return filters.map(filter => {
    const data = filter.data.map(item => ({ ...item, selected: false }));
    return { ...filter, data };
  });
}

/**
 * It updates UIfilter count property using data from the API
 *
 * @param {Object[]} UIFilters filters as displayed in UI
 * @param {string} UIFilters[].group - Filter group
 * @param {Object[]} UIFilters[].data - Filters in a specific group
 * @param {Object[]} APIFilters filters as returned from the API
 * @param {string} APIFilters[].group
 * @param {Object[]} APIFilters[].data
 */
function updateUIFiltersFromAPI(UIFilters, APIFilters) {
  // Iterate all UI filters
  return UIFilters.map(UIFilter => {
    // Find API filter group corresponding to UI filter group
    const foundAPIFilterGroup = APIFilters.find(
      APIFilterGroup => APIFilterGroup.group === UIFilter.group
    );
    let data;
    if (foundAPIFilterGroup) {
      // API filter group corresponding to UI filter group found
      // Iterate all UIFilter items
      data = UIFilter.data.map(item => {
        // find API filter item corrsponding to UI filter Item
        const foundAPIFilterItem = foundAPIFilterGroup.data.find(
          APIFilterItem => APIFilterItem.name === item.name
        );
        if (foundAPIFilterItem) {
          // API filter item corresponding to UI filter found
          return { ...item, count: foundAPIFilterItem.count };
        }
        return item;
      });
    }

    // return updated filter if there is a API match
    // otherwise return UI filter as it is
    return data ? { ...UIFilter, data } : UIFilter;
  });
}

/**
 * Update filter item with selected status
 * @param {Object[]} filters
 * @param {string} filterGroup - Filter group name
 * @param {string} filterName - Filter name
 * @param {boolean} selected - Filter selected status
 */
function updateStakeholderFilterItem(
  filters,
  filterGroup,
  filterName,
  selected
) {
  return filters.map(filter => {
    if (filter.group !== filterGroup) {
      return filter;
    }
    const filterItems = filter.data.map(item => {
      if (item.name !== filterName) {
        // This isn't the item filter we care about - keep it as-is
        return item;
      }
      // Otherwise, this is the one we want - return an updated value
      return {
        ...item,
        selected,
      };
    });
    return {
      ...filter,
      data: filterItems,
    };
  });
}

/**
 * Stakeholder reducer function
 * @param {Object=} state - Redux store state
 * @param {Object} action - Redux action
 */
export default function stakeholders(state = initialState, action) {
  switch (action.type) {
    case FETCH_STAKEHOLDERS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_STAKEHOLDERS_SUCCESS: {
      const UIFilters = state.filters.length
        ? updateUIFiltersFromAPI(state.filters, action.payload.filters)
        : createUIFiltersFromAPI(action.payload.filters);
      return {
        data: [...action.payload.data],
        total: action.payload.total,
        isLoading: false,
        error: null,
        selected: action.payload.data[0],
        // we set filters dynamically to prevent showing filters that doesn't work / removed
        // we want to set filters only once and use it per session as the result
        // we prevent to set filter everytime stakeholders change
        filters: UIFilters,
      };
    }
    case FETCH_STAKEHOLDERS_FAILURE:
      return {
        data: [],
        isLoading: false,
        error: action.payload,
      };
    case SELECT_STAKEHOLDER:
      return {
        ...state,
        selected: action.stakeholder,
      };
    case ADD_NEW_STAKEHOLDER_SUCCESS:
      return {
        ...state,
        data: [action.stakeholder, ...state.data],
      };
    case UPDATE_STAKEHOLDER_SUCCESS: {
      const data = [...state.data]; // grab stakeholder array
      const { stakeholder } = action; // grab stakeholder
      const foundIndex = data.findIndex(item => item._id === stakeholder._id);
      data[foundIndex] = stakeholder;
      return {
        ...state,
        data,
        selected: stakeholder,
      };
    }
    case TOGGLE_STAKEHOLDER_FILTER: {
      const { filterGroup, filterName, selected } = action;
      const filters = updateStakeholderFilterItem(
        state.filters,
        filterGroup,
        filterName,
        selected
      );
      return {
        ...state,
        isLoading: true, // activate stakeholder list loading status
        filters,
      };
    }
    default:
      return state;
  }
}
