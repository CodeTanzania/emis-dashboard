import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import AlertNavBar from '../AlertNavBar';
import NewAlertButton from './components/NewAlertButton';
import AlertSideBar from '../AlertSideBar';
import AlertBaseMap from '../AlertsBaseMap';
import AlertFilters from './components/AlertFilters';
import AlertsPointDrawSupport from '../AlertsPointsDrawSupport';
import AlertLegend from './components/AlertLegend';
import Display from './components/Display';

/**
 * Component that layouts the Alert home page
 *
 * @function
 * @name AlertsHome
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function AlertsHome({ center, zoom, loading }) {
  return (
    <Spin
      spinning={loading}
      tip="Loading..."
      size="large"
      style={{ position: 'absolute', top: '25%', right: '5%' }}
    >
      <AlertLegend />
      <AlertNavBar>
        <React.Fragment>
          <NewAlertButton />
          <Display />
        </React.Fragment>
      </AlertNavBar>
      <AlertSideBar title="Filter">
        <AlertFilters />
      </AlertSideBar>
      <AlertBaseMap center={center} zoom={zoom} zoomControl={false}>
        <AlertsPointDrawSupport />
      </AlertBaseMap>
    </Spin>
  );
}

const mapStateToProps = state => ({
  center: state.alertsMap.center,
  zoom: state.alertsMap.zoom,
  loading: state.alerts.loading,
});

export default connect(mapStateToProps)(AlertsHome);

AlertsHome.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
