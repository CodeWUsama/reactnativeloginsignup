import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Signup from './screens/signup';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar backgroundColor="red" />
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />

        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

export default App;