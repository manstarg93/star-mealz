import { useState } from "react"

export const useInput = () => {

    const [loginRegisterInput, dispatchInput] = useState('')
  

    const LoginRegisterOnChangeHandler = (event) => {
        dispatchInput(event.target.value)
    
    }

    return{
        LoginRegisterOnChangeHandler,
        loginRegisterInput
    }
}