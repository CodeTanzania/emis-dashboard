import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import MapPointsDrawSupport from '../../../../../../common/components/MapPointsDrawSupport';
import { getSelectedIncident, activeIncidentAction } from '../../../../actions';
import { incidents, showMarkers } from '../../../../helpers';

/**
 * Wraper component drawing Incidents markers and shapes (Eg. Polygons, Cirles and Points)
 * on map
 * This component must be Child of map component to enable its children
 * to access map context
 *
 * @class
 * @name RenderAllIncidents
 *
 * @version 0.1.0
 * @since 0.1.0
 */

class RenderAllIncidents extends React.Component {
  static propTypes = {
    // incidents: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     event: PropTypes.string,
    //     incidentsTypeData: PropTypes.shape({
    //       name: PropTypes.string,
    //       nature: PropTypes.string.isRequired,
    //       family: PropTypes.string.isRequired,
    //       color: PropTypes.string,
    //       _id: PropTypes.string,
    //     }),
    //     description: PropTypes.string.isRequired,
    //     startedAt: PropTypes.string,
    //     endedAt: PropTypes.string,
    //     _id: PropTypes.string,
    //   }).isRequired
    // ),
    incidentsAction: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
    ).isRequired,
    setIncidentAction: PropTypes.func,
    getIncident: PropTypes.func,
    showPoints: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    // incidents: null,
    getIncident: null,
    setIncidentAction: () => {},
  };

  constructor(props) {
    super(props);
    this.onEachFeature = this.onEachFeature.bind(this);
  }

  onClickIncident = e => {
    const { getIncident, incidentsAction, setIncidentAction } = this.props;
    const id = get(e, 'target.feature.properties._id');
    incidentsAction.filter(incidentAction => {
      const { incident } = incidentAction;
      const { _id: incidentId } = incident;
      if (incidentId === id) {
        const { _id: actionId } = incidentAction;
        return setIncidentAction(actionId);
      }
      return null;
    });
    getIncident(id);
  };

  onEachFeature = (feature, layer) => {
    const { properties } = feature;
    const { event } = properties;
    layer
      .on('click', this.onClickIncident)
      .bindTooltip(`${event}`)
      .openTooltip();
  };

  render() {
    const {
      showPoints,
      // incidents
    } = this.props;
    const pointMarkers = incidents.map(({ epicentre }) => epicentre);
    return (
      <Fragment>
        <MapPointsDrawSupport
          points={pointMarkers}
          pointToLayer={showMarkers}
          isShowPoints={showPoints}
          onEachFeature={this.onEachFeature}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  incidents:
    state.incidents.data && state.incidents.data ? state.incidents.data : [],
  incidentsAction: state.incidents.incidentActionsData
    ? state.incidents.incidentActionsData
    : [],
  showPoints: state.renderMapMarkers.showPoints,
});

const mapDispatchToProps = {
  getIncident: getSelectedIncident,
  setIncidentAction: activeIncidentAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderAllIncidents);
