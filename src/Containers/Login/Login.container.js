import React from 'react';

import LoginComponent from './Login.component';
import { Loading } from '../../HOC';
import useLogin from './Login.hook';
import config from './Login.config';

const Login = (props) => {
  const hooks = useLogin(props);

  return <LoginComponent {...hooks} />;
};

Login.displayName = config.container.displayName;

export default Loading(Login);
