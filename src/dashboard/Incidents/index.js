import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import IncidentMap from './components/Map';
import NewIncidentSider from './components/NewIncidentSIder';
import IncidentGeneral from './components/IncidentDetails/components/IncidentGeneral';

export default function Incidents({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/map`} component={IncidentMap} />
      <Route path={`${match.url}/new`} component={NewIncidentSider} />
      <Route path={`${match.url}/details`} component={IncidentGeneral} />
    </Switch>
  );
}

Incidents.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};
