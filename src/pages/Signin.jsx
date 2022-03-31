import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import {useContext} from "react"
import {actionTypes, AppContext } from '../Context/AppContextProvider'

export const Signin = () => {
  const {dispatch}=useContext(AppContext)
  return (
    <View>
      <Button title="Sign in" onPress={()=>dispatch({type: actionTypes.LOGIN_SUCCESS,payload:{}})}/>
    </View>
  )
}

