

import { connect } from 'react-redux';
import Alerts from './Alerts';

/**
 * Alerts High Order component
 * This component will be used  to
 * connect Alerts componet to state
 * 
 * @version 0.1.0
 * @since 0.1.0
 */

const mapStateToProps = state => ({
    center: state.alerts.mapData.center,
    zoom: state.alerts.mapData.zoom,
  });

  export default connect(mapStateToProps)(Alerts)