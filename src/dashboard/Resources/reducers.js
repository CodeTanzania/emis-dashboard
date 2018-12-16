import * as types from './types';

/**
 * State Shape
 * {
 *  fetchingResourceStocks: boolean,
 *  resourceStocks: Object,
 *  stockToAdjust: Object,
 *  resourceStockSchema: Object,
 *  fetchingResourceItems: bool // loading resource items
 *  resourceItems: Object, //
 *  showResourceItemForm: bool, // show or hide resource item form
 *  resourceItemToEdit: Object, // set to item when user click edit resource item
 *  resourceItemSchema: Object // resource item schema
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

/**
 *
 * @param {*} state
 * @param {*} action
 */
export const fetchingResourceItems = (state = false, action) => {
  switch (action.type) {
    case types.GET_RESOURCE_ITEMS_START:
      return true;
    case types.GET_RESOURCE_ITEMS_SUCCESS:
      return false;
    case types.GET_RESOURCE_ITEMS_ERROR:
      return false;
    default:
      return state;
  }
};

/**
 *
 * @param {*} state
 * @param {*} action
 */
export const resourceItems = (state = { data: [] }, action) => {
  switch (action.type) {
    case types.GET_RESOURCE_ITEMS_SUCCESS:
      return action.payload.data;
    case types.GET_RESOURCE_ITEMS_ERROR:
      return [];
    default:
      return state;
  }
};

export const showResourceItemForm = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_RESOURCE_ITEM_FORM:
      return true;
    case types.DISMISS_RESOURCE_ITEM_FORM:
      return false;
    default:
      return state;
  }
};

export const resourceItemToEdit = (state = null, action) => {
  switch (action.type) {
    case types.SHOW_RESOURCE_ITEM_FORM:
      return action.payload.data;
    case types.DISMISS_RESOURCE_ITEM_FORM:
      // dimiss item form and set item to null
      return null;
    default:
      return state;
  }
};

export const resourceItemSchema = (state = null, action) => {
  switch (action.type) {
    case types.SET_RESOURCE_SCHEMA:
      return action.payload.data;
    default:
      return state;
  }
};

export const resourceAdjustmentSchema = (state = null, action) => {
  switch (action.type) {
    case types.SET_RESOURCE_ADJUSTMENT_SCHEMA:
      return action.payload.data;
    default:
      return state;
  }
};
