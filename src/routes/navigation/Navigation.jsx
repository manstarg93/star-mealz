import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationContainer } from './Navigation.styles'
import NavigationComponent from '../../components/navigation/Navigation'

const Navigation = () => {
  return (
    <NavigationContainer>
       <NavigationComponent/>
       <Outlet/>
    </NavigationContainer>
  )
}

export default Navigation