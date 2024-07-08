import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../screens/profile/ProfileScreen"
import Signup from '../screens/profile/SignupSreen'


const Stack = createNativeStackNavigator()

const AuthenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Signup} name="Signup" />
    </Stack.Navigator>
  );
}

export default AuthenStack