import React, { useContext } from 'react'
import { DisplayName, NavigationContainer, NavLogoContainer } from './Navigation.styles'
import NavigationLink from './NavigationLink'

import Logo from '../logo/Logo'
import { AuthContext,  } from '../../context/AuthContext'


const Navigation = () => {
  const {userData} = useContext(AuthContext)

  return (
    <NavigationContainer>
      <NavLogoContainer>
      <Logo/>
      </NavLogoContainer>
      {userData !== null ?  <DisplayName>Welcome<span>{userData.displayName}</span></DisplayName> : null}
        {/* <MealSearch/> */}
        <NavigationLink/>
    </NavigationContainer>
  )
}

export default Navigation