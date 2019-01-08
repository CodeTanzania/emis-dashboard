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
  static propTypes = {
    pointToLayer: PropTypes.func,
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

  static defaultProps = {
    points: [],
    isShowPoints: true,
    onEachFeature: () => {},
    pointToLayer: () => {},
  };

  componentDidMount() {
    this.map = this.props.leaflet.map;
    const { isShowPoints, points } = this.props;
    this.initializePointsLayer();
    if (isShowPoints) {
      this.addDataToPointsLayer(points);
    }
  }

  componentDidUpdate(prevProps) {
    const { points, isShowPoints } = this.props;
    const { points: prevPoints, isShowPoints: prevIsShowPoints } = prevProps;

    if (isShowPoints !== prevIsShowPoints) {
      this.updatePointsLayer(isShowPoints);
    }

    if (points !== prevPoints) {
      this.addDataToPointsLayer(points);
    }
  }

  hidePointsLayer = () => this.map.removeLayer(this.pointsLayer);

  showPointsLayer = () => this.pointsLayer.addTo(this.map);

  updatePointsLayer = isShowPoints => {
    if (isShowPoints && !this.map.hasLayer(this.pointsLayer)) {
      this.showPointsLayer();
    } else if (!isShowPoints && this.map.hasLayer(this.pointsLayer)) {
      this.hidePointsLayer();
    }
  };

  initializePointsLayer = () => {
    const { onEachFeature, pointToLayer } = this.props;
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
    L.Marker.prototype.options.icon = DefaultIcon;
    this.pointsLayer = L.geoJSON([], {
      onEachFeature,
      pointToLayer,
    }).addTo(this.map);
  };

  addDataToPointsLayer = points => {
    this.pointsLayer.clearLayers();
    this.pointsLayer.addData(points);
  };

  render() {
    return null;
  }
}

export default withLeaflet(MapPointsDrawSupport);
