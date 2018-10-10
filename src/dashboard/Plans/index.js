import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Activities from './components/Activities';
import PlanList from './components/PlanList';

/**
 * Plans Base Layout component
 * This layout have a router for plans view and action view
 * and will be used during planning phase
 *
 * @function
 * @name Plans
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Plans({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/index`} component={PlanList} />
      <Route path={`${match.url}/plan/activities`} component={Activities} />
    </Switch>
  );
}

/* props validation */
Plans.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};
