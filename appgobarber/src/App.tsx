import React from 'react';
import {View, StatusBar, Text} from 'react-native';

import SignIn from './SignIn';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{flex: 1, backgroundColor: '#312e38'}}>
        <Routes />
      </View>
    </>
  );
};

export default App;
