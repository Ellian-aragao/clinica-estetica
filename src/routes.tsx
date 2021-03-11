import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { RoutesInfo } from './routes.const';

const Routes = () => (
  <Router>
    {RoutesInfo.map((route) => (
      <Route key={route.id} path={route.url} exact component={route.component} />
    ))}
  </Router>
);

export default Routes;
