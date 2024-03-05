import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({childern}) => {
    [darkMode, setDarkMode] = useState(
        JSON.parse(sessionStorage.getItem('darkMode'))|| false);

        const toggle = () =>{
            setDarkMode(!darkMode);
        }

    useEffect(()=>{
       sessionStorage.setItem('darkMode',darkMode);
    },[darkMode])

    return(<DarkModeContext.Provider value={{darkMode, toggle}}>{childern}</DarkModeContext.Provider>);
}