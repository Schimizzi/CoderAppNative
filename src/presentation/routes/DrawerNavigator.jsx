import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native'
import { StackNavigator } from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import HomeScreen from '../screens/home/HomeScreen';
import GlobalStyles from '../styles/GlobalStyles';
import GlobalColors from '../styles/GlobalColors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{
        /* headerShown: false, */ 
        drawerType: 'slide',
        drawerInactiveTintColor: 'black',
        drawerActiveTintColor: 'white',
        drawerItemStyle: {
          backgroundColor: GlobalColors.primary,
          borderRadius: 5,
          padding: 5,
          marginTop: 20,
        }
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator
