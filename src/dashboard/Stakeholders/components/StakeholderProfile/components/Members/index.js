import { connect } from 'react-redux';
import Members from './Members';
import { updateStakeholder, showStakeholderForm } from '../../../../actions';

const mapStateToProps = state => ({
  stakeholders: state.stakeholders.data,
  stakeholder: state.stakeholders.selected,
});

export default connect(
  mapStateToProps,
  {
    updateStakeholder,
    showStakeholderForm,
  }
)(Members);
