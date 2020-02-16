import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import SinglePage from '../pages/SinglePage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SinglePage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
