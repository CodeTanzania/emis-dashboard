import { SHOW_NOTIFICATION_PANEL, CLOSE_NOTIFICATION_PANEL } from './actions';

/**
 * Reducer to control the display of the
 * message panel
 * @param {Object} state - redux state
 * @param {Object} action - redux action
 */
export const showNotificationPanel = (state = false, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION_PANEL:
      return true;
    case CLOSE_NOTIFICATION_PANEL:
      return false;
    default:
      return state;
  }
};

export const notificationDestinations = (state = [], action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION_PANEL: {
      const { data } = action.payload;
      if (data) {
        // data exist
        if (!Array.isArray(data)) {
          // data is not array, it's single object, convert it to array
          return [data];
        }
        // data is an array, return as it is
        return data;
      }
      return [];
    }
    default:
      return state;
  }
};
