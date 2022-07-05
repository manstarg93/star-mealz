import React from 'react'
import { NavigationContainer, NavLogoContainer } from './Navigation.styles'
import NavigationLink from './NavigationLink'

import MealSearch from '../mealSearch/MealSearch'
import Logo from '../logo/Logo'


const Navigation = () => {

  return (
    <NavigationContainer>
      <NavLogoContainer>
      <Logo/>
      </NavLogoContainer>
      
        {/* <MealSearch/> */}
        <NavigationLink/>
    </NavigationContainer>
  )
}

export default Navigation