import React from "react";

export const AuthContext = React.createContext();

export const AuthContext = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const login = () => {
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    };

    return(
        <AuthContext.Provider value={{login, logout, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}