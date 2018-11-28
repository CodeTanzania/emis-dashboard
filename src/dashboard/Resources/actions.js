import * as types from './types';

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

export const showAdjustStockForm = stock => ({
  type: types.SHOW_ADJUST_STOCK_FORM,
  payload: {
    data: stock,
  },
});

export const cancelAdjustStock = () => ({
  type: types.CANCEL_ADJUST_STOCK,
});

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
