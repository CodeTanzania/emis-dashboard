import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import AlertSideBar from '../AlertSideBar';
import AlertDetailsSummary from './components/AlertDetailsSummary';
import MapPolygonsDrawSupport from '../../../../common/components/MapPolygonsDrawSupport';
import MapPointsDrawSupport from '../../../../common/components/MapPointsDrawSupport';
import AlertsBaseMap from '../AlertsBaseMap';
import {
  getAlertOperation,
  showSeleteAlertShape,
  showAlertPoints,
} from '../../actions';

/**
 * This component displays a page for
 * Visualizing Alert details
 *
 * @class
 * @name AlertDetails
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class AlertDetails extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    shapes: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedAlert: PropTypes.shape({
      _id: PropTypes.string,
      source: PropTypes.string,
      number: PropTypes.string,
      status: PropTypes.string,
      type: PropTypes.string,
      scope: PropTypes.string,
      category: PropTypes.string,
      event: PropTypes.string,
      response: PropTypes.string,
      urgency: PropTypes.string,
      severity: PropTypes.string,
      certainty: PropTypes.string,
      instruction: PropTypes.string,
      area: PropTypes.string,
      geometry: PropTypes.object,
      centroid: PropTypes.object,
      reportedAt: PropTypes.string,
      direction: PropTypes.string,
      color: PropTypes.string,
      updatedAt: PropTypes.string,
      createdAt: PropTypes.string,
    }).isRequired,
    getAlert: PropTypes.func,
    center: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  static defaultProps = {
    getAlert: () => {},
  };

  componentDidMount() {
    const {
      getAlert,
      match: {
        params: { id },
      },
    } = this.props;
    getAlert(id);
  }

  arePolygons = shapes => {
    const polygon = shapes.filter(
      ({ geometry }) => geometry.type !== 'Polygon'
    );
    return polygon.length === 0;
  };

  render() {
    const { center, zoom, shapes, selectedAlert, loading } = this.props;
    return (
      <Spin
        spinning={loading}
        tip="Loading..."
        size="large"
        style={{ position: 'absolute', top: '25%', right: '5%' }}
      >
        {selectedAlert ? (
          <AlertSideBar title="Details">
            <AlertDetailsSummary selectedAlert={selectedAlert} />
          </AlertSideBar>
        ) : null}
        <AlertsBaseMap center={center} zoom={zoom} zoomControl={false}>
          {this.arePolygons(shapes) ? (
            <MapPolygonsDrawSupport polygons={shapes} />
          ) : (
            <MapPointsDrawSupport points={shapes} />
          )}
        </AlertsBaseMap>
      </Spin>
    );
  }
}

const mapStateToProps = state => ({
  shapes: state.alertsMap.shapes,
  center: state.alertsMap.center,
  zoom: state.alertsMap.zoom,
  loading: state.alerts.loadingSelected,
  selectedAlert: state.alerts.selected,
});

const mapDispatchToProps = {
  getAlert: getAlertOperation,
  showPoints: showAlertPoints,
  showShape: showSeleteAlertShape,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertDetails);
