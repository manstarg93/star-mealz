import React, { useContext } from 'react'

import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'
import { useGoogleAuth } from '../../hooks/googleAuth'

import AuthPrompt from './AuthPrompt'

const LoginPrompt = () => {

    const {googleAuth} = useGoogleAuth()
const {showLoginPrompt,UiToggleHelper,showLoginWithEmail} = useContext(UiContext)

    const emailAuthHandler = () => {
        UiToggleHelper(actionTypes.SHOW_LOGIN_WITH_EMAIL,showLoginWithEmail)
        UiToggleHelper(actionTypes.SHOW_LOGIN_PROMPT,showLoginPrompt)
    }

    const googleAuthHandler = async() => {

        googleAuth() 
        UiToggleHelper(actionTypes.SHOW_LOGIN_PROMPT,showLoginPrompt)

    }


    const closeAuthHandler = () => {
        UiToggleHelper(actionTypes.SHOW_LOGIN_PROMPT,showLoginPrompt)
    }


  return (
    <AuthPrompt show={showLoginPrompt} close={closeAuthHandler}
    title='Log in' 
    emailAuthClicked={emailAuthHandler}  
    googleAuthClicked={googleAuthHandler} 
    />
  )
}

export default LoginPrompt