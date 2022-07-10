import { useState } from "react"


export const useModal = () => {

const [showModalContainer, modalContainerdispatch] = useState(false)

    const hideModalHandler = () => {
        modalContainerdispatch(false)
    }

    const showModalHandler = () => {
        modalContainerdispatch(true)
    }
    return{
        hideModalHandler,
        showModalContainer,
        showModalHandler
    }
}