import * as types from './types';

/**
 * State Shape
 * {
 *  fetchingResourceStocks: boolean,
 *  resourceStocks: Object,
 *  stockToAdjust: Object
 * }
 */

/**
 *
 * @param {Boolean} state - fetchingResourceStocks status
 * @param {*} action
 */

export const fetchingResourceStocks = (state = false, action) => {
  switch (action.type) {
    case types.GET_RESOURCE_STOCKS_START:
      return true;
    case types.GET_RESOURCE_STOCKS_SUCCESS:
      return false;
    case types.GET_RESOURCE_STOCKS_ERROR:
      return false;
    default:
      return state;
  }
};

/**
 *
 * @param {Object} state - resourceStocks
 * @param {*} action
 */
export const resourceStocks = (state = { data: [] }, action) => {
  switch (action.type) {
    case types.GET_RESOURCE_STOCKS_SUCCESS:
      return action.payload.data;
    case types.GET_RESOURCE_STOCKS_ERROR:
      return [];
    default:
      return state;
  }
};

export const stockToAdjust = (state = null, action) => {
  switch (action.type) {
    case types.SHOW_ADJUST_STOCK_FORM:
      return action.payload.data;
    case types.CANCEL_ADJUST_STOCK:
      return null;
    default:
      return state;
  }
};
