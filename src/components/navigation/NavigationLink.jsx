import React from 'react'
import { useContext } from 'react'
import {useLocation, useNavigate} from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import { signOutOfGoogle } from '../../util/firebase.utils'
import { DisplayName, LoginRegisterButton, LogoutButton, NavigationLinkContainer, NavigationLinks } from './NavigationLink.styles'

const NavigationLink = () => {

  const {showloginSignUpHandler} = useContext(UiContext)
const {auth,setLogoutHandler} = useContext(AuthContext)
const {resetDatabaseMeal,updateDatabase} = useContext(MealContext)

const navigate = useNavigate()
  const getStartedHandler = () => {
    showloginSignUpHandler()
  }
  const logoutHandler = async() => {

   await signOutOfGoogle()
    setLogoutHandler()
    resetDatabaseMeal()
    navigate('/')

  } 

  const goToAddMeal = () => {
    
    navigate('/')
  }

  

  const goToMealPlanHandler = () => {
    updateDatabase()
    navigate('/mealplan')
  }
  return (
    <NavigationLinkContainer>
      {auth && <NavigationLinks onClick={goToMealPlanHandler} to='/mealplan'>Meal Plan</NavigationLinks>}
        
        <NavigationLinks  to='/'>Favourite</NavigationLinks>
       
        {auth !== null ? <LogoutButton onClick={logoutHandler}>Log out</LogoutButton> :    <LoginRegisterButton onClick={getStartedHandler} >Get Started</LoginRegisterButton>}
     
    </NavigationLinkContainer>
  )
}

export default NavigationLink