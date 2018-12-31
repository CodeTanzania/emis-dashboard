import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import { withLeaflet } from 'react-leaflet';

class DrawControls extends React.Component {
  componentDidMount() {
    this.map = this.props.leaflet.map;
    this.initializeDrawControls();
  }

  initializeDrawControls = () => {
    this.drawnItems = new L.FeatureGroup();
    this.map.addLayer(this.drawnItems);
    this.drawControl = new L.Control.Draw({
      position: 'topright',
      draw: {
        polyline: false,
        circlemarker: false,
        rectangle: false,
        marker: false,
      },
      edit: {
        featureGroup: this.drawnItems,
      },
    });
    this.map.addControl(this.drawControl);
  };

  render() {
    return null;
  }
}

export default withLeaflet(DrawControls);

DrawControls.propTypes = {
  leaflet: PropTypes.shape({
    map: PropTypes.object.isRequired,
  }).isRequired,
};
