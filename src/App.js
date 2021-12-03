import React from 'react';
import { Provider } from 'react-redux';

import AppContextProvider from './Contexts';
import Routes from './Routes';
import store from './Store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </Provider>
  );
}

export default App;
