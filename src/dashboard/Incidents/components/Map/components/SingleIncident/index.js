import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapPointsDrawSupport from '../../../../../../common/components/MapPointsDrawSupport';
import MapPolygonsDrawSupport from '../../../../../../common/components/MapPolygonsDrawSupport';
import { getSelectedIncident } from '../../../../actions';
// import { showMarkers } from '../../../../helpers';

/**
 * Wraper component drawing Incidents markers and shapes (Eg. Polygons, Cirles and Points)
 * on map
 * This component must be Child of map component to enable its children
 * to access map context
 *
 * @class
 * @name RenderSingleIncident
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class RenderSingleIncident extends React.Component {
  static propTypes = {
    showPolygon: PropTypes.bool.isRequired,
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
    showPoints: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    getIncident: null,
  };

  generateFeatures = affected =>
    affected.map(({ geometry }) => ({
      type: 'Feature',
      properties: {},
      geometry,
    }));

  checkForPolygon = ({ affected }) => {
    const featureCollection = {
      type: 'FeatureCollection',
      features: [],
    };
    if (affected) {
      const features = this.generateFeatures(affected);
      const data = { ...featureCollection, features };
      return [data];
    }

    return [];
  };

  render() {
    const { selected, showPoint, showPolygon } = this.props;
    const { areaSelected } = selected ? selected : null;
    const { geometry: pointMarkerSelected } = areaSelected
      ? areaSelected
      : { geometry: [] };
    const polygon = selected ? this.checkForPolygon(selected) : [];
    console.log(polygon);
    return (
      <React.Fragment>
        {polygon.length > 0 ? (
          <MapPolygonsDrawSupport
            isShowPolygons={showPolygon}
            polygons={polygon}
          />
        ) : (
          <MapPointsDrawSupport
            points={pointMarkerSelected}
            // pointToLayer={showMarkers}
            isShowPoints={showPoint}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selected: state.incidents.incident ? state.incidents.incident : [],
    showPoint: state.renderMapMarkers.showPoint,
    showPolygon: state.incidents.isSelected,
  };
};

const mapDispatchToProps = {
  getIncident: getSelectedIncident,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderSingleIncident);
