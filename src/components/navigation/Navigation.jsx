import React from 'react'
import { NavigationContainer } from './Navigation.styles'
import NavigationLink from './NavigationLink'

import MealSearch from '../mealSearch/MealSearch'
import Logo from '../logo/Logo'

const Navigation = () => {

  return (
    <NavigationContainer>
       <Logo/>
        {/* <MealSearch/> */}
        <NavigationLink/>
    </NavigationContainer>
  )
}

export default Navigation