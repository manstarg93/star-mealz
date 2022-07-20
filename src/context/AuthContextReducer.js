import { useReducer } from "react"
import { getUserInfo, userInfo } from "../util/firebase.utils"


const initialState = {
auth: null,
userId: null,
isLoggedIn: false,
userData: null
}

export const useAuthReducer = () =>{

    const actionTypes = {
        SET_AUTH: 'SET_AUTH',
        SET_LOGOUT: 'SET_LOGOUT',
        SET_USER_DATA: 'SET_USER_DATA'
    }

    const authReducer = (state, action) => {
            const {type, payload} = action
        switch (type) {
            case actionTypes.SET_AUTH:
                return{
                    ...state,
                    auth: payload.accessToken,
                    userId: payload.userId,
                    isLoggedIn: payload.isLoggedIn
                }
                case actionTypes.SET_LOGOUT:
                return{
                    ...state,
                    auth: payload.accessToken,
                    userId: payload.userId,
                    userData: payload.userDatas

                }
                case actionTypes.SET_USER_DATA:

                return{
                    ...state,
                    userData: payload
                }
        
            default:
                return state
        }
    }


    const [{auth,userId,isLoggedIn,userData}, dispatch] = useReducer(authReducer, initialState)

    const setAuthHandler = (auth) => {

        if(auth === null) {
            const user = {
                accessToken: null,
                userId: null,
                userDatas: null
            }
        
            dispatch({
                type: actionTypes.SET_AUTH,
                payload: user
            })
        }

        const user = {
            accessToken: auth.accessToken,
            userId: auth.uid,
            isLoggedIn: true
        }
        dispatch({
            type: actionTypes.SET_AUTH,
            payload: user
        })
        localStorage.setItem('auth',JSON.stringify(auth))
      

    }
    const setLogoutHandler = () => {
localStorage.removeItem('auth')

        const user = {
            accessToken: null,
            userId: null,
            userDatas: null
        }
    
        dispatch({
            type: actionTypes.SET_LOGOUT,
            payload: user
        })
    }

    const setUserData = async(userId) => {

        await getUserInfo(userId).then(res=>{
           if(!userInfo) return

                dispatch({
                    type: actionTypes.SET_USER_DATA,
                    payload: userInfo
                })
            
            
        })
    }

    return{
    auth,
    setAuthHandler,
    setLogoutHandler,
    userId,
    isLoggedIn,
    userData,
    setUserData
    }
}



