import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { bindActionCreators } from 'redux';
import MapPointsDrawSupport from '../../../../../../common/components/MapPointsDrawSupport';
import { getSelectedIncident } from '../../../../actions';
import { showMarkers } from '../../../../helpers';

/**
 * Wraper component drawing Incidents markers and shapes (Eg. Polygons, Cirles and Points)
 * on map
 * This component must be Child of map component to enable its children
 * to access map context
 *
 * @class
 * @name IncidentsDraw
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class IncidentsDraw extends React.Component {
  static propTypes = {
    incidents: PropTypes.arrayOf(
      PropTypes.shape({
        event: PropTypes.string,
        incidentsTypeData: PropTypes.shape({
          name: PropTypes.string,
          nature: PropTypes.string.isRequired,
          family: PropTypes.string.isRequired,
          color: PropTypes.string,
          _id: PropTypes.string,
        }),
        description: PropTypes.string.isRequired,
        startedAt: PropTypes.string,
        endedAt: PropTypes.string,
        _id: PropTypes.string,
      }).isRequired
    ),
    selected: PropTypes.shape({
      event: PropTypes.string,
      incidentsTypeData: PropTypes.shape({
        name: PropTypes.string,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        color: PropTypes.string,
        _id: PropTypes.string,
      }),
      description: PropTypes.string.isRequired,
      startedAt: PropTypes.string,
      endedAt: PropTypes.string,
    }).isRequired,

    getIncident: PropTypes.func,
  };

  static defaultProps = {
    incidents: null,
    getIncident: null,
  };

  constructor(props) {
    super(props);
    this.onEachFeature = this.onEachFeature.bind(this);
  }

  onClickIncident = e => {
    const { getIncident } = this.props;
    const id = get(e, 'target.feature.properties._id');
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
    const { incidents } = this.props;
    const pointMarkers = incidents.map(({ epicentre }) => epicentre);
    return (
      <MapPointsDrawSupport
        points={pointMarkers}
        pointToLayer={showMarkers}
        onEachFeature={this.onEachFeature}
      />
    );
  }
}

const mapStateToProps = state => ({
  incidents:
    state.incidents.data && state.incidents.data ? state.incidents.data : [],
  selected: state.selectedIncident.incident
    ? state.selectedIncident.incident
    : [],
});

const mapDispatchToProps = dispatch => ({
  getIncident: bindActionCreators(getSelectedIncident, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentsDraw);
