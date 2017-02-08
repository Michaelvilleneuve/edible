import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Ask from './components/Ask';
import Scan from './components/Scan';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="ask">
        <Scene key="main" component={Ask} initial hideNavBar />
      </Scene>
      <Scene key="main">
        <Scene key="default" component={Scan} hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
