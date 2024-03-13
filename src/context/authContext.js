import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = () => {
        setCurrentUser({
            id:1,
            userName: 'Anil Rawat',
            userProfile:'https://images.pexels.com/photos/5477509/pexels-photo-5477509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        });
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    );
};