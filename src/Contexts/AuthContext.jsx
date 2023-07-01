import React from 'react'

export const AuthContext = React.createContext()
export const AuthProvider = ({ children }) => {
    const tokenName = 'token'
    const saveUserTokenLocalStorage = (token) => {
        localStorage.setItem(tokenName, token)
    }
    const removeUserTokenLocalStorage = () => {
        localStorage.removeItem(tokenName)
    }
    return (
        <AuthContext.Provider value={{ saveUserTokenLocalStorage, removeUserTokenLocalStorage }}>
            {children}
        </AuthContext.Provider>
    )
}

