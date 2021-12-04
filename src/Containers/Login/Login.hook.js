import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useAuthContext } from '../../Contexts/Auth';
import allAction from '../../Store/Actions';

const useLogin = ({ setLoading }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.user);

  const { login, isLogin } = useAuthContext();

  React.useEffect(() => {
    setLoading(loading);
  }, [loading]);

  React.useEffect(() => {
    let code;

    location.search.slice(1).split('&').forEach(query => {
      const [key, value] = query.split('=');

      if (key === 'code') {
        code = value
      };
    });

    if (code) {
      dispatch(allAction.user.getUser({ navigate, login, code }));
    };

    if (isLogin) {
      navigate('/')
    }
  }, []);

  return {};
};

export default useLogin;
