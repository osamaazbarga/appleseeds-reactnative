// export const darkMode=(dark)=>({
//     type:DARK_TOGGLE,
//     payload:dark
// })

import React, { useState,useEffect } from 'react';
import {LOGIN,LOGOUT,DARK_TOGGLE} from './userTypes'
// const [isDarkTheme, setIsDarkTheme] = useState(false)
const toggleTheme = () => {
    
    // setIsDarkTheme(!isDarkTheme)
    return true
  }
  

export const login=()=>({
    type:LOGIN,
    payload:'osama'
})

export const darkMode=()=>({
    type:DARK_TOGGLE,
    payload:'toggleTheme()'
})

export const logout=()=>({
    type:LOGOUT,
    payload:log
})