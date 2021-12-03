import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducers } from './Reducers';

const store = createStore(
  rootReducers,
  compose(applyMiddleware(thunk))
);

export default store;
