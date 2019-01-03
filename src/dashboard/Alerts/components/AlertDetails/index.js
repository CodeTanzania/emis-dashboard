import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlertSideBar from '../AlertSideBar';
import AlertDetailsSummary from '../AlertDetailsSummary';
import MapPolygonsDrawSupport from '../../../../common/components/MapPolygonsDrawSupport';
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

  render() {
    const { center, zoom, shapes, selectedAlert } = this.props;
    return (
      <React.Fragment>
        <AlertSideBar title="Details">
          <AlertDetailsSummary selectedAlert={selectedAlert} />
        </AlertSideBar>
        <AlertsBaseMap center={center} zoom={zoom} zoomControl={false}>
          <MapPolygonsDrawSupport polygons={shapes} />
        </AlertsBaseMap>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shapes: state.alertsMap.shapes,
  center: state.alertsMap.center,
  zoom: state.alertsMap.zoom,
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
