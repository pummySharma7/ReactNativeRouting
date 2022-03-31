import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackComponent } from './AuthStack';
import 'react-native-gesture-handler';
import { useContext } from 'react';
import {AppContext} from "../Context/AppContextProvider";
import { Profile } from '../pages/Dashboard/Profile';
const RootStack = createNativeStackNavigator();

export const RootApplication=()=>{
  const {state,dispatch} =useContext(AppContext);
  return (
    <RootStack.Navigator screenOptions={{headerShown:false}}>
      {
        state.auth?
        <RootStack.Screen name="Auth" component={Profile} />
        :
        <RootStack.Screen name="Auth" component={AuthStackComponent} />
      }
    </RootStack.Navigator>
  )
}