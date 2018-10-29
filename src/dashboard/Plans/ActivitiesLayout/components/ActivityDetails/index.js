import { Icon, Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ActivityDescription from './components/ActivityDescription';
import ActivityStakeholders from './components/ActivityStakeholders';
import ActivityTaskList from './components/ActivityTaskList';

/* local constants */
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

/**
 * ActivityBody
 *
 * @function
 * @name ActivityBody
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function ActivityDetailsBody({ description, loading }) {
  return (
    <Spin
      indicator={antIcon}
      size="large"
      tip="Loading Procedures ..."
      spinning={loading}
      style={{ top: '30%' }}
    >
      <ActivityStakeholders />
      <ActivityDescription description={description} />
      <ActivityTaskList />
    </Spin>
  );
}

/* props validation */
ActivityDetailsBody.propTypes = {
  description: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  description: state.selectedPlanActivity.description,
  loading: state.planActivityProcedures.loading,
});

export default connect(mapStateToProps)(ActivityDetailsBody);
