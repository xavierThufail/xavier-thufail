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

const setItems = (payload) => ({
  type: 'USER/SET_ITEMS',
  payload
});

const resetUsers = () => ({
  type: 'USER/RESET'
})

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
      login(data);
      navigate('/');
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

const getItems = (url) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = await axios(url, {
        method: 'GET'
      });

      dispatch(setItems(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export default {
  getUser,
  setUser,
  getItems,
  resetUsers
}