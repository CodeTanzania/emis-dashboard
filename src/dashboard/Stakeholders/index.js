import { connect } from 'react-redux';
import { initStakeholders, showStakeholderForm } from './actions';
import { renderNotificationPanel } from '../../common/components/NotificationPanel/actions';

import Stakeholders from './Stakeholders';

const mapStateToProps = state => ({
  loading: state.stakeholders.init,
});

export default connect(
  mapStateToProps,
  {
    initStakeholders,
    showStakeholderForm,
    renderNotificationPanel,
  }
)(Stakeholders);
