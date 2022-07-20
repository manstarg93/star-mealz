import React, { Fragment } from 'react'
import { useContext } from 'react'
import { useNavigate} from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import { UiContext } from '../../context/UiContext'
import { Link } from 'react-router-dom'
import { signOutOfGoogle } from '../../util/firebase.utils'
import {LoginRegisterButton, LogoutButton, NavigationLinkContainer, NavigationLinks } from './NavigationLink.styles'


const NavigationLink = () => {

  const {showloginSignUpHandler} = useContext(UiContext)
const {auth,setLogoutHandler} = useContext(AuthContext)


const navigate = useNavigate()
  const getStartedHandler = () => {
    showloginSignUpHandler()

  }
  const logoutHandler = async() => {

   await signOutOfGoogle().then(() => {
    setLogoutHandler()
    navigate('/')
   })

  } 

  const goToRecipie = () => {

    navigate('/myrecipies')
   
  }

  

  const goToMealPlanHandler = async() => {

    navigate('/mealplan')
  }
  return (
    <NavigationLinkContainer>
      
      {auth !== null && <Fragment>
        <NavigationLinks onClick={goToMealPlanHandler} >Meal Plan</NavigationLinks>
        <NavigationLinks onClick={goToRecipie} >My Recipies</NavigationLinks>
      {/* <NavigationLinks as={Link}  to='/favourites'>Favourites</NavigationLinks> */}
      </Fragment> 
      }
        
        
       
        {auth !== null ? <LogoutButton onClick={logoutHandler}>Log out</LogoutButton> :    <LoginRegisterButton onClick={getStartedHandler} >Get Started</LoginRegisterButton>}
     
    </NavigationLinkContainer>
  )
}

export default NavigationLink