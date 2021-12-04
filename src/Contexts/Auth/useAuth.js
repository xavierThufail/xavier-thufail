import React from "react";
import { useDispatch } from "react-redux";

import allAction from "../../Store/Actions";

const useAuth = () => {
  const [isLogin, setLogin] = React.useState(false);
  const dispatch = useDispatch();

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setLogin(true);
  }

  const logout = () => {
    setLogin(false);
    localStorage.removeItem('user');
    dispatch(allAction.user.resetUsers())
  };
  
  React.useEffect(() => {
    const user = localStorage.user;
    
    if(user) {
      setLogin(true);
      dispatch(allAction.user.setUser(JSON.parse(user)))
    }
  }, []);

  return {
    isLogin,
    login,
    logout
  };
};

export default useAuth;
