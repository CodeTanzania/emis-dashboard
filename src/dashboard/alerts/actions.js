
const TRIGGER_FETCH_ALERTS = 'ALERTS:TRIGGER_FETCH';
const STORE_ALERTS = 'ALERTS:STORE';

const triggerFetchAlerts = () => ({type: TRIGGER_FETCH_ALERTS});
const storeAlerts = (alerts = [], loading = true) => ({type: STORE_ALERTS, alerts, loading});

export   {
    TRIGGER_FETCH_ALERTS, triggerFetchAlerts,
    STORE_ALERTS, storeAlerts,
}