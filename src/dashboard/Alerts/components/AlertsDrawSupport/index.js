import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapPointsDrawSupport from '../../../components/MapPointsDrawSupport';

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
function AlertsDrawSupport({ points }) {
  return <MapPointsDrawSupport points={points} />;
}

const mapStateToProps = state => ({
  points: state.alertsMap.points,
});

export default connect(mapStateToProps)(AlertsDrawSupport);

AlertsDrawSupport.propTypes = {
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
};
