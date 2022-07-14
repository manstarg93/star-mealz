import React, { useEffect } from 'react'
import Modal from '../ui/modal/Modal'

import mealTable from '../../assets/mealModal.jpg'
import { LoginButtton, LoginContainer, LoginRegisterModalContainer, LoginRegisterText, LoginSignUpContainer, LoginSignUpHeader, LoginSignUpTitle, ReturnIconContainer, SignUpButton, SignUpContainer, SignUpLoginContainer, } from './LoginRegisterModal.styles'
import { useContext } from 'react'
import { UiContext } from '../../context/UiContext'

import { useState } from 'react'

import LoginRegister from '../loginRegister/LoginRegister'
import {ReactComponent as LeftArrowIcon} from '../../assets/leftArrow.svg'


import { AuthContext } from '../../context/AuthContext'

const LoginRegisterModal = () => {
 

    const { auth} = useContext(AuthContext)

const {showLoginSignUpModal,showloginSignUpHandler} = useContext(UiContext)

  const [showSignUp, dispatchShowSignUp] = useState(false)

  const [showLogin, dispatchShowLogin] = useState(false)

  const [showDefault, dispatchShowDefault] = useState(true)



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

  

 useEffect(() => {
    if(auth !== null){
        dispatchShowDefault(true)
    }
 },[auth])
    
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
           

           <LoginRegister signup/>
            <LoginRegisterText>Already have an account? <span onClick={showLoginhandler} >Log in</span></LoginRegisterText>
           </SignUpContainer>
           
           
           }
           {showLogin && <LoginContainer> 

           <LoginRegister login/>
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