/**
 * Setup Routes
 */
import React from 'react';
import { Switch, Route } from 'react-router';

import Login from './components/login';

const Routes = () => (
  <Switch>
      <Route exact path="/" component={Login} />
  </Switch>
)

export default Routes;
