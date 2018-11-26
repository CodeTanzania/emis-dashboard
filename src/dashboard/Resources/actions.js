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
