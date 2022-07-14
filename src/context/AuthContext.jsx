import { createContext } from "react";
import { useAuthReducer } from "./AuthContextReducer";


export const AuthContext = createContext({
auth: null,
userId: null,
isLoggedIn: false,
setAuthHandler: () => {},
setLogoutHandler: () => {},
userData: null,
setUserData: () => {}
})

export const AuthProvider = ({children}) => {

    const {auth, setAuthHandler,setLogoutHandler,userId,isLoggedIn,userData,setUserData}  = useAuthReducer()
    const value = {
        auth,
        setAuthHandler,
        setLogoutHandler,
        userId,
        isLoggedIn,
        userData,
        setUserData
    }
    return <AuthContext.Provider value={value}>
{children}
    </AuthContext.Provider>
}