import React from 'react';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

/**
 * This component uses leaflet drawing functions
 * to draw points on map as map markers
 * This component should have parent who is child of map
 * component inorder to access map context
 *
 * @class
 * @name MapPointsDrawSupport
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class MapPointsDrawSupport extends React.Component {
  componentDidMount() {
    this.map = this.props.leaflet.map;
    L.control.zoom({ position: 'bottomleft' }).addTo(this.map);
  }

  componentDidUpdate(prevProps) {
    const { points, isShowPoints } = this.props;
    const { points: prevPoints, isShowPoints: prevIsShowPoints } = prevProps;

    if (isShowPoints !== prevIsShowPoints && !isShowPoints) {
      this.map.removeLayer(this.pointsLayer);
    }

    if (points !== prevPoints) {
      this.showPoints(points);
    }
  }

  showPoints = points => {
    const { onEachFeature } = this.props;
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
    L.Marker.prototype.options.icon = DefaultIcon;
    this.pointsLayer = L.geoJSON([], {
      onEachFeature,
    }).addTo(this.map);
    this.pointsLayer.addData(points);
  };

  render() {
    return null;
  }
}

export default withLeaflet(MapPointsDrawSupport);

MapPointsDrawSupport.propTypes = {
  onEachFeature: PropTypes.func,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      properties: PropTypes.shape({
        id: PropTypes.string,
      }),
      geometry: PropTypes.shape({
        type: PropTypes.string,
        coordinates: PropTypes.arrayOf(PropTypes.number),
      }),
    })
  ),
  leaflet: PropTypes.shape({
    map: PropTypes.object.isRequired,
  }).isRequired,
  isShowPoints: PropTypes.bool,
};

MapPointsDrawSupport.defaultProps = {
  points: [],
  isShowPoints: true,
  onEachFeature: () => {},
};
