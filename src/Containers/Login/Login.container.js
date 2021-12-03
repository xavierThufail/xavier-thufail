import React from 'react';

import LoginComponent from './Login.component';
import config from './Login.config';

const Login = (props) => {
  return <LoginComponent {...props} />;
};

Login.displayName = config.container.displayName;

export default Login;
