import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = true;

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {...rest}
      render={props => (
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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
