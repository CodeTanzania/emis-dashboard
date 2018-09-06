/**
 * Selectors  for Alerts
 */
import { get } from 'lodash';

 const alertsSelector = state => state && state.alerts && get(state, 'alerts.data');

export {
    alertsSelector
}