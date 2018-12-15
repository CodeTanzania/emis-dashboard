import React from 'react';
import {} from 'antd';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * Incident actions Layout component
 * shows all actions to be taken
 *
 * @function
 * @name IncidentActions
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function IncidentActions({ selectedAction }) {
  const { name, phase, description } = selectedAction;
  return (
    <div className="IncidentActions">
      <span>
        <h3>Action to be taken</h3>
      </span>
      <table>
        <tbody>
          <tr>
            <td>INCIDENT ACTION</td>
            <td id="popupData">{name}</td>
          </tr>
          <tr>
            <td>PHASE</td>
            <td id="popupData">{phase}</td>
          </tr>
          <tr>
            <td>DESCRIPTION</td>
            <td id="popupData"> {description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

IncidentActions.propTypes = {
  selectedAction: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    phase: PropTypes.string.isRequired,
    incident: PropTypes.shape({
      name: PropTypes.string.isRequired,
      startedAt: PropTypes.instanceOf(Date),
      endedAt: PropTypes.instanceOf(Date),
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
};
