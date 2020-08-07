import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {  
  LoginScreen,
  SwitchScreen,
  HomeScreen,
  RegistrationScreen,
  LoginMobileScreen,
} from './src/screens'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen 
              name="Switch"
              component={SwitchScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="LoginMobile"
              component={LoginMobileScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="Registration" 
              component={RegistrationScreen} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}