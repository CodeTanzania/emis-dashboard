
const TRIGGER_FETCH_ALERTS = 'ALERTS:TRIGGER_FETCH';
const STORE_ALERTS = 'ALERTS:STORE';

const triggerFetchAlerts = () => ({type: TRIGGER_FETCH_ALERTS});
const storeAlerts = (alerts = []) => ({type: STORE_ALERTS, alerts});

export   {
    TRIGGER_FETCH_ALERTS, triggerFetchAlerts,
    STORE_ALERTS, storeAlerts,
}