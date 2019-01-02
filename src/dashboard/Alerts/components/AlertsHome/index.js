import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlertNavBar from '../AlertNavBar';
import NewAlertButton from './components/NewAlertButton';
import AlertSideBar from '../AlertSideBar';
import AlertBaseMap from '../AlertsBaseMap';
import AlertsDrawSupport from '../AlertsDrawSupport';

function AlertsHome({ center, zoom }) {
  return (
    <React.Fragment>
      <AlertNavBar>
        <NewAlertButton />
      </AlertNavBar>
      <AlertSideBar />
      <AlertBaseMap center={center} zoom={zoom} zoomControl={false}>
        <AlertsDrawSupport />
      </AlertBaseMap>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  center: state.alertsMap.center,
  zoom: state.alertsMap.zoom,
});

export default connect(mapStateToProps)(AlertsHome);

AlertsHome.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
};
