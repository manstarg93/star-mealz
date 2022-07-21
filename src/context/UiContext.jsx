import {createContext} from 'react'
import { useUiReducer } from './UiContextReducer'


export const UiContext = createContext({
    showDeleteWarningModal: false,
    showdeletewarninghandler: () => {},
    showEditModal: false,
    showEditModalHandler: false,
    closeModal: () => {},
    showLoginSignUpModal: false,
    showloginSignUpHandler: () => {},
    showEditDeleteModalHandler: () => {},
    showEditDeleteModal: false
})


export const UiProvider = ({children}) => {
    const {showDeleteWarningModal,showdeletewarninghandler, showEditModalHandler,showEditModal,closeModal,showLoginSignUpModal, showloginSignUpHandler,showEditDeleteModalHandler,showEditDeleteModal} = useUiReducer()
    const value = {
        showDeleteWarningModal,
        showdeletewarninghandler,
        showEditModalHandler,showEditModal,closeModal,showLoginSignUpModal, showloginSignUpHandler,showEditDeleteModalHandler,showEditDeleteModal
    }
    return <UiContext.Provider value={value}>{children}</UiContext.Provider>
} 