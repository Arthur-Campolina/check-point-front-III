import React from 'react'

export const AuthContext = React.createContext()
export const AuthProvider = ({ children }) => {
    const tokenName = 'token'
    const [authenticated, setAuthenticated] = React.useState(!!localStorage.getItem(tokenName))
    const saveUserTokenLocalStorage = (token) => {
        localStorage.setItem(tokenName, token)
        setAuthenticated(true)
    }
    const getUserTokenLocalStorage = () => {
        return localStorage.getItem(tokenName)
    }
    const removeUserTokenLocalStorage = () => {
        localStorage.removeItem(tokenName)
        setAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={{ saveUserTokenLocalStorage, getUserTokenLocalStorage, removeUserTokenLocalStorage, authenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(AuthContext)
}