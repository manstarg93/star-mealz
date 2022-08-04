import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'
import { useInput } from '../../hooks/inputHook'
import { signInAuthWithEmailAndPassword } from '../../util/firebase.utils'
import EmailAuth from './EmailAuth'
import { ErrorMessage } from './EmailAuth.styles'
import { EmailInput, EmailLogInButton, EmailLoginFormContainer, EmailLoginInputContainer, ForgotPasswordText } from './EmailLogin.styles'
import { FeedBackMessageContainer, FeedBackMessageError } from './PasswordResetModal.styled'

const EmailLogin = () => {

    const {showLoginWithEmail, UiToggleHelper,showLoginPrompt,showPasswordReset} = useContext(UiContext)
    const {setAuthHandler,setUserData} = useContext(AuthContext)
    const {input: emailInput, InputHandler:emailHandler} = useInput()
    const {input: passwordInput, InputHandler: passwordHandler} = useInput()

    const [errorMessage, setErrorMessage] = useState('')

    const submitHandler = async(event) => {
        event.preventDefault()
      
          try {
            await signInAuthWithEmailAndPassword(emailInput,passwordInput).then(({user}) => {
          
              setAuthHandler(user)
              setUserData(user.uid)
              UiToggleHelper(actionTypes.SHOW_LOGIN_WITH_EMAIL,showLoginWithEmail)
            })
            .catch((error)=>{
              switch (error.code) {
                case 'auth/user-not-found':
                  setErrorMessage('No user associated with this email')
                  break;
              case 'auth/wrong-password':
                 setErrorMessage('Wrong Password')
                break
                default:
                   setErrorMessage('An error has occured',error.code)
                
                  break;
              }
              setTimeout(() => {
                setErrorMessage('')
              },1000)
            })
          
            
           
          } catch (error) {
            
            
          }
    }

    const closeEmailForm = () => {
        UiToggleHelper(actionTypes.SHOW_LOGIN_WITH_EMAIL, showLoginWithEmail)
        UiToggleHelper(actionTypes.SHOW_LOGIN_PROMPT, showLoginPrompt)
    }

    const OpenPasswordChangeHandler = () => {
      UiToggleHelper(actionTypes.SHOW_PASSWORD_RESET, showPasswordReset)
      UiToggleHelper(actionTypes.SHOW_LOGIN_WITH_EMAIL, showLoginWithEmail)
    }


  return (
    <EmailAuth show={showLoginWithEmail} close={closeEmailForm} title={'Log in'}>
        <EmailLoginFormContainer onSubmit={submitHandler}>

        <EmailLoginInputContainer>
            <EmailInput onChange={emailHandler} required type='email' placeholder='email address' value={emailInput} name='email' label='Email' />
<EmailInput onChange={passwordHandler} required type='password' placeholder='password' value={passwordInput} name='password' label='Password'/>

{errorMessage && <FeedBackMessageContainer>
  <FeedBackMessageError>{errorMessage}</FeedBackMessageError>
</FeedBackMessageContainer> }

<ForgotPasswordText>Forgot your password? <span onClick={OpenPasswordChangeHandler}>click here</span></ForgotPasswordText>

            </EmailLoginInputContainer>

            

<EmailLogInButton>Log in</EmailLogInButton>

        </EmailLoginFormContainer>
    </EmailAuth>
  )
}

export default EmailLogin