import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import About from '../pages/About';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
