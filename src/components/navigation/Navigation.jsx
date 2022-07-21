import React, { Fragment, useContext, useState } from 'react'
import { CloseNavMobileContainer,MobileNavDefault,NavigationContainer, NavLogoContainer, NavLogoContainerMobile, NonAuthContainer, OpenNavIconContainer, WelcomeContainerHome } from './Navigation.styles'
import NavigationLink from './NavigationLink'
import {ReactComponent as CloseNavIcon} from '../../assets/close.svg'
import {ReactComponent as OpenNavIcon} from '../../assets/hamburgermenu1.svg'
import Logo from '../logo/Logo'
import { AuthContext,  } from '../../context/AuthContext'
import { WelcomeContainer } from './NavigationLink.styles'


const Navigation = () => {


  const {userData} = useContext(AuthContext)
const [closeNav, setCloseNav] = useState(true)
   const closeNavHandler = () => {
setCloseNav(closeNav => closeNav = !closeNav)
  }

  return (

    <Fragment>
      <MobileNavDefault closeNav={closeNav}>
      <NavLogoContainerMobile>
    <Logo/>
    
   
    </NavLogoContainerMobile>

    <OpenNavIconContainer>
      <OpenNavIcon onClick={closeNavHandler}/>
    </OpenNavIconContainer>
      </MobileNavDefault>

      <NavigationContainer closeNav={closeNav}>
     
     <CloseNavMobileContainer>
     <NavLogoContainerMobile>
    <Logo/>
    
    </NavLogoContainerMobile>
    {userData !== null &&  <WelcomeContainerHome>Welcome<span>{ userData.displayName.toUpperCase()}</span></WelcomeContainerHome>} 
       <CloseNavIcon onClick={closeNavHandler}/>
     </CloseNavMobileContainer>
    <NavLogoContainer>
    <Logo/>
    
    </NavLogoContainer>
    
      {/* <MealSearch/> */}
      <NavigationLink closeNavHandler ={closeNavHandler} authData/>
   
     
   
  </NavigationContainer>
    </Fragment>
       

    
   
  )
}

export default Navigation