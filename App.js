import 'react-native-gesture-handler'; // de la docu del Navigator
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StackNavigator } from './src/presentation/routes/StackNavigator';
import DrawerNavigator from './src/presentation/routes/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>

{/*       <StackNavigator />
 */}
      <DrawerNavigator />

    </NavigationContainer>
  );
}