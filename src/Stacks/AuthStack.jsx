import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Welcome } from '../pages/Welcome';
import { Signin } from '../pages/Signin';
import { Signup } from '../pages/Signup';

const AuthStack=createStackNavigator();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={Welcome} option={{title: "Welcome!"}}/>

      <AuthStack.Screen name="Signin" component={Signin} option={{title: "Signin!"}}/>

      <AuthStack.Screen name="Signup" component={Signup} option={{title: "Signup!"}}/>
      
    </AuthStack.Navigator>
  )
}
