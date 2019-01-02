import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlertNavBar from '../AlertNavBar';
import AlertSideBar from '../AlertSideBar';
import BackButton from './components/BackButton';
import AlertBaseMap from '../AlertsBaseMap';
import AlertMapDrawControls from '../AlertMapControls';
import WrappedNewAlertForm from './components/NewAlertForm';

function AlertsHome({ center, zoom }) {
  return (
    <React.Fragment>
      <AlertNavBar>
        <BackButton />
      </AlertNavBar>
      <AlertSideBar title="New Alert">
        <WrappedNewAlertForm />
      </AlertSideBar>
      <AlertBaseMap center={center} zoom={zoom} zoomControl={false}>
        <AlertMapDrawControls />
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
