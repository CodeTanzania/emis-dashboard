import React from 'react';
import {} from 'antd';
import PropTypes from 'prop-types';
import './styles.css'
import { connect } from 'react-redux';
import IncidentActions from '../IncidentActions';

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

 class IncidentDetails extends React.Component {
  static propTypes = {
    incident: PropTypes.shape({
      name: PropTypes.string,
      incidentsTypeData:PropTypes.shape({
          name: PropTypes.string,
          nature: PropTypes.string.isRequired,
          family: PropTypes.string.isRequired,      
          color: PropTypes.string,
          _id: PropTypes.string,
        }).isRequired,
      description: PropTypes.string.isRequired,
      startedAt: PropTypes.date,
      endedAt: PropTypes.date,
      _id: PropTypes.string,
    }).isRequired,
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
  };

  static defaultProps = {
    incident: null,
    selectedAction:null,
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { incident, actionTaken } = this.props;
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
            <IncidentActions selectedAction = {actionTaken}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return{
  actionTaken: state.selectedIncident.incidentAction ? 
  state.selectedIncident.incidentAction : [],
}}

export default connect(mapStateToProps, '')(IncidentDetails);