import { connect } from 'react-redux';
import React from 'react';
import * as ReactLeaflet from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import './styles.css';

// constants
const { Map: LeafletMap, TileLayer } = ReactLeaflet;

/**
 * Alerts Base Layout component
 * This layout has a map for alerts view
 * and will be used for viewing alerts and alert details
 *
 * @function
 * @name Alerts
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Alerts({ center, zoom }) {
  return (
    <div id="alerts-map" className="Alerts">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    </div>
  );
}

Alerts.propTypes = {
  center: PropTypes.arrayOf(PropTypes.string).isRequired,
  zoom: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  center: state.alertsMap.center,
  zoom: state.alertsMap.zoom,
});

export default connect(mapStateToProps)(Alerts);
