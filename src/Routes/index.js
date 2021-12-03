import React from 'react';
import { BrowserRouter, Routes as RouteRD, Route } from 'react-router-dom';

import { LoginContainer } from '../Containers';
import { routePaths } from '../Constants';
import AuthenticatedRoute from './AuthenticatedRoute';
import config from './RouteConfig';

const routeMapper = ({ path, component: Component }, index) => (
  <Route
    key={index}
    path={path}
    element={
      <AuthenticatedRoute>
        <Component />
      </AuthenticatedRoute>
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <RouteRD>
      <Route
        path={routePaths.LOGIN}
        element={<LoginContainer />}
      />
      {config.routeConfigs.map(routeMapper)}
    </RouteRD>
  </BrowserRouter>
);

export default Routes;
