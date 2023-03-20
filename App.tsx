import * as React from 'react';
import {store} from './src/Store/store';
import {Provider} from 'react-redux';
import Router from './Router';
import SplashScreen from 'react-native-splash-screen';
import {
  NavigationContainer,
  ParamListBase,
  TypedNavigator,
  StackNavigationState,
  TabNavigationState,
} from '@react-navigation/native';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
