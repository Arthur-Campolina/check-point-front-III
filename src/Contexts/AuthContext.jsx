import React from 'react'

export const AuthContext = React.createContext()
export const AuthProvider = ({ children }) => {
    const tokenName = 'token'
    const saveUserTokenLocalStorage = (token) => {
        localStorage.setItem(tokenName, token)
    }
    const getUserTokenLocalStorage = () => {
        localStorage.setItem(tokenName)
    }
    const removeUserTokenLocalStorage = () => {
        localStorage.removeItem(tokenName)
    }
    return (
        <AuthContext.Provider value={{ saveUserTokenLocalStorage, getUserTokenLocalStorage, removeUserTokenLocalStorage }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(AuthContext)
}