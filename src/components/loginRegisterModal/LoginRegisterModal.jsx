import React from 'react'
import Modal from '../ui/modal/Modal'

import mealTable from '../../assets/mealModal.jpg'
import { GoogleButton, GoogleSignUp, LoginButtton, LoginContainer, LoginRegisterModalContainer, LoginRegisterText, LoginSignUpContainer, LoginSignUpHeader, LoginSignUpTitle, ReturnIconContainer, SignUpButton, SignUpContainer, SignUpLoginContainer, SignUpTitle } from './LoginRegisterModal.styles'
import { useContext } from 'react'
import { UiContext } from '../../context/UiContext'
import { useModal } from '../../hooks/useModalHook'
import { useState } from 'react'
import Button from '../button/Button'
import EmailLogin from '../emailLogin/EmailLogin'
import {ReactComponent as LeftArrowIcon} from '../../assets/leftArrow.svg'
import {createUserDocumentFromAuth, signInWithGooglePopOp } from '../../util/firebase.utils'
import {ReactComponent as GoogleIcon} from '../../assets/googleIcon.svg'
import { AuthContext } from '../../context/AuthContext'
const LoginRegisterModal = () => {
    const {showLoginSignUpModal,showloginSignUpHandler} = useContext(UiContext)

  const [showSignUp, dispatchShowSignUp] = useState(false)

  const [showLogin, dispatchShowLogin] = useState(false)

  const [showDefault, dispatchShowDefault] = useState(true)

  const {setAuthHandler} = useContext(AuthContext)

    const showLoginhandler = () => {
        dispatchShowLogin(true)
        dispatchShowSignUp(false)
        dispatchShowDefault(false)
    }
    const showSignUphandler = () => {
        dispatchShowSignUp(true)
        dispatchShowDefault(false)
        dispatchShowLogin(false)
    }
    const showDefaulthandler = () => {
        dispatchShowDefault(true)
        dispatchShowSignUp(false)
        dispatchShowLogin(false)
    }

    const googleSignInHandler = async() => {
        const res = await signInWithGooglePopOp()
        console.log(res)
        const userDocRef = await createUserDocumentFromAuth(res.user)
        setAuthHandler(res.user.accessToken)
        dispatchShowDefault()
        showloginSignUpHandler()
    }
    let title = 'Get started';

if(showSignUp){
    title= 'Sign up to Starmealz'
}
if(showLogin){
    title='Welcome Back'
}
  return (
   <Modal  title={title} close={showloginSignUpHandler} show={showLoginSignUpModal}>
       <LoginRegisterModalContainer  showDefault={showDefault} >
<LoginSignUpHeader loginSignupImage={mealTable}/>
<LoginSignUpTitle>
                    Save your meal plan anywhere
                </LoginSignUpTitle>
            <LoginSignUpContainer>
                
                <SignUpButton onClick={showSignUphandler}>
            Sign Up
                </SignUpButton>
                <LoginButtton onClick={showLoginhandler}>
            Log in
                </LoginButtton>
            </LoginSignUpContainer>
       </LoginRegisterModalContainer>
       <SignUpLoginContainer showDefault={showDefault}  >
           {showSignUp && <SignUpContainer>
           
           <GoogleSignUp signup onClick={googleSignInHandler}>
           <GoogleIcon/>
           <  GoogleButton>Continue with google</GoogleButton>
           </GoogleSignUp>

           <EmailLogin signup/>
            <LoginRegisterText>Already have an account? <span onClick={showLoginhandler} >Log in</span></LoginRegisterText>
           </SignUpContainer>
           
           
           }
           {showLogin && <LoginContainer> 
           <GoogleSignUp signin onClick={googleSignInHandler}>
           <GoogleIcon/>
           <GoogleButton>Continue with google</GoogleButton>
           </GoogleSignUp>
           <EmailLogin login/>
           <LoginRegisterText>Don't have an account? <span onClick={showSignUphandler}>Sign Up</span></LoginRegisterText>
           </LoginContainer>}
           
        <ReturnIconContainer onClick={showDefaulthandler}>
        <LeftArrowIcon/>
        </ReturnIconContainer>
       </SignUpLoginContainer>
      
   </Modal>
  )
}

export default LoginRegisterModal