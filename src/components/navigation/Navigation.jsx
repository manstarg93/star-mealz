import React, { Fragment, useContext, useState } from 'react'
import { BannerText, BannerTextDesktop, CloseNavMobileContainer,MobileNavDefault,NavigationContainer, NavLogoContainer, NavLogoContainerMobile, NonAuthContainer, OpenNavIconContainer, WelcomeContainerHome } from './Navigation.styles'
import NavigationLink from './NavigationLink'
import {ReactComponent as CloseNavIcon} from '../../assets/close.svg'
import {ReactComponent as OpenNavIcon} from '../../assets/hamburgermenu1.svg'
import Logo from '../logo/Logo'
import { AuthContext,  } from '../../context/AuthContext'
import { LogoutButton, WelcomeContainer } from './NavigationLink.styles'
import { signOutOfGoogle } from '../../util/firebase.utils'
import { useNavigate } from 'react-router'
import Modal from '../ui/modal/Modal'


const Navigation = () => {

  const navigate = useNavigate()
  const {userData, auth,setLogoutHandler} = useContext(AuthContext)
const [closeNav, setCloseNav] = useState(true)
   const closeNavHandler = () => {
setCloseNav(true)
  }

  const openNavHandler = () => {
    setCloseNav(false)
      }

  const logoutHandler = async() => {

    await signOutOfGoogle().then(() => {
     setLogoutHandler()
     navigate('/')
    })
 
   }

   const goToHome =  () => {
     navigate('/')
   }

  return (

    <Fragment>
      <MobileNavDefault  closeNav={closeNav}>
      <NavLogoContainerMobile>
      <BannerText onClick={goToHome}>Starmeal</BannerText>
    
   
    </NavLogoContainerMobile>

    <OpenNavIconContainer>
      <OpenNavIcon onClick={openNavHandler}/>
    </OpenNavIconContainer>
      </MobileNavDefault>

      <NavigationContainer closeNav={closeNav}>
        <BannerTextDesktop> <BannerText onClick={goToHome}>Starmeal</BannerText></BannerTextDesktop>
     
     <CloseNavMobileContainer>
     <NavLogoContainerMobile>
    
  
    </NavLogoContainerMobile>
    {userData !== null &&  <WelcomeContainerHome>Welcome<span>{ userData.displayName.toUpperCase()}</span></WelcomeContainerHome>} 
       <CloseNavIcon onClick={closeNavHandler}/>
     </CloseNavMobileContainer>

  
    {/* <Logo/> */}
   
 
    
      {/* <MealSearch/> */}
      <NavigationLink closeNavHandler ={closeNavHandler} authData/>
      {auth !== null &&  <LogoutButton onClick={logoutHandler}>Log out</LogoutButton> }
   
     
   
  </NavigationContainer>
    </Fragment>
       

    
   
  )
}

export default Navigation