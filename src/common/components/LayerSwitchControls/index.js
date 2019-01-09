import React from 'react';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import { baseLayers } from '../../lib/emisTileLayers';

class LayerSwitchControls extends React.Component {
  static propTypes = {
    leaflet: PropTypes.shape({
      map: PropTypes.object.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.map = this.props.leaflet.map;
    this.initializeMapControls();
  }

  initializeMapControls = () => {
    // LayerSwitching Controls
    L.control
      .layers(
        baseLayers,
        {},
        {
          position: 'bottomleft',
        }
      )
      .addTo(this.map);

    // Zoom controls
    L.control
      .zoom({
        position: 'bottomleft',
      })
      .addTo(this.map);
  };

  render() {
    return null;
  }
}

export default withLeaflet(LayerSwitchControls);
