import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import IncidentMap from './components/Map';
import IncidentGeneralDetails from './components/IncidentDetails/components/IncidentGeneralDetails';

export default function Incidents({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/map`} component={IncidentMap} />
      <Route path={`${match.url}/details`} component={IncidentGeneralDetails} />
    </Switch>
  );
}

Incidents.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};
