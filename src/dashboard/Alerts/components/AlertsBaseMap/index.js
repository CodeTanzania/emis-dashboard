import React from 'react';
import PropTypes from 'prop-types';
import * as ReactLeaflet from 'react-leaflet';
// constants
const { Map: LeafletMap, TileLayer } = ReactLeaflet;

function AlertBaseMap({ center, zoom, children, zoomControl }) {
  return (
    <LeafletMap center={center} zoom={zoom} zoomControl={zoomControl}>
      {children}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
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
