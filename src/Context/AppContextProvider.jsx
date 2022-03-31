import React from 'react'
import { useReducer } from 'react';

export const AppContext=React.createContext();

export const actionTypes={
    LOGIN_SUCCESS:"LOGIN_SUCESS",
    LOGOUT:"LOGOUT"
}

const initialState={
    auth:false
}

const Reducer=(state,action)=>{

    switch(action.type){
        case actionTypes.LOGIN_SUCCESS:{
            return {
                ...state,auth:true
            }
        }
        case actionTypes.LOGOUT:{
            return {
                ...state,auth:false
            }
        }
    }

}

export const AppContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,initialState)
  return (
    <AppContext.Provider value={{state,dispatch}}>
        {children}
    </AppContext.Provider>
  )
}
