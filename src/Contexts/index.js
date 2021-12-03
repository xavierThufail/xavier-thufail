import React from 'react';

import { AuthProvider } from './Auth';

const AppContextProvider = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

export default AppContextProvider;
