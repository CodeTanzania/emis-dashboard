import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapPointsDrawSupport from '../../../../../../common/components/MapPointsDrawSupport';
import MapPolygonsDrawSupport from '../../../../../../common/components/MapPolygonsDrawSupport';
import { showMarkers } from '../../../../helpers';
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
    showPoint: PropTypes.bool.isRequired,
  };

  generateFeatures = (affected, properties) =>
    affected.map(({ geometry }) => ({
      type: 'Feature',
      properties,
      geometry,
    }));

  checkForPolygon = ({ affected, areaSelected }) => {
    const featureCollection = {
      type: 'FeatureCollection',
      features: [],
    };
    if (affected) {
      const { properties } = areaSelected;
      const features = this.generateFeatures(affected, properties);
      const data = { ...featureCollection, features };
      return [data];
    }

    return [];
  };

  polygonStyle = feature => {
    const { geometry, properties } = feature;
    const { incidenttype } = properties;
    const { color } = incidenttype;
    const { type } = geometry;
    if (type === 'Polygon' || 'MultiPolygon') {
      return { color };
    }
    return null;
  };

  render() {
    const { selected, showPoint, showPolygon } = this.props;
    const { areaSelected } = selected || null;
    const polygon = selected ? this.checkForPolygon(selected) : [];
    return (
      <React.Fragment>
        {polygon.length > 0 ? (
          <MapPolygonsDrawSupport
            isShowPolygons={showPolygon}
            polygons={polygon}
            style={this.polygonStyle}
          />
        ) : (
          <MapPointsDrawSupport
            points={areaSelected}
            pointToLayer={showMarkers}
            isShowPoints={showPoint}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.incidents.incident ? state.incidents.incident : [],
  showPoint: state.renderMapMarkers.showPoint,
  showPolygon: state.incidents.isSelected,
});

export default connect(mapStateToProps)(RenderSingleIncident);
