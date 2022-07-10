import { useReducer } from "react"


const initialState = {
auth: null,

}

export const useAuthReducer = () =>{

    const actionTypes = {
        SET_AUTH: 'SET_AUTH',
        SET_LOGOUT: 'SET_LOGOUT'
    }

    const authReducer = (state, action) => {
            const {type, payload} = action
        switch (type) {
            case actionTypes.SET_AUTH:
                return{
                    ...state,
                    auth: payload
                }
                case actionTypes.SET_LOGOUT:
                return{
                    ...state,
                    auth: payload
                }
        
            default:
                return state
        }
    }


    const [{auth}, dispatch] = useReducer(authReducer, initialState)


    const setAuthHandler = (auth) => {

        dispatch({
            type: actionTypes.SET_AUTH,
            payload: auth
        })
    }
    const setLogoutHandler = () => {

        dispatch({
            type: actionTypes.SET_AUTH,
            payload: null
        })
    }
    return{
    auth,
    setAuthHandler,
    setLogoutHandler
    }
}



