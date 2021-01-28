import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

// Recommended authentication of React-Router
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    // if there is user redirect to loggedInPath and if not render children
    <Route
      {...rest}
      render={() =>
        user ? <Redirect to={{ pathname: loggedInPath }} /> : children
      }
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            // state is for passing information. In this case to keep the history.
            to={{ pathname: ROUTES.SIGN_IN, state: { from: location } }}
          />
        )
      }
    />
  );
}
