import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages';
import { ROUTES } from './constants/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </BrowserRouter>
  );
}
