import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageHome from './pages/home/home';
import PageHorarios from './pages/horarios/horarios';
import PageLogin from './pages/login/login';
import PageServicos from './pages/servicos/servicos';

const Routes = () => (
  <Router>
    <Route path='/' exact component={PageHome} />
    <Route path='/login' exact component={PageLogin} />
    <Route path='/servicos' exact component={PageServicos} />
    <Route path='/horarios' exact component={PageHorarios} />
  </Router>
);

export default Routes;
