import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

import AccountContainer from '../containers/AccountContainer';
import CopyListContainer from '../containers/CopyListContainer';
import ItemViewcontainer from '../containers/ItemViewContainer';
import LoginContainer from '../containers/LoginContainer';

export default () => (
  <Router backAndroidHandler={Actions.pop}>
    <Scene key="root">
      <Scene key="login" component={LoginContainer} initial />
      <Scene key="account" component={AccountContainer} title="Account" />
      <Scene key="copyList" component={CopyListContainer} title="Copy List" />
      <Scene key="itemView" component={ItemViewcontainer} title="Item View" />
    </Scene>
  </Router>
);
