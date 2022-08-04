import {createContext} from 'react'
import { useUiReducer } from './UiContextReducer'


export const UiContext = createContext({
    showDeleteWarningModal: false,
    showAddMealModal: false,
    showMealSearch: false,
    showEditModal: false,
    showEditModalHandler: false,
    
    showLoginSignUpModal: false,
    finishAddingMeal: false,
    showEditDeleteModal: false,
showInitialAddMealModal: false,
    showLoginWithEmail: false,
    showPasswordReset: false,
    showLoginPrompt: false,
    showSignupPrompt: false,
    showMealSearchHandler: () => {},
    hideMealSearchHandler: () => {},
    showSignUpWithEmail:false,
showSignUp: false,
UiToggleHelper: () => {}
})


export const UiProvider = ({children}) => {
    const {showDeleteWarningModal,showEditModal,closeModal,showLoginSignUpModal, showEditDeleteModal,showLoginPrompt, showSignupPrompt, showSignUpWithEmail, showLoginWithEmail,UiToggleHelper,showAddMealModal,showMealSearch, finishAddingMeal,showMealSearchHandler,hideMealSearchHandler,showInitialAddMealModal,showPasswordReset} = useUiReducer()
    const value = {
        showDeleteWarningModal,
       showEditModal,closeModal,showLoginSignUpModal,showEditDeleteModal, showLoginPrompt, showSignupPrompt,showSignUpWithEmail, showLoginWithEmail,UiToggleHelper,showAddMealModal,showMealSearch,showMealSearchHandler,hideMealSearchHandler,finishAddingMeal,showInitialAddMealModal,showPasswordReset
    }
    return <UiContext.Provider value={value}>{children}</UiContext.Provider>
} 