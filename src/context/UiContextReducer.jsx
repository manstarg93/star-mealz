import { useReducer } from "react";


const initialState = {
    showDeleteWarningModal: false,
    showEditModal: false,
    showLoginSignUpModal: false,
    showEditDeleteModal: false,
    showLoginWithEmail: false,
    showLoginPrompt: false,
    showSignupPrompt: false,
    showAddMealModal: false,
    showMealSearch: false,
    finishAddingMeal: false,
    showSignUpWithEmail:false,
    showInitialAddMealModal: false,
    showPasswordReset: false
}

export const actionTypes = {
    SHOW_DELETE_WARNING_MODAL: 'SHOW_DELETE_WARNING_MODAL',
    SHOW_EDIT_MODAL: 'SHOW_EDIT_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SHOW_LOGIN_SIGNUP: 'SHOW_LOGIN_SIGNUP',
    SHOW_EDIT_DELETE_MODAL: 'SHOW_EDIT_DELETE_MODAL',
    SHOW_LOGIN_WITH_EMAIL: 'SHOW_LOGIN_WITH_EMAIL',
SHOW_LOGIN_PROMPT: 'SHOW_LOGIN_PROMPT',
SHOW_SIGNUP_PROMPT: 'SHOW_SIGNUP_PROMPT',
    SHOW_SIGNUP_WITH_EMAIL: 'SHOW_SIGNUP_WITH_EMAIL',
    SHOW_ADD_MEAL_MODAL: 'SHOW_ADD_MEAL_MODAL',
    SHOW_MEAL_SEARCH: 'SHOW_MEAL_SEARCH',
    HIDE_MEAL_SEARCH: 'HIDE_MEAL_SEARCH',
    SHOW_FINISH_ADDING_MEAL: 'SHOW_FINISH_ADDING_MEAL',
    SHOW_INITIAL_ADD_MEAL_MODAL: 'SHOW_INITIAL_ADD_MEAL_MODAL',
    SHOW_PASSWORD_RESET: 'SHOW_PASSWORD_RESET'
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
                        case actionTypes.SHOW_LOGIN_WITH_EMAIL:
            
                        return{
                            ...state,
                            showLoginWithEmail: payload
                        }
                        case actionTypes.SHOW_LOGIN_PROMPT:
            
                        return{
                            ...state,
                            showLoginPrompt: payload
                        }
                        case actionTypes.SHOW_SIGNUP_PROMPT:
            
                        return{
                            ...state,
                            showSignupPrompt: payload
                        }
                        case actionTypes.SHOW_SIGNUP_WITH_EMAIL:
            
                        return{
                            ...state,
                            showSignUpWithEmail: payload
                        }
                        case actionTypes.SHOW_ADD_MEAL_MODAL:
            
                        return{
                            ...state,
                            showAddMealModal: payload
                        }
                        case actionTypes.SHOW_MEAL_SEARCH:
            
                        return{
                            ...state,
                            showMealSearch: payload
                        }
                        case actionTypes.HIDE_MEAL_SEARCH:
            
                        return{
                            ...state,
                            showMealSearch: payload
                        }
                        case actionTypes.SHOW_FINISH_ADDING_MEAL:
            
                        return{
                            ...state,
                            finishAddingMeal: payload
                        }
                        case actionTypes.SHOW_INITIAL_ADD_MEAL_MODAL:
            
                        return{
                            ...state,
                            showInitialAddMealModal: payload
                        }
                        case actionTypes.SHOW_PASSWORD_RESET:
            
                            return{
                                ...state,
                                showPasswordReset: payload
                            }
        
    
                        
    
        default:
            return state
    }

}


export const useUiReducer = () => {

    const [{showDeleteWarningModal,showEditModal,showLoginSignUpModal,showEditDeleteModal,showLoginPrompt,showSignupPrompt,showLoginWithEmail,showSignUpWithEmail,showAddMealModal,showMealSearch,finishAddingMeal,showInitialAddMealModal,showPasswordReset}, dispatch] = useReducer(uiReducer,initialState)


                    //////////////Helper Function

                    const UiToggleHelper = (actionTypes, actionStates) => {

                        
                        dispatch({
                            type: actionTypes,
                            payload: !actionStates,

                        })

               
                    }

                    const showMealSearchHandler =  () => {
                        dispatch({
                            type: actionTypes.SHOW_MEAL_SEARCH,
                            payload: true,

                        })
                    }
                    const hideMealSearchHandler = () => {
                        dispatch({
                            type: actionTypes.HIDE_MEAL_SEARCH,
                            payload: false,

                        })
                    }
        

    return{
showDeleteWarningModal,

showEditModal,

showLoginSignUpModal,

showEditDeleteModal,

showLoginPrompt,showSignupPrompt,showLoginWithEmail,showSignUpWithEmail,
showAddMealModal,showMealSearch,
UiToggleHelper,
showMealSearchHandler,
hideMealSearchHandler,
finishAddingMeal,
showInitialAddMealModal,
showPasswordReset
    }
}