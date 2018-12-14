/**
 * Helper functions
 */
import { message } from 'antd';

/**
 * Show error message box
 *
 * @function
 * @name notifyError
 *
 * @param {Object} error
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function notifyError(error) {
  // eslint-disable-next-line
  if (!navigator.onLine) {
    return message.error(
      'You are currently offline, Please ensure Network connection is available'
    );
  }

  return message.error(error.message);
}

/**
 * Show a success message box
 *
 * @function
 * @name notifySuccess
 *
 * @param {string} details
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function notifySuccess(details) {
  message.success(details);
}

/**
 * Show a info message box
 *
 * @function
 * @name notifyInfo
 *
 * @param {string} details
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function notifyInfo(info) {
  message.info(info);
}
