import { connect } from 'react-redux';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAlerts } from './actions';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import AlertsHome from './components/AlertsHome';
import NewAlert from './components/NewAlert';

/**
 * Alerts Base Layout component
 * This layout has a map for alerts view
 * and will be used for viewing alerts and alert details
 *
 * @class
 * @name Alerts
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class Alerts extends React.Component {
  static propTypes = {
    getAllAlerts: PropTypes.func,
    match: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    getAllAlerts: () => {},
  };

  componentDidMount() {
    const { getAllAlerts } = this.props;
    getAllAlerts();
  }

  render() {
    const { match } = this.props;

    return (
      <div id="alerts-map" className="Alerts">
        <Switch>
          <Route exact path={`${match.url}`} component={AlertsHome} />
          <Route path={`${match.url}/new`} component={NewAlert} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAllAlerts: getAlerts,
};
export default connect(
  null,
  mapDispatchToProps
)(Alerts);
