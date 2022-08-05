import React, { Fragment } from 'react'
import { useContext } from 'react'
import { useNavigate} from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import { UiContext } from '../../context/UiContext'
import { Link } from 'react-router-dom'
import { signOutOfGoogle } from '../../util/firebase.utils'
import {DisplayName, FindMealButton, FindMealContainer, LoginRegisterButton, LogoutButton, LogoutButtonHome, LogoutContainer, NavigationLinkContainer, NavigationLinks, WelcomeContainer, WelcomeUserText } from './NavigationLink.styles'
import { actionTypes } from '../../context/UiContextReducer'

import {ReactComponent as FoodSearchIcon} from '../../assets/searchIcon.svg'
import LoadingSpinner from '../ui/loading/LoadingSpinner'
const NavigationLink = (props) => {
const {closeNavHandler}  = props
  const { UiToggleHelper, showLoginSignUpModal,showInitialAddMealModal} = useContext(UiContext)
const {auth,setLogoutHandler,userData} = useContext(AuthContext)


const navigate = useNavigate()
  const getStartedHandler = () => {
  
    UiToggleHelper(actionTypes.SHOW_LOGIN_SIGNUP, showLoginSignUpModal)
    closeNavHandler()
  }
  const logoutHandler = async() => {

   await signOutOfGoogle().then(() => {
    setLogoutHandler()
    navigate('/')
   })

  } 




  const goToMealPlanHandler = async() => {

    navigate('/mealplan')
    closeNavHandler()
  }


  const goHome = async() => {

    navigate('/')
    closeNavHandler()
  }

  const showAddMealModalHandler = () => {

    UiToggleHelper(actionTypes.SHOW_INITIAL_ADD_MEAL_MODAL, showInitialAddMealModal)
    closeNavHandler()
  }


  return (
    <NavigationLinkContainer>
      
      {auth !== null && <Fragment> 
        <NavigationLinks onClick={goHome} >Home</NavigationLinks>
     
     
        <NavigationLinks  onClick={showAddMealModalHandler} >  ADD MEAL</NavigationLinks>
   
       
        <NavigationLinks onClick={goToMealPlanHandler} >Meal Plan</NavigationLinks>
     

        {userData !== null ?  <WelcomeContainer> <WelcomeUserText>
          Welcome<span>{ userData.displayName.toUpperCase()}</span>
      </WelcomeUserText>
      <LogoutContainer>
      {auth !== null &&  <LogoutButtonHome onClick={logoutHandler}>Log out</LogoutButtonHome> }
      </LogoutContainer>
    
    </WelcomeContainer> : <WelcomeContainer><WelcomeUserText>Logging in...</WelcomeUserText></WelcomeContainer>} 
        
        </Fragment> }
      {/* <NavigationLinks as={Link}  to='/favourites'>Favourites</NavigationLinks> */}
     
      <NavigationLinks>
       {auth === null && <LoginRegisterButton onClick={getStartedHandler} >Get Started</LoginRegisterButton>}
       </NavigationLinks>
      
     
        
        
     
        
     
    </NavigationLinkContainer>
  )
}

export default NavigationLink