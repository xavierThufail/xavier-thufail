import React from "react";

import createContext from '../createContext';
import useAuth from "./useAuth";

const [useAuthContext, Provider] = createContext();

const AuthProvider = ({ children }) => {
  const hooks = useAuth();

  return <Provider value={{...hooks}}>{children}</Provider>
};

export {
  useAuthContext,
  AuthProvider
};
