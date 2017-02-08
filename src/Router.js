import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Ask from './components/Ask';
import Result from './components/Result';
import Scan from './components/Scan';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="scan">
        <Scene key="scanDefault" component={Scan} hideNavBar />
        <Scene key="result" component={Result} title="Result" />
      </Scene>
      <Scene key="ask">
        <Scene key="askDefault" component={Ask} initial hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
