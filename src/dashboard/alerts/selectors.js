/**
 * Selectors  for Alerts
 */
import { get } from 'lodash';

 const alertsSelector = state => state && state.alerts && get(state, 'alerts.data');
 const alertLoadingSelctor = state => state && state.alerts && get(state, 'alerts.loading');

export {
    alertsSelector,
    alertLoadingSelctor
}