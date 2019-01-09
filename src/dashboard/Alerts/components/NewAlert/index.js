import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import AlertNavBar from '../AlertNavBar';
import AlertSideBar from '../AlertSideBar';
import BackButton from './components/BackButton';
import AlertBaseMap from '../AlertsBaseMap';
import AlertMapDrawControls from '../AlertMapControls';
import WrappedNewAlertForm from './components/NewAlertForm';

/**
 * Component renders page for creating a new alert
 *
 * @function
 * @name NewAlert
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function NewAlert({ center, zoom }) {
  return (
    <Spin
      spinning={false}
      tip="Loading..."
      size="large"
      style={{ position: 'absolute', top: '25%', right: '5%' }}
    >
      <AlertNavBar>
        <BackButton />
      </AlertNavBar>
      <AlertSideBar title="New Alert">
        <WrappedNewAlertForm />
      </AlertSideBar>
      <AlertBaseMap center={center} zoom={zoom} zoomControl={false}>
        <AlertMapDrawControls />
      </AlertBaseMap>
    </Spin>
  );
}

const mapStateToProps = state => ({
  center: state.alertsMap.center,
  zoom: state.alertsMap.zoom,
});

export default connect(mapStateToProps)(NewAlert);

NewAlert.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
};
