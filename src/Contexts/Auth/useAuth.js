import React from "react";

const useAuth = () => {
  const [isLogin, setLogin] = React.useState(false);

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setLogin(true);
  }

  const logout = () => {
    setLogin(false);
    localStorage.removeItem('user');
  };

  React.useEffect(() => {
    const user = localStorage.user;

    if(user) {
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
