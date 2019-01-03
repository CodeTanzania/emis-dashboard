import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlertNavBar from '../AlertNavBar';
import NewAlertButton from './components/NewAlertButton';
import AlertSideBar from '../AlertSideBar';
import AlertBaseMap from '../AlertsBaseMap';
import AlertsDrawSupport from '../AlertsDrawSupport';

/**
 * Component that layouts the Alert home page
 *
 * @function
 * @name AlertsHome
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function AlertsHome({ center, zoom }) {
  return (
    <React.Fragment>
      <AlertNavBar>
        <NewAlertButton />
      </AlertNavBar>
      <AlertSideBar title="Filter">
        <div>This is filter contents</div>
      </AlertSideBar>
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
