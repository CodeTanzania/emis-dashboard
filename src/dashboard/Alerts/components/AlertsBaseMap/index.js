import React from 'react';
import PropTypes from 'prop-types';
import * as ReactLeaflet from 'react-leaflet';
import LayerSwitchControl from '../../../../common/components/LayerSwitchControls';
// constants
const { Map: LeafletMap, TileLayer } = ReactLeaflet;

/**
 * Base map for Alerts that can be reused accross
 * components
 * Renders openstreetmap
 *
 * @function
 * @name AlertBaseMap
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function AlertBaseMap({ center, zoom, children, zoomControl }) {
  return (
    <LeafletMap
      center={center}
      zoom={zoom}
      zoomControl={zoomControl}
      closePopupOnClick={false}
    >
      {children}
      <LayerSwitchControl />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        id="mapbox.light"
        url="https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid29ybGRiYW5rLWVkdWNhdGlvbiIsImEiOiJIZ2VvODFjIn0.TDw5VdwGavwEsch53sAVxA#1.6/23.725906/-39.714135/0"
      />
    </LeafletMap>
  );
}

export default AlertBaseMap;

AlertBaseMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  zoomControl: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

AlertBaseMap.defaultProps = {
  zoomControl: true,
};
