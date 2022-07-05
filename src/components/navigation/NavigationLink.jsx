import React from 'react'
import { NavigationLinkContainer, NavigationLinks } from './NavigationLink.styles'

const NavigationLink = () => {
  return (
    <NavigationLinkContainer>
        <NavigationLinks to='/mealplan'>Meal Plan</NavigationLinks>
        <NavigationLinks to='/'>Favourite</NavigationLinks>
        <NavigationLinks to='/'>Shop</NavigationLinks>
        <NavigationLinks to='/'>User</NavigationLinks>
    </NavigationLinkContainer>
  )
}

export default NavigationLink