import React from "react";

const createContext = () => {
  const ctx = React.createContext({});

  const useCtx = () => {
    const context = React.useContext(ctx);

    if (!context) {
      throw new Error('useCtx must be inside a Provider with a value');
    };

    return context;
  };

  return [useCtx, ctx.Provider]
};

export default createContext;
