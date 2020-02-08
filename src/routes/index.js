import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Example from '../pages/Example';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Example} />
    </Switch>
  );
}
