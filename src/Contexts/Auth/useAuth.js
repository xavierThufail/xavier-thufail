import React from "react";

const useAuth = () => {
  const [isLogin, setLogin] = React.useState(false);

  const login = () => {
    setLogin(true);
  }

  const logout = () => {
    setLogin(false);
    localStorage.removeItem('token');
  };

  React.useEffect(() => {
    const token = localStorage.token;

    if(token) {
      setLogin(true);
    }
  }, []);

  return {
    isLogin,
    login,
    logout
  };
};

export default useAuth;
