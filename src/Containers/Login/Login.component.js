import React from "react";

import config from './Login.config';
import styles from "./Login.style";
import images from '../../Assets';
import { env } from '../../Constants';

const _renderLogin = () => (
  <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${env.CLIENT_ID}`} style={styles.login} >
    <span>Click to Login</span>
    <img src={images.logo} style={styles.logo} />
  </a>
);

const LoginComponent = () => (
  <div style={styles.container}>
    {_renderLogin()}
  </div>
);

LoginComponent.displayName = config.component.displayName;

export default LoginComponent;
