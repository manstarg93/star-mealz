import { useReducer } from "react";


const initialState = {
    showDeleteWarningModal: false,
    showEditModal: false,
    showLoginSignUpModal: false
}

const actionTypes = {
    SHOW_DELETE_WARNING_MODAL: 'SHOW_DELETE_WARNING_MODAL',
    SHOW_EDIT_MODAL: 'SHOW_EDIT_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SHOW_LOGIN_SIGNUP: 'SHOW_LOGIN_SIGNUP'
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
                case actionTypes.CLOSE_MODAL:
            
                    return{
                        ...state,
                        showEditModal: payload.closeEditModal,
                        showDeleteWarningModal: payload.closeeDeleteModal,
                        showLoginSignUpModal: payload.closeloginSignUpModal
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

    const [{showDeleteWarningModal,showEditModal,showLoginSignUpModal}, dispatch] = useReducer(uiReducer,initialState)

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

                    const closeModal = () => {
                        const closePayload= {
                            closeEditModal: false,
                            closeeDeleteModal: false,
                            closeloginSignUpModal: false
                        }
                        dispatch({
                            type: actionTypes.CLOSE_MODAL,
                            payload: closePayload
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
closeModal,
showLoginSignUpModal,
showloginSignUpHandler
    }
}