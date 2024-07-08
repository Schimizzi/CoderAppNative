import 'react-native-gesture-handler'; // de la docu del Navigator
import DrawerNavigator from './src/presentation/routes/DrawerNavigator';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AuthenStack from "./src/presentation/routes/AuthenStack";
import { useSelector } from 'react-redux'


export default function App() {
  //const { user } = useSelector((state) => state.auth.value) FALLA
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <StackNavigator /> */}
        
        { true ? <DrawerNavigator /> : <AuthenStack />}
      </Provider>
    </NavigationContainer>
  );
}