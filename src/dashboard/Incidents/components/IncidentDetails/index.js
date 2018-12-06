import React from 'react';
import {} from 'antd';
import PropTypes from 'prop-types';
import './styles.css'

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
export default class IncidentDetails extends React.Component {
  static propTypes = {
    incident: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        incidentType: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            nature: PropTypes.string.isRequired,
            family: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
            cap: PropTypes.string.isRequired,
            color: PropTypes.string,
            _id: PropTypes.string,
          }).isRequired
        ),
        description: PropTypes.string.isRequired,
        startAt: PropTypes.date,
        endAt: PropTypes.date,
      }).isRequired
    ),
  };

  static defaultProps = {
    incident: null,
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { incident } = this.props;
    const {
      name,
      incidentType = [],
      startedAt,
      description,
      endedAt,
    } = incident;
    const { name: type } = incidentType;
    return (
      <div className="popupContent">
        <div className="IncidentDetails">
          <div className="p-l-10">
            <table>
              <tbody>
                <tr>
                  <td>Incident</td>
                  <td id="popupData">{name}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td id="popupData">{type}</td>
                </tr>
                <tr>
                  <td>Time of Call</td>
                  <td id="popupData">{startedAt}</td>
                </tr>
                <tr>
                  <td>End at</td>
                  <td id="popupData">{endedAt}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td id="popupData"> {description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
