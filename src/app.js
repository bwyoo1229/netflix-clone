import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import { ROUTES } from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const user = useAuthListener();

  return (
    <BrowserRouter basename="/netflix-clone/">
      <Switch>
        {/* Home */}
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>

        {/* SignIn */}
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>

        {/* SignUp */}
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>

        {/* Browse */}
        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <div>404 Error: Page Not Found</div>
      </Switch>
    </BrowserRouter>
  );
}
