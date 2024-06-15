import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/productos/ProductsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import OffersScreen from '../screens/productos/OffersScreen';
import ProductScreen from '../screens/productos/ProductsScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Offers" component={OffersScreen} />      
    </Stack.Navigator>
  );
}