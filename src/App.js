import React from 'react';

import AppContextProvider from './Contexts';
import Routes from './Routes';

const App = () => {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
