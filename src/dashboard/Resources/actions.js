import * as types from './types';

/**
 * -----------------------------------------------------------
 * Resource Stocks
 * -----------------------------------------------------------
 */
export const getResourceStocksStart = () => ({
  type: types.GET_RESOURCE_STOCKS_START,
});

export const getResourceStocksSuccess = resources => ({
  type: types.GET_RESOURCE_STOCKS_SUCCESS,
  payload: {
    data: resources,
  },
});

export const getResourceStocksFailed = error => ({
  type: types.GET_RESOURCE_STOCKS_ERROR,
  payload: {
    data: error,
  },
  error: true,
});

export const getResourceStocks = params => (dispatch, getState, { API }) => {
  dispatch(getResourceStocksStart());
  API.getResourceStocks(params)
    .then(result => dispatch(getResourceStocksSuccess(result)))
    .catch(error => dispatch(getResourceStocksFailed(error)));
};

/**
 * ------------------------------------------------------------
 * Stock Adjustment
 * ------------------------------------------------------------
 */

/**
 *
 * @param {Object} stock - Stock to bind to the form
 */
export const showStockAdjustmentForm = stock => ({
  type: types.SHOW_STOCK_ADJUSTMENT_FORM,
  payload: {
    data: stock,
  },
});

export const dismissStockAdjustmentForm = () => ({
  type: types.DISMISS_STOCK_ADJUSTMENT_FORM,
});

export const setResourceAdjustmentSchema = schema => ({
  type: types.SET_RESOURCE_ADJUSTMENT_SCHEMA,
  payload: {
    data: schema,
  },
});

/**
 * --------------------------------------------------------------
 * Resource Items
 * --------------------------------------------------------------
 */

export const getResourceItemsStart = () => ({
  type: types.GET_RESOURCE_ITEMS_START,
});

export const getResourceItemsSuccess = items => ({
  type: types.GET_RESOURCE_ITEMS_SUCCESS,
  payload: {
    data: items,
  },
});

export const getResourceItemsFailed = error => ({
  type: types.GET_RESOURCE_ITEMS_ERROR,
  payload: {
    data: error,
  },
  error: true,
});

export const getResourceItems = params => (dispatch, getState, { API }) => {
  dispatch(getResourceItemsStart());
  API.findResourceItems(params)
    .then(items => dispatch(getResourceItemsSuccess(items)))
    .catch(error => dispatch(getResourceItemsFailed(error)));
};

export const showResourceItemForm = (item = null) => ({
  type: types.SHOW_RESOURCE_ITEM_FORM,
  payload: {
    data: item,
  },
});

export const dismissResourceItemForm = () => ({
  type: types.DISMISS_RESOURCE_ITEM_FORM,
});

export const setResourceSchema = schema => ({
  type: types.SET_RESOURCE_SCHEMA,
  payload: {
    data: schema,
  },
});

/**
 * ---------------------------------------------------------
 * Resource Warehouses
 * ---------------------------------------------------------
 */
export const getWarehousesStart = () => ({
  type: types.GET_WAREHOUSES_START,
});

export const getWarehousesSuccess = items => ({
  type: types.GET_WAREHOUSES_SUCCESS,
  payload: {
    data: items,
  },
});

export const getWarehousesFailed = error => ({
  type: types.GET_WAREHOUSES_ERROR,
  payload: {
    data: error,
  },
  error: true,
});

export const getWarehouses = params => (dispatch, getState, { API }) => {
  dispatch(getWarehousesStart());
  API.findWarehouses(params)
    .then(items => dispatch(getWarehousesSuccess(items)))
    .catch(error => dispatch(getWarehousesFailed(error)));
};

export const showWarehouseForm = (item = null) => ({
  type: types.SHOW_WAREHOUSE_FORM,
  payload: {
    data: item,
  },
});

export const dismissWarehouseForm = () => ({
  type: types.DISMISS_WAREHOUSE_FORM,
});
