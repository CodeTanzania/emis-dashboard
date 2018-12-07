export const SHOW_NOTIFICATION_PANEL = 'SHOW_NOTIFICATION_PANEL';
export const CLOSE_NOTIFICATION_PANEL = 'CLOSE_NOTIFICATION_PANEL';

export const renderNotificationPanel = destinations => ({
  type: SHOW_NOTIFICATION_PANEL,
  payload: {
    data: destinations,
  },
});

export const dismissNotificationPanel = () => ({
  type: CLOSE_NOTIFICATION_PANEL,
});
