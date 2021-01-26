import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import { ROUTES } from './constants/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
    </BrowserRouter>
  );
}
