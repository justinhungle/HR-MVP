/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-spacing */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation.jsx';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { getPack } from '../shared/api';

import * as ROUTES from './routes';

export const App = () => {
  const [pack, setPack] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPack()
      .then((results) => {
        setPack(results.data);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  if (loading) return <img className="loading-image" src="./img/Loading.jpeg" alt="Loading" />;
  return (
    <Router>
      <h1 className="title">
        <span className="title-gradient">Pack Opener</span>
      </h1>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Dashboard pack={pack} setPack={setPack} />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.LOGOUT} element={<div className="logout-container">You have been logged out</div>} />
      </Routes>
    </Router>
  );
};
