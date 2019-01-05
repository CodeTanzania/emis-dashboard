import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'antd';
import { convertIsoDate } from '../../../../common/lib/mapUtil';
import { getIncidentsSuccess, getIncidentActions } from '../../actions';
/**
 * Incident details Layout component
 * this component contain detailed
 * information of incident
 *
 * @class
 * @name IncidentDetails
 *
 * @version 0.1.0
 * @since 0.1.0
 */

function IncidentDetails({
  selected,
  incidentAction,
  getAllIncidents,
  getAllActions,
}) {
  const {
    event,
    number,
    type = {},
    startedAt,
    endedAt,
    causes,
    areas,
  } = selected;

  const { name: actionName } = incidentAction;

  const onCloseDetails = () => {
    getAllIncidents();
    getAllActions();
  };

  const { name } = type;
  return (
    <div className="IncidentDetails">
      <div className="IncidentName">
        <h3>{event}</h3>
      </div>
      <div className="IncidentDetail">
        <h4 className="IncidentDetailHeader">Incident number:</h4>
        <span className="incidentDetailContent">{number}</span>
        <br />
        <h4 className="IncidentDetailHeader"> Incident Type:</h4>
        <span className="incidentDetailContent">{name}</span> <br />
        <h4 className="IncidentDetailHeader">Reported date:</h4>
        <span className="incidentDetailContent">
          {convertIsoDate(startedAt)}
        </span>{' '}
        <br />
        {endedAt ? (
          <div>
            <h4 className="IncidentDetailHeader">End date:</h4>
            <span className="incidentDetailContent">
              {' '}
              {convertIsoDate(endedAt)}{' '}
            </span>
          </div>
        ) : null}
        <h4 className="IncidentDetailHeader">Source:</h4>
        <span className="incidentDetailContent">
          {causes.map(cause => cause)}
        </span>
        <br />
        <h4 className="IncidentDetailHeader">Location:</h4>
        <span className="incidentDetailContent">
          {' '}
          {areas.map(area => area)}{' '}
        </span>
        <br />
        {actionName ? (
          <div>
            <h4 className="IncidentDetailHeader">Action to be taken:</h4>
            <span className="incidentDetailContent">{actionName}</span>
            <br />
          </div>
        ) : null}
        <h4 className="IncidentDetailHeader">Impact:</h4>
        <div className="IncidentImpacIncidentDetailsDrawert p-l-10">
          <span>Death(s):</span>
          3 <br />
          <span>People affected:</span>
          4 <br />
          <span>Building destroyed:</span>
          5 <br />
          <span>Building Damaged: </span>
          12 <br />
        </div>
        <Row>
          <Col span={12}>
            <Button type="danger" className="ReadMore" onClick={onCloseDetails}>
              Cancel
            </Button>
          </Col>
          <Col span={12}>
            <Button type="primary" className="ReadMore">
              <Link to="/incidents/details">Read more</Link>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  selected: state.incidents.incident ? state.incidents.incident : {},
  incidentAction: state.selectedIncident.incidentAction
    ? state.selectedIncident.incidentAction
    : {},
});

const mapDispatchToProps = {
  getAllIncidents: getIncidentsSuccess,
  getAllActions: getIncidentActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentDetails);

IncidentDetails.propTypes = {
  selected: PropTypes.shape({
    event: PropTypes.string.isRequired,
    incidentType: PropTypes.shape({
      name: PropTypes.string.isRequired,
      nature: PropTypes.string.isRequired,
      family: PropTypes.string.isRequired,
      color: PropTypes.string,
      _id: PropTypes.string,
    }),
    description: PropTypes.string.isRequired,
    startedAt: PropTypes.string.isRequired,
    endedAt: PropTypes.string.isRequired,
    number: PropTypes.string,
  }).isRequired,
  incidentAction: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string.isRequired,
    phase: PropTypes.string.isRequired,
    incident: PropTypes.shape({
      event: PropTypes.string.isRequired,
      startedAt: PropTypes.string,
      endedAt: PropTypes.string,
      _id: PropTypes.string,
    }),
    incidentType: PropTypes.shape({
      name: PropTypes.string,
      nature: PropTypes.string.isRequired,
      family: PropTypes.string.isRequired,
      color: PropTypes.string,
      _id: PropTypes.string,
    }),
    _id: PropTypes.string,
  }).isRequired,
  getAllIncidents: PropTypes.func,
  getAllActions: PropTypes.func,
};

IncidentDetails.defaultProps = {
  getAllIncidents: () => {},
  getAllActions: () => {},
};
