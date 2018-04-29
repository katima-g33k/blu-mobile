import React from 'react';
import { Provider } from 'react-redux';

import Router from './router/Router';
import store from './reducers/store';

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
