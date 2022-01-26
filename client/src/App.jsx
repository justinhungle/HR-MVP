/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-spacing */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation.jsx';
// import LandingPage from '../Landing';
// import SignUpPage from '../SignUp';
// import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
import { PackOpener } from './components/PackOpener.jsx';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

import * as ROUTES from './routes';

export const App = () => {
  return (
    <Router>
      <h1 className="title">
        <span className="title-gradient">Pack Opener</span>
      </h1>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path={ROUTES.HOME} element={<PackOpener />} />
      </Routes>
    </Router>
  );
};
