import { createContext, useContext, useState } from "react";


export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    // setInterval( () => setNumber(number+1), 10000)

    // const valueTOBeShared = {number, isAuthenticated, setAuthenticated}

    function login(username, password) {
        if(username === "woojin" && password === "dtd") {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }
    return (
        <AuthContext.Provider value={ {number, isAuthenticated, setAuthenticated} }>
            {children}
        </AuthContext.Provider>
    )
}

