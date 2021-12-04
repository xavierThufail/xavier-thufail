import axios from "axios";

import { env } from '../../Constants'

const setUser = (payload) => ({
  type: 'USER/SET_USER',
  payload
});

const login = (payload) => ({
  type: 'USER/LOGIN',
  payload
});

const setLoading = (payload) => ({
  type: 'USER/SET_LOADING',
  payload
});

const setError = (payload) => ({
  type: 'USER/SET_ERROR',
  payload
});

const getUser = ({ code, navigate, login }) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = await axios(env.PROXY_URL, {
        method: 'POST',
        data: {
          code
        }
      });

      dispatch(setUser(data));
      login(code);
      navigate('/');
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export default {
  getUser
}