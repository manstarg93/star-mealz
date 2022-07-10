import {createContext} from 'react'
import { useUiReducer } from './UiContextReducer'


export const UiContext = createContext({
    showDeleteWarningModal: false,
    showdeletewarninghandler: () => {},
    showEditModal: false,
    showEditModalHandler: false,
    closeModal: () => {},
    showLoginSignUpModal: false,
    showloginSignUpHandler: () => {}
})


export const UiProvider = ({children}) => {
    const {showDeleteWarningModal,showdeletewarninghandler, showEditModalHandler,showEditModal,closeModal,showLoginSignUpModal, showloginSignUpHandler} = useUiReducer()
    const value = {
        showDeleteWarningModal,
        showdeletewarninghandler,
        showEditModalHandler,showEditModal,closeModal,showLoginSignUpModal, showloginSignUpHandler
    }
    return <UiContext.Provider value={value}>{children}</UiContext.Provider>
} 