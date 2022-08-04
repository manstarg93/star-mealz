import React, { useContext, useState } from 'react'
import { BrandName, GetStartedButton, GetStartedComponentBackDrop, GetStartedComponentContainer, GetStartedLogoBrandContainer, GetStartedText, GetStartedTextContainer, LoginGetStartedContainer, LogInPropmt, LogInPropmtText } from './GetStartedComponent.styles'
import mealTable from '../../assets/mealsEating.jpg'

import { UiContext } from '../../context/UiContext'

import { actionTypes } from '../../context/UiContextReducer'
const GetStartedComponent = () => {

    const {showLoginPrompt, showSignupPrompt,UiToggleHelper} = useContext(UiContext)
  
    const getStartedHandler = () => {
      UiToggleHelper(actionTypes.SHOW_SIGNUP_PROMPT, showSignupPrompt )
        


      }

      const loginPromptHandler = () => {

        UiToggleHelper(actionTypes.SHOW_LOGIN_PROMPT, showLoginPrompt )
      }


  return (
    <GetStartedComponentContainer >

        <GetStartedComponentBackDrop backGroundImage={mealTable}/>
        <GetStartedLogoBrandContainer>
        {/* <Logo/> */}
        <BrandName>Starmeal</BrandName>
        </GetStartedLogoBrandContainer>

        <LoginGetStartedContainer>
            <GetStartedTextContainer>
            <GetStartedText>Think, Plan, Prepare. </GetStartedText>
            <GetStartedText>Eat Healthy.</GetStartedText>
            </GetStartedTextContainer>
          
     
            <GetStartedButton  onClick={getStartedHandler}>Get Started</GetStartedButton>
            <LogInPropmtText onClick={loginPromptHandler}>Already have an account? <span>Log In</span></LogInPropmtText>
        </LoginGetStartedContainer>

        {/* <LoginMobile show={showLogin} close={loginHandler}/> */}
      
    </GetStartedComponentContainer>
  )
}

export default GetStartedComponent