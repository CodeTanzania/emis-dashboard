import React from 'react';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import L from 'leaflet';

/**
 * This component uses leaflet drawing functions
 * to draw polygons on map
 * This component should have parent who is child of map
 * component inorder to access map context
 *
 * @class
 * @name MapPolygonsDrawSupport
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class MapPolygonsDrawSupport extends React.Component {
  componentDidMount() {
    this.map = this.props.leaflet.map;
    this.initializePolygonsLayer();
  }

  componentDidUpdate(prevProps) {
    const { polygons, isShowPolygons } = this.props;
    const {
      polygons: prevPolygons,
      isShowPolygons: prevIsShowPolygons,
    } = prevProps;

    if (isShowPolygons !== prevIsShowPolygons) {
      this.updatePolygonsLayer(isShowPolygons);
    }

    if (polygons !== prevPolygons) {
      this.addDataToPolygonsLayer(polygons);
    }
  }

  hidePolygonsLayer = () => this.map.removeLayer(this.polygonsLayer);

  showPolygonsLayer = () => this.polygonsLayer.addTo(this.map);

  updatePolygonsLayer = isShowPolygons => {
    if (isShowPolygons && !this.map.hasLayer(this.polygonsLayer)) {
      this.showPolygonsLayer();
    } else if (!isShowPolygons && this.map.hasLayer(this.polygonsLayer)) {
      this.hidePolygonsLayer();
    }
  };

  initializePolygonsLayer = () => {
    const { onEachFeature } = this.props;
    this.polygonsLayer = L.geoJSON([], {
      onEachFeature,
    }).addTo(this.map);
  };

  addDataToPolygonsLayer = polygons => {
    this.polygonsLayer.clearLayers();
    this.polygonsLayer.addData(polygons);
  };

  render() {
    return null;
  }
}

export default withLeaflet(MapPolygonsDrawSupport);

MapPolygonsDrawSupport.propTypes = {
  onEachFeature: PropTypes.func,
  polygons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      properties: PropTypes.object,
      geometry: PropTypes.shape({
        type: PropTypes.string,
        coordinates: PropTypes.array,
      }),
    })
  ),
  leaflet: PropTypes.shape({
    map: PropTypes.object.isRequired,
  }).isRequired,
  isShowPolygons: PropTypes.bool,
};

MapPolygonsDrawSupport.defaultProps = {
  polygons: [],
  isShowPolygons: true,
  onEachFeature: () => {},
};
