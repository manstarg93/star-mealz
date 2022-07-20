import React, { Fragment, useContext } from 'react'
import { DisplayName, NavigationContainer, NavLogoContainer, NonAuthContainer } from './Navigation.styles'
import NavigationLink from './NavigationLink'

import Logo from '../logo/Logo'
import { AuthContext,  } from '../../context/AuthContext'


const Navigation = () => {
  const {userData,auth} = useContext(AuthContext)

  return (
    <Fragment>
       {auth === null && <NonAuthContainer>
       
      <Logo/>
    
        <NavigationLink authData/>
        </NonAuthContainer>}


        {userData !== null && <NavigationContainer>
     
      
     <NavLogoContainer>
     <Logo/>
     {userData !== null &&  <DisplayName>Welcome<span>{ userData.displayName.toUpperCase()}</span></DisplayName>}
     </NavLogoContainer>
     
       {/* <MealSearch/> */}
       <NavigationLink authData/>
    
      
    
   </NavigationContainer>}
    </Fragment>

    
   
  )
}

export default Navigation