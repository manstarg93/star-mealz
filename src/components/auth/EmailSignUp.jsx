import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'
import { useInput } from '../../hooks/inputHook'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../util/firebase.utils'

import EmailAuth from './EmailAuth'
import { ErrorMessage } from './EmailAuth.styles'
import { EmailInput, EmailSignUpButton, EmailSignUpFormContainer, EmailSignUpInputContainer } from './EmailSignUp.styles'

const EmailSignUp = () => {

    const {showSignUpWithEmail, UiToggleHelper,showSignupPrompt} = useContext(UiContext)
    const {setAuthHandler,setUserData} = useContext(AuthContext)
    const {input: email, InputHandler:emailHandler} = useInput()
    const {input: password, InputHandler: passwordHandler} = useInput()
    const {input: passwordRepeat, InputHandler: passwordRepeatHandler} = useInput()
    const {input: displayNameInput, InputHandler: displayNameInputHandler} = useInput()

    const [errorMessage, setErrorMessage] = useState('')

    const submitHandler = async(event) => {
        event.preventDefault()

        if(password !== passwordRepeat){
            setErrorMessage('password doesnt match')
            return
          }

try {
 await createAuthUserWithEmailAndPassword(email, password).then(({user})=>{
 createUserDocumentFromAuth(user,displayNameInput).then(() => {
 
    setAuthHandler(user)
    setUserData(user.uid)

    UiToggleHelper(actionTypes.SHOW_SIGNUP_WITH_EMAIL, showSignUpWithEmail)

   })
  })


.catch(error => {
})


} catch (error) {
  if(error.code === 'auth/email-already-in-use'){
    setErrorMessage('Cannot create user, email alreay in use')
  }
 
}
    }

    const closeEmailForm = () => {
        UiToggleHelper(actionTypes.SHOW_SIGNUP_WITH_EMAIL, showSignUpWithEmail)
        UiToggleHelper(actionTypes.SHOW_SIGNUP_PROMPT, showSignupPrompt)
    }


  return (
    <EmailAuth show={showSignUpWithEmail} close={closeEmailForm} title={'Sign up Today'}>
        <EmailSignUpFormContainer onSubmit={submitHandler}>

        <EmailSignUpInputContainer>
        <EmailInput
         onChange={displayNameInputHandler} required type='text' placeholder='display name' value={displayNameInput} name='displayNameInput' label='Display name'/>
            <EmailInput onChange={emailHandler} required type='email' placeholder='email address' value={email} name='email' label='Email' />
<EmailInput onChange={passwordHandler} required type='password' placeholder='password' value={password} name='password' label='Password'/>
<EmailInput
 onChange={passwordRepeatHandler} required type='password' placeholder='repeat password' value={passwordRepeat} name='passwordRepeat' label='Repeat password'/>
{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }

            </EmailSignUpInputContainer>

            

<EmailSignUpButton>Sign up</EmailSignUpButton>

        </EmailSignUpFormContainer>
    </EmailAuth>
  )
}

export default EmailSignUp