import { connect } from 'react-redux';
import NotificationPanel from './NotificationPanel';
import { renderNotificationPanel, dismissNotificationPanel } from './actions';

const mapStateToProps = state => ({
  showNotificationPanel: state.showNotificationPanel,
  stakeholders: state.stakeholders.data,
  to: state.notificationDestinations,
});

const mapDispatchToProps = {
  renderNotificationPanel,
  dismissNotificationPanel,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationPanel);
