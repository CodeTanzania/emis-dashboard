import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import EmptyStateMessage from '../../../EmptyStateMessage';
import './styles.css';

function ActivityProcedureDetails({
  name,
  description,
  primaryActors,
  supportiveActors,
  resources,
  assessments,
}) {
  return (
    <Fragment>
      <h5 className="ActivityProcedureDetailsHeader">PROCEDURE NAME</h5>
      <p className="ActivityProcedureDetailsContent">{name}</p>
      <h5 className="ActivityProcedureDetailsHeader">PROCEDURE DESCRIPTION</h5>
      <p className="ActivityProcedureDetailsContent">{description}</p>
      <h5 className="ActivityProcedureDetailsHeader">PRIMARY ACTORS</h5>
      <EmptyStateMessage
        show={isEmpty(primaryActors)}
        message="No Primary Actor(s) for this Procedure"
      />
      {primaryActors.map(actor => (
        <p className="ActivityProcedureDetailsContent">{`${
          actor.name
        } (${actor.abbreviation || 'N/A'})`}</p>
      ))}
      <h5 className="ActivityProcedureDetailsHeader">SUPPORTIVE ACTORS</h5>
      <EmptyStateMessage
        show={isEmpty(supportiveActors)}
        message="No Supportive Actor(s) for this Procedure"
      />
      {supportiveActors.map(actor => (
        <p className="ActivityProcedureDetailsContent">{`${
          actor.name
        } (${actor.abbreviation || 'N/A'})`}</p>
      ))}
      <h5 className="ActivityProcedureDetailsHeader">RESOURCES</h5>
      <EmptyStateMessage
        show={isEmpty(resources)}
        message="No Resource(s) for this Procedure"
      />
      {resources.map(resource => (
        <p className="ActivityProcedureDetailsContent">{`${resource.name}`}</p>
      ))}
      <h5 className="ActivityProcedureDetailsHeader">
        ASSESSMENT(s) TO BE PERFORMED
      </h5>
      <EmptyStateMessage
        show={isEmpty(assessments)}
        message="No Assessment(s) for this Procedure"
      />
      {assessments.map(assessment => (
        <p
          title={assessment.description}
          className="ActivityProcedureDetailsContent"
        >
          {`${assessment.title}`}
          <span style={{ fontSize: '11px', color: '#909090' }}>
            {`(${assessment.assess || 'N/A'})`}
          </span>
        </p>
      ))}
    </Fragment>
  );
}

ActivityProcedureDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryActors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      abbreviation: PropTypes.string,
    })
  ),
  supportiveActors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
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

ActivityProcedureDetails.defaultProps = {
  primaryActors: [],
  supportiveActors: [],
  resources: [],
  assessments: [],
};

const mapStateToProps = state => ({
  name: state.selectedPlanActivityProcedure.name,
  description: state.selectedPlanActivityProcedure.description,
  primaryActors: state.selectedPlanActivityProcedure.primary,
  supportiveActors: state.selectedPlanActivityProcedure.supportive,
  resources: state.selectedPlanActivityProcedure.resources,
  assessments: state.selectedPlanActivityProcedure.assessments,
});

export default connect(mapStateToProps)(ActivityProcedureDetails);
