import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native'
import { StackNavigator } from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import HomeScreen from '../screens/home/HomeScreen';
import GlobalStyles from '../styles/GlobalStyles';
import GlobalColors from '../styles/GlobalColors';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import OffersScreen from '../screens/productos/OffersScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import CartScreen from '../screens/carrito/CartScreen';

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  
  

  return (
    <Drawer.Navigator 
      initialRouteName="StackNavigator"
      screenOptions={{
        headerShown: false,
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
      <Drawer.Screen name="Categorias" component={CategoriesScreen} />
      <Drawer.Screen name="Ofertas" component={OffersScreen} />
      <Drawer.Screen name="Ajustes" component={SettingsScreen} />
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Carrito" component={CartScreen} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator
