import { connect } from 'react-redux';
import { showStakeholderForm } from '../../actions';
import StakeholderProfile from './StakeholderProfile';

const mapStateToProps = state => ({
  stakeholder: state.stakeholders.selected,
});

export default connect(
  mapStateToProps,
  { showStakeholderForm }
)(StakeholderProfile);
