import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/productos/ProductsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import ProductScreen from '../screens/productos/ProductScreen';
import GlobalColors from '../styles/GlobalColors';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
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
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{ title: 'Categorririririri' }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}