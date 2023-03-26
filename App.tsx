import 'react-native-gesture-handler';
import * as React from 'react';
import {store} from './src/Store/store';
import {Provider} from 'react-redux';
import Router from './Router';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/Theme/theme';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
