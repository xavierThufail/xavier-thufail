import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '../Contexts/Auth';
import { routePaths } from '../Constants';

const AuthenticatedRoute = ({ children: Children }) => {
  const { isLogin } = useAuthContext();
  const location = useLocation();

  if(!isLogin) {
    return <Navigate to={routePaths.LOGIN} state={{ from: location }} />;
  }

  return Children;
};

export default AuthenticatedRoute;
