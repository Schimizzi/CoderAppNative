import 'react-native-gesture-handler'; // de la docu del Navigator
import DrawerNavigator from './src/presentation/routes/DrawerNavigator';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/store';



export default function App() {
  
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <StackNavigator /> */}
        <DrawerNavigator />
      </Provider>
    </NavigationContainer>
  );
}