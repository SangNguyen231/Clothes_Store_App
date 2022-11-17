import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/modules/auth/Login';
import Register from './src/modules/auth/Register';
import Desktop from './src/modules/desktop/Desktop';
import Home from './src/modules/home/Home';
import Main from './src/modules/main/Main';
import Detail from './src/modules/detailProduct/Detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Desktop' component={Desktop}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}></Stack.Screen>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Main' component={Main}></Stack.Screen>
        <Stack.Screen name='Detail' component={Detail}></Stack.Screen>
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
