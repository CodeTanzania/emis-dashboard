import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import { withLeaflet } from 'react-leaflet';

/**
 * Controls for Drawing shapes on Map
 * Add leaflet draw controls on Map
 *
 * @class
 * @name DrawControls
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class DrawControls extends React.Component {
  static propTypes = {
    leaflet: PropTypes.shape({
      map: PropTypes.object.isRequired,
    }).isRequired,
    isHideControls: PropTypes.bool,
    onDrawCreated: PropTypes.func,
  };

  static defaultProps = {
    isHideControls: false,
    onDrawCreated: () => {},
  };

  componentDidMount() {
    this.map = this.props.leaflet.map;
    const { isHideControls } = this.props;
    this.initializeDrawControls();
    this.toggoleShowDrawControls(isHideControls);
  }

  componentDidUpdate(prevProps) {
    const { isHideControls } = this.props;
    const { isHideControls: prevIsHideControls } = prevProps;
    if (isHideControls !== prevIsHideControls) {
      this.toggoleShowDrawControls(isHideControls);
    }
  }

  toggoleShowDrawControls = isHideControls => {
    if (isHideControls) {
      this.drawControl.remove();
    } else {
      this.map.addControl(this.drawControl);
    }
  };

  initializeDrawControls = () => {
    this.drawnItems = new L.FeatureGroup();
    this.map.addLayer(this.drawnItems);
    this.drawControl = new L.Control.Draw({
      position: 'topleft',
      draw: {
        polyline: false,
        circlemarker: false,
        rectangle: false,
        marker: false,
        circle: false,
      },
      edit: {
        featureGroup: this.drawnItems,
      },
    });

    this.map.on('draw:created', ({ layer }) => {
      const { onDrawCreated } = this.props;
      this.drawnItems.addLayer(layer);
      const geoJson = layer.toGeoJSON();
      onDrawCreated(geoJson);
    });
  };

  render() {
    return null;
  }
}

export default withLeaflet(DrawControls);
