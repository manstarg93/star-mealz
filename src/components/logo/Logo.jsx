import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as MealLogo} from '../../assets/logo1.svg'
import { LogoContainer } from './Logo.styles'

const Logo = () => {
    const navigate = useNavigate()

    const GoToHome = () => navigate('/')

  return (
      <LogoContainer>
 <MealLogo onClick={GoToHome} />
      </LogoContainer>
   
  )
}

export default Logo