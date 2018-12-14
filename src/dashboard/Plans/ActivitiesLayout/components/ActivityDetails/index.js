import { Icon, Spin } from 'antd';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ActivityActors from './components/ActivityActors';
import ActivityDescription from './components/ActivityDescription';
import ActivityProcedureList from './components/ActivityProcedureList';
import './styles.css';

/* local constants */
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

/**
 * ActivityDetailsBody
 *
 * @function
 * @name ActivityDetailsBody
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function ActivityDetailsBody({
  description,
  loading,
  primaryRoles,
  supportiveRoles,
  resources,
  assessments,
}) {
  return (
    <Fragment>
      <ActivityDescription description={description} />
      <ActivityActors primary={primaryRoles} supportive={supportiveRoles} />
      <h4 className="ActivityDetailsBodyHeader">Resource(s)</h4>
      {resources.map(resource => (
        <p className="ActivityDetailsContent">{`${resource.name}`}</p>
      ))}
      <h4 className="ActivityDetailsBodyHeader">Assessment(s)</h4>
      {assessments.map(assessment => (
        <p title={assessment.description} className="ActivityDetailsContent">
          {`${assessment.title}`}
          <span style={{ fontSize: '11px', color: '#909090' }}>
            {`(${assessment.assess || 'N/A'})`}
          </span>
        </p>
      ))}
      <Spin
        indicator={antIcon}
        size="large"
        tip="Loading Procedures ..."
        spinning={loading}
        style={{ top: '30%' }}
      >
        <ActivityProcedureList />
      </Spin>
    </Fragment>
  );
}

/* props validation */
ActivityDetailsBody.propTypes = {
  description: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  primaryRoles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      abbreviation: PropTypes.string,
    })
  ),
  supportiveRoles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      abbreviation: PropTypes.string,
    })
  ),
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  assessments: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

ActivityDetailsBody.defaultProps = {
  primaryRoles: [],
  supportiveRoles: [],
  resources: [],
  assessments: [],
};

const mapStateToProps = state => ({
  description: state.selectedPlanActivity.description,
  primaryRoles: state.selectedPlanActivity.primary,
  supportiveRoles: state.selectedPlanActivity.supportive,
  resources: state.selectedPlanActivity.resources,
  assessments: state.selectedPlanActivity.assessments,
  loading: state.planActivityProcedures.loading,
});

export default connect(mapStateToProps)(ActivityDetailsBody);
