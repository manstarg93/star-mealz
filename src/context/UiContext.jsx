import {createContext} from 'react'
import { useUiReducer } from './UiContextReducer'


export const UiContext = createContext({
    showDeleteWarningModal: false,
    showdeletewarninghandler: () => {},
    showEditModal: false,
    showEditModalHandler: false,
    closeModal: () => {}
})


export const UiProvider = ({children}) => {
    const {showDeleteWarningModal,showdeletewarninghandler, showEditModalHandler,showEditModal,closeModal} = useUiReducer()
    const value = {
        showDeleteWarningModal,
        showdeletewarninghandler,
        showEditModalHandler,showEditModal,closeModal
    }
    return <UiContext.Provider value={value}>{children}</UiContext.Provider>
} 