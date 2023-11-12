import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from "react-native-toast-message";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Admin from './pages/Admin/Admin';
import Products from './pages/Products';
import AddProduct from './pages/Admin/AddProduct';
import ViewProduct from './pages/Admin/ViewProduct';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import EditProduct from './pages/Admin/EditProduct';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Admin"
          component={Admin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name = "AddProduct"
          component = {AddProduct}
          options = {{headerShown:false}}
        />
        <Stack.Screen
          name = "ViewProduct"
          component = {ViewProduct}
          options = {{headerShown:false}}
        />
        <Stack.Screen
          name = "Profile"
          component = {Profile}
          options = {{headerShown:false}}
        />
        <Stack.Screen
          name = "Checkout"
          component = {Checkout}
          options = {{headerShown:false}}
        />
        <Stack.Screen
          name = "EditProduct"
          component = {EditProduct}
          options = {{headerShown:false}}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
