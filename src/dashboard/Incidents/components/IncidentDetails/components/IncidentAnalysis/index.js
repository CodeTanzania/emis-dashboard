import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { convertIsoDate } from '../../../../../../common/lib/mapUtil';

import './styles.css';

function IncidentAnalysis({ incidentSelected, loading }) {
  const {
    event,
    type,
    number,
    startedAt,
    endedAt,
    description,
    areas,
    causes,
  } = incidentSelected;

  const { name } = type;

  return incidentSelected ? (
    <div className="IncidentAnalysis">
      <h3 style={{ borderBottom: '1px solid #e8e8e8', padding: '9px' }}>
        Situation Analysis
      </h3>
      {loading ? (
        <div className="loading">
          <Spin />
        </div>
      ) : (
        <div className="IncidentAnalysisDetails">
          <h4 className="IncidentAnalysisHeader">Incident Name</h4>
          <span className="incidentAnalysisContent">{event}</span>
          <br />
          <h4 className="IncidentAnalysisHeader">Incident number:</h4>
          <span className="incidentDetailContent">{number}</span>
          <br />
          <h4 className="IncidentAnalysisHeader"> Incident Type:</h4>
          <span className="incidentAnalysisContent">{name}</span> <br />
          <h4 className="IncidentAnalysisHeader">Reported & Ended date:</h4>
          <span className="incidentAnalysisContent">
            {convertIsoDate(startedAt)}{' '}
          </span>
          To
          {endedAt ? (
            <span className="incidentAnalysisContent">
              {' '}
              {convertIsoDate(endedAt)}{' '}
            </span>
          ) : (
            'N/A'
          )}
          <br />
          <h4 className="IncidentDetailHeader">Source:</h4>
          <span className="incidentDetailContent">
            {causes.length > 0 ? causes.map(cause => cause) : 'N/A'}
          </span>
          <br />
          <h4 className="IncidentAnalysisHeader">Description:</h4>
          <span className="incidentDetailContent">{description}</span>
          <br />
          <h4 className="IncidentAnalysisHeader">Location:</h4>
          <div className="IncidentAnalysisLocation p-l-10">
            <span>Region:</span>
            <span className="incidentAnalysisContent">
              {' '}
              {areas.map(area => area)}{' '}
            </span>
            <br />
            <span>District:</span> Kinondoni District <br />
            <span>Ward:</span>Hananasif <br />
            <span> Street: </span>Mkunguni A <br />
          </div>
          <h4 className="IncidentAnalysisHeader">
            Reported Amount of rainful:
          </h4>
          <br />
        </div>
      )}
    </div>
  ) : (
    <Link to="/incidents/map" />
  );
}

const mapStateToProps = state => ({
  incidentSelected: state.incidents.incident ? state.incidents.incident : [],
  loading: state.incidents.isLoading,
});

export default connect(
  mapStateToProps,
  ''
)(IncidentAnalysis);

IncidentAnalysis.propTypes = {
  incidentSelected: PropTypes.shape({
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
  }),
  loading: PropTypes.bool.isRequired,
};

IncidentAnalysis.defaultProps = {
  incidentSelected: {},
};
