import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from '../store';

import Auth from '../pages/_layouts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const { signed } = store.getState().auth;

  // const signed = true;
  //
  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }

  const Layout = Auth;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
