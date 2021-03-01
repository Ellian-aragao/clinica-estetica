import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import home from './pages/home/home';
import horarios from './pages/horarios/horarios';
import login from './pages/login/login';
import servicos from './pages/servicos/servicos';

const Routes = () => (
  <Router>
    <Route path='/' exact component={home} />
    <Route path='/login' exact component={login} />
    <Route path='/servicos' exact component={servicos} />
    <Route path='/horarios' exact component={horarios} />
  </Router>
);

export default Routes;
