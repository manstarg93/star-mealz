import React, { Fragment } from 'react'
import { useContext } from 'react'
import { useNavigate} from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import { UiContext } from '../../context/UiContext'
import { Link } from 'react-router-dom'
import { signOutOfGoogle } from '../../util/firebase.utils'
import {DisplayName, LoginRegisterButton, LogoutButton, NavigationLinkContainer, NavigationLinks, WelcomeContainer } from './NavigationLink.styles'


const NavigationLink = (props) => {
const {closeNavHandler}  = props
  const {showloginSignUpHandler} = useContext(UiContext)
const {auth,setLogoutHandler,userData} = useContext(AuthContext)


const navigate = useNavigate()
  const getStartedHandler = () => {
    showloginSignUpHandler()
    closeNavHandler()
  }
  const logoutHandler = async() => {

   await signOutOfGoogle().then(() => {
    setLogoutHandler()
    navigate('/')
   })

  } 

  const goToRecipie = () => {

    navigate('/myrecipies')
    closeNavHandler()
  }



  const goToMealPlanHandler = async() => {

    navigate('/mealplan')
    closeNavHandler()
  }


  const gotoAddMeal = async() => {

    navigate('/')
    closeNavHandler()
  }


  return (
    <NavigationLinkContainer>
      
      {auth !== null && <Fragment> 
        
        <NavigationLinks onClick={gotoAddMeal} >Add Meal</NavigationLinks>
        <NavigationLinks onClick={goToMealPlanHandler} >Meal Plan</NavigationLinks>
        <NavigationLinks onClick={goToRecipie} >My Recipies</NavigationLinks>
        {userData !== null &&  <WelcomeContainer>Welcome<span>{ userData.displayName.toUpperCase()}</span></WelcomeContainer>} </Fragment> }
      {/* <NavigationLinks as={Link}  to='/favourites'>Favourites</NavigationLinks> */}
      <NavigationLinks>
       {auth !== null ? <LogoutButton onClick={logoutHandler}>Log out</LogoutButton> : <LoginRegisterButton onClick={getStartedHandler} >Get Started</LoginRegisterButton>}
       </NavigationLinks>
      
     
        
        
     
        
     
    </NavigationLinkContainer>
  )
}

export default NavigationLink