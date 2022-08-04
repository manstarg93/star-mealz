
import React, { useContext } from 'react'

import { AuthPromptButton, AuthPromptContainer, AuthPromptTitle } from './AuthPrompt.styles'
import {ReactComponent as GoogleIcon} from '../../assets/googleIcon.svg'
import Modal from '../ui/modal/Modal'

const AuthPrompt = (props) => {
    const {title,googleAuthClicked,emailAuthClicked, show, close} = props



  return (
    
<AuthPromptContainer as={Modal} show={show} close={close}   >
   <AuthPromptTitle>{title}</AuthPromptTitle>
       <AuthPromptButton onClick={googleAuthClicked}> <span><GoogleIcon/></span>Continue with Google</AuthPromptButton>
       <AuthPromptButton onClick={emailAuthClicked}> email</AuthPromptButton>
   </AuthPromptContainer>



     
   
  )
}

export default AuthPrompt