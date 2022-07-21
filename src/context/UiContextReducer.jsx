import { useReducer } from "react";


const initialState = {
    showDeleteWarningModal: false,
    showEditModal: false,
    showLoginSignUpModal: false,
    showEditDeleteModal: false
}

const actionTypes = {
    SHOW_DELETE_WARNING_MODAL: 'SHOW_DELETE_WARNING_MODAL',
    SHOW_EDIT_MODAL: 'SHOW_EDIT_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SHOW_LOGIN_SIGNUP: 'SHOW_LOGIN_SIGNUP',
    SHOW_EDIT_DELETE_MODAL: 'SHOW_EDIT_DELETE_MODAL'
}

const uiReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case actionTypes.SHOW_DELETE_WARNING_MODAL:
            
            return{
                ...state,
                showDeleteWarningModal: payload
            }
            case actionTypes.SHOW_EDIT_MODAL:
            
                return{
                    ...state,
                    showEditModal: payload
                }
                case actionTypes.SHOW_EDIT_DELETE_MODAL:
            
                    return{
                        ...state,
                        showEditDeleteModal: payload
                    }
            
                    case actionTypes.SHOW_LOGIN_SIGNUP:
            
                        return{
                            ...state,
                            showLoginSignUpModal: payload
                        }
    
        default:
            return state
    }

}


export const useUiReducer = () => {

    const [{showDeleteWarningModal,showEditModal,showLoginSignUpModal,showEditDeleteModal}, dispatch] = useReducer(uiReducer,initialState)

    const showdeletewarninghandler = () => {
        dispatch({
            type: actionTypes.SHOW_DELETE_WARNING_MODAL,
            payload: !showDeleteWarningModal
        })
            }
            const showEditModalHandler = () => {
                dispatch({
                    type: actionTypes.SHOW_EDIT_MODAL,
                    payload: !showEditModal
                })
                    }
                    const showEditDeleteModalHandler = () => {
                        dispatch({
                            type: actionTypes.SHOW_EDIT_DELETE_MODAL,
                            payload: !showEditDeleteModal
                        })
                            }

          
                    const showloginSignUpHandler = () => {


                        dispatch({
                            type: actionTypes.SHOW_LOGIN_SIGNUP,
                            payload: !showLoginSignUpModal
                        })
                    }
    return{
showDeleteWarningModal,
showdeletewarninghandler,
showEditModalHandler,
showEditModal,

showLoginSignUpModal,
showloginSignUpHandler,
showEditDeleteModal,
showEditDeleteModalHandler
    }
}