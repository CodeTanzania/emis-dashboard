import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlertDetails from './components/AlertDetails';
import { getAlerts, setExpectedAtFilter } from './actions';
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
    getNonExpiredAlerts: PropTypes.func,
    setCurrentDate: PropTypes.func,
    match: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    getNonExpiredAlerts: () => {},
    setCurrentDate: () => {},
  };

  componentDidMount() {
    this.fetchCurrentAlerts();
  }

  fetchCurrentAlerts = () => {
    const { getNonExpiredAlerts, setCurrentDate } = this.props;
    const today = moment().toISOString();
    const future = moment()
      .add(1, 'year')
      .toISOString();
    const dateRange = [today, future];
    setCurrentDate(dateRange);
    getNonExpiredAlerts();
  };

  render() {
    const { match } = this.props;

    return (
      <div id="alerts-map" className="Alerts">
        <Switch>
          <Route exact path={`${match.url}`} component={AlertsHome} />
          <Route path={`${match.url}/new`} component={NewAlert} />
          <Route path={`${match.url}/:id`} component={AlertDetails} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getNonExpiredAlerts() {
    dispatch(getAlerts());
  },
  setCurrentDate(date) {
    dispatch(setExpectedAtFilter(date));
  },
});
export default connect(
  null,
  mapDispatchToProps
)(Alerts);
