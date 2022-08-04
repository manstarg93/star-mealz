import React, { useContext } from 'react'

import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'
import { useGoogleAuth } from '../../hooks/googleAuth'

import AuthPrompt from './AuthPrompt'

const SignUpPrompt = () => {

    const {googleAuth} = useGoogleAuth()
const {showSignupPrompt,UiToggleHelper,showSignUpWithEmail} = useContext(UiContext)

    const emailAuthHandler = () => {
        UiToggleHelper(actionTypes.SHOW_SIGNUP_WITH_EMAIL,showSignUpWithEmail)
        UiToggleHelper(actionTypes.SHOW_SIGNUP_PROMPT,showSignupPrompt)
    }

    const googleAuthHandler = async() => {

        googleAuth() 
        UiToggleHelper(actionTypes.SHOW_SIGNUP_PROMPT,showSignupPrompt)

    }


    const closeAuthHandler = () => {
        UiToggleHelper(actionTypes.SHOW_SIGNUP_PROMPT,showSignupPrompt)
    }


  return (
    <AuthPrompt 
    show={showSignupPrompt} close={closeAuthHandler}
    title='Sign up' 
    emailAuthClicked={emailAuthHandler}  
    googleAuthClicked={googleAuthHandler} 
    />
  )
}

export default SignUpPrompt