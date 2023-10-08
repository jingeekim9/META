import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName= 'Detail'>
=======
      <Stack.Navigator initialRouteName='Home'>
>>>>>>> ba1deeb15ef88107e906e5dd255e6f80ee45d430
        <Stack.Screen
        name="Login"
        component={Login} 
        options = {{
          headerShown: false
        }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name = "Detail"
          component = {Detail}
          options = {{headerShown:false}}
        />
      </Stack.Navigator>
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
