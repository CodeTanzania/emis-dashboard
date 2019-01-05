import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { convertIsoDate } from '../../../../../../common/lib/mapUtil';

import './styles.css';

function IncidentDetailsContent({ incidentSelected, loading }) {
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

  return (
    <div className="IncidentDetailContents">
      <h3 style={{ borderBottom: '1px solid #e8e8e8', padding: '9px' }}>
        Situation Analysis
      </h3>
      {loading ? (
        <div className="loading">
          <Spin />
        </div>
      ) : (
        <div className="IncidentDetailContent p-20">
          <span>
            <strong>Incident number:</strong>
          </span>{' '}
          {number} <br />
          <span>
            <strong>Incident Name:</strong>
          </span>{' '}
          {event} <br />
          <span>
            <strong>Incident type:</strong>
          </span>{' '}
          {name} <br />
          <span>
            <strong>Reported date:</strong>
          </span>
          {convertIsoDate(startedAt)} <br />
          {endedAt ? (
            <div>
              <span>
                <strong>End date:</strong>
              </span>{' '}
              {convertIsoDate(endedAt)}
            </div>
          ) : null}
          <span>
            <strong>Source:</strong>
          </span>{' '}
          {causes.map(cause => cause)} <br />
          <span>
            <strong>Description:</strong>
          </span>
          {description}
          <br />
          <span>
            <strong>Location:</strong>
          </span>
          <br />
          <div className="IncidentDetailLocation p-l-10">
            <span>
              <strong>Region:</strong>
            </span>
            {areas.map(area => area)}
            <br />
            <span>
              <strong>District:</strong>
            </span>
            Kinondoni District <br />
            <span>
              <strong>Ward:</strong>
            </span>
            Hananasif <br />
            <span>
              <strong>Street:</strong>
            </span>
            Mkunguni A <br />
          </div>
          <span>
            <strong>Reported Amount of rainful:</strong>
          </span>
          <br />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  incidentSelected: state.incidents.incident ? state.incidents.incident : [],
  loading: state.incidents.isLoading,
});

export default connect(
  mapStateToProps,
  ''
)(IncidentDetailsContent);

IncidentDetailsContent.propTypes = {
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

IncidentDetailsContent.defaultProps = {
  incidentSelected: {},
};
