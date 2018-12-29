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
 * Wrraper component for Supporting of Alerts drawing shapes
 * on map (Eg. Polygons, Cirles and Points)
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

  onEachFeature = (feature, layer) => {
    const {
      properties: { event, expectedAt, id },
    } = feature;
    const { selectAlert } = this.props;
    layer
      .on({ click: () => selectAlert(id) })
      .bindTooltip(
        `<div><div><strong>Event:</strong> ${event}</div><div><strong>${formatAlertFieldType(
          'expectedAt'
        )}</strong>: ${isoDateToHumanReadableDate(expectedAt)}</div></div>`
      )
      .openTooltip();
  };

  render() {
    const { points } = this.props;
    return (
      <MapPointsDrawSupport
        points={points}
        onEachFeature={this.onEachFeature}
      />
    );
  }
}

const mapStateToProps = state => ({
  points: state.alertsMap.points,
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
  selectAlert: () => {},
};
