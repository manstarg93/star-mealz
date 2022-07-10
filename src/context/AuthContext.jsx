import { createContext } from "react";
import { useAuthReducer } from "./AuthContextReducer";


export const AuthContext = createContext({
auth: null,
setAuthHandler: () => {},
setLogoutHandler: () => {}
})

export const AuthProvider = ({children}) => {

    const {auth, setAuthHandler,setLogoutHandler}  = useAuthReducer()
    const value = {
        auth,
        setAuthHandler,
        setLogoutHandler
    }
    return <AuthContext.Provider value={value}>
{children}
    </AuthContext.Provider>
}