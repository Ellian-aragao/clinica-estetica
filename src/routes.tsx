import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import pageHome from './pages/home/home';
import pageHorarios from './pages/horarios/horarios';
import pageLogin from './pages/login/login';
import pageServicos from './pages/servicos/servicos';

const Routes = () => (
  <Router>
    <Route path='/' exact component={pageHome} />
    <Route path='/login' exact component={pageLogin} />
    <Route path='/servicos' exact component={pageServicos} />
    <Route path='/horarios' exact component={pageHorarios} />
  </Router>
);

export default Routes;
