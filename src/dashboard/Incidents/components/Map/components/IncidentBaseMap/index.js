import React from 'react';
import * as ReactLeaflet from 'react-leaflet';
import PropTypes from 'prop-types';
import LayerSwitchControl from '../../../../../../common/components/LayerSwitchControls';

import './styles.css';
// constants
const { Map: LeafletMap, TileLayer } = ReactLeaflet;

/**
 * Base map for Incident components
 * Renders openstreetmap
 *
 * @class
 * @name IncidentBaseMap
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class IncidentBaseMap extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  };

  constructor() {
    super();
    this.state = {
      position: [-6.606, 36.0804],
      zoom: 7,
    };
  }

  render() {
    const { position, zoom } = this.state;
    const { children } = this.props;
    return (
      <div id="incidentMap">
        <LeafletMap center={position} zoom={zoom} zoomControl={false}>
          <LayerSwitchControl />
          {children}
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            id="mapbox.light"
            url="https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid29ybGRiYW5rLWVkdWNhdGlvbiIsImEiOiJIZ2VvODFjIn0.TDw5VdwGavwEsch53sAVxA#1.6/23.725906/-39.714135/0"
          />
        </LeafletMap>
      </div>
    );
  }
}

export default IncidentBaseMap;
