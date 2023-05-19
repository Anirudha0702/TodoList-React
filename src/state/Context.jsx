import React, { createContext, useReducer } from 'react'
import Reducer from "./Reducer"
const init_state= JSON.parse(localStorage.getItem("Tasks"))||[];
export const Context=createContext(init_state);

export const ContextProvider = ({children}) => {
    const[state,dispatch]=useReducer(Reducer,init_state)
  return (
    <Context.Provider value={
      {
        task:state,
        dispatch
      }
      }>
        {children}
    </Context.Provider>
  )
}
