import React from 'react';
import {} from 'antd';
import PropTypes from 'prop-types';

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

export default function IncidentActions ({selectedAction}){
    const  {
        name,
        phase,
        description,
      } = selectedAction;
    return (
        <div className="IncidentActions">
        <span>
            <h3>Action to be taken</h3>
        </span>
            <table>
              <tbody>
                <tr>
                  <td>Incident Action</td>
                  <td id="popupData">{name}</td>
                </tr>
                <tr>
                  <td>phase</td>
                  <td id="popupData">{phase}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td id="popupData"> {description}</td>
                </tr>
              </tbody>
            </table>
          </div>
      );
  }

  IncidentActions.prototype = {
      selectedAction: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string.isRequired,
        phase: PropTypes.string.isRequired,
        incident: PropTypes.shape({
            name:PropTypes.string.isRequired,
            startedAt:PropTypes.string.isRequired,
            endedAt:PropTypes.string.isRequired,
            _id: PropTypes.string,
        }),
        incidentType: PropTypes.shape({
            name: PropTypes.string,
            nature: PropTypes.string.isRequired,
            family: PropTypes.string.isRequired,
            color: PropTypes.string,
            _id: PropTypes.string
        }),
        _id: PropTypes.string,
      }).isRequired
}

IncidentActions.defaultProps = {
    selectedAction: '',
  };