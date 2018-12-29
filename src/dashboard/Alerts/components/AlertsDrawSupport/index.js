import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapPointsDrawSupport from '../../../../common/components/MapPointsDrawSupport';
import { getSelectedAlertFromState } from '../../actions';
import {
  isoDateToHumanReadableDate,
  formatAlertFieldType,
} from '../../helpers';

/**
 * Wrraper component for Supporting  drawing of Alerts shapes (Eg. Polygons, Cirles and Points)
 * on map
 * This component must be Child of map component to enable its children
 * to access map context
 *
 * @class
 * @name AlertsDrawSupport
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class AlertsDrawSupport extends React.Component {
  constructor(props) {
    super(props);
    this.onEachFeature = this.onEachFeature.bind(this);
  }

  onMarkerClicked = id => {
    const { selectAlert } = this.props;
    selectAlert(id);
  };

  onEachFeature = (feature, layer) => {
    const {
      properties: { event, expectedAt, id },
    } = feature;
    layer
      .on({
        click: () => {
          this.onMarkerClicked(id);
        },
      })
      .bindTooltip(
        `<div><div><strong>Event:</strong> ${event}</div><div><strong>${formatAlertFieldType(
          'expectedAt'
        )}</strong>: ${isoDateToHumanReadableDate(expectedAt)}</div></div>`
      )
      .openTooltip();
  };

  render() {
    const { points, selected } = this.props;
    const isShowPoints = !selected;
    return (
      <MapPointsDrawSupport
        isShowPoints={isShowPoints}
        points={points}
        onEachFeature={this.onEachFeature}
      />
    );
  }
}

const mapStateToProps = state => ({
  points: state.alertsMap.points,
  selected: state.alerts.selected,
});

const mapDispatchToProps = {
  selectAlert: getSelectedAlertFromState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertsDrawSupport);

AlertsDrawSupport.propTypes = {
  selectAlert: PropTypes.func,
  selected: PropTypes.shape({
    headline: PropTypes.string,
    reportedAt: PropTypes.string,
    expectedAt: PropTypes.string,
    expiredAt: PropTypes.string,
    instruction: PropTypes.string,
    source: PropTypes.string,
  }),
  points: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      properties: PropTypes.shape({
        id: PropTypes.string,
      }),
      geometry: PropTypes.shape({
        type: PropTypes.string,
        coordinates: PropTypes.arrayOf(PropTypes.number),
      }),
    })
  ),
};

AlertsDrawSupport.defaultProps = {
  points: [],
  selected: null,
  selectAlert: () => {},
};
