import { connect } from 'react-redux';
import React from 'react';
import * as ReactLeaflet from 'react-leaflet';
import PropTypes from 'prop-types';
import AlertsDrawSupport from './components/AlertsDrawSupport';
import { getAlerts } from './actions';
import 'leaflet/dist/leaflet.css';
import './styles.css';

// constants
const { Map: LeafletMap, TileLayer } = ReactLeaflet;

/**
 * Alerts Base Layout component
 * This layout has a map for alerts view
 * and will be used for viewing alerts and alert details
 *
 * @class
 * @name Alerts
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class Alerts extends React.Component {
  componentDidMount() {
    const { getAllAlerts } = this.props;
    getAllAlerts();
  }

  render() {
    const { center, zoom } = this.props;

    return (
      <div id="alerts-map" className="Alerts">
        <LeafletMap center={center} zoom={zoom} zoomControl={false}>
          <AlertsDrawSupport />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </LeafletMap>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  center: state.alertsMap.center,
  zoom: state.alertsMap.zoom,
});

const mapDispatchToProps = {
  getAllAlerts: getAlerts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alerts);

Alerts.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  getAllAlerts: PropTypes.func,
};

Alerts.defaultProps = {
  getAllAlerts: () => {},
};
