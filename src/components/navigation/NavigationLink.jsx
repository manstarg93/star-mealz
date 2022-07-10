import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { UiContext } from '../../context/UiContext'
import { signOutOfGoogle } from '../../util/firebase.utils'
import { LoginRegisterButton, LogoutButton, NavigationLinkContainer, NavigationLinks } from './NavigationLink.styles'

const NavigationLink = () => {

  const {showloginSignUpHandler} = useContext(UiContext)
const {auth,setLogoutHandler} = useContext(AuthContext)
  const getStartedHandler = () => {
    showloginSignUpHandler()
  }
  const logoutHandler = async() => {

   await signOutOfGoogle()
    
    setLogoutHandler()

  }
  return (
    <NavigationLinkContainer>
        <NavigationLinks to='/mealplan'>Meal Plan</NavigationLinks>
        <NavigationLinks to='/'>Favourite</NavigationLinks>
        {auth !== null ? <LogoutButton onClick={logoutHandler}>Log out</LogoutButton> :    <LoginRegisterButton onClick={getStartedHandler} >Get Started</LoginRegisterButton>}
     
    </NavigationLinkContainer>
  )
}

export default NavigationLink