import { useState } from "react"


export const useInput = () => {

    const [input, setInput] = useState('')

    const InputHandler = (event) => {
        setInput(event.target.value)
    }

    return{
        input,
        InputHandler
    }
}