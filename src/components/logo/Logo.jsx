import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as MealLogo} from '../../assets/logo1.svg'
import { FoodAddContext } from '../../context/FoodAddContext'
import { LogoContainer } from './Logo.styles'

const Logo = () => {
    const navigate = useNavigate()
    const {clearMealHandler} = useContext(FoodAddContext)
    const GoToHome = () => {
      clearMealHandler()
      navigate('/')}

  return (
      <LogoContainer>
 <MealLogo onClick={GoToHome} />
      </LogoContainer>
   
  )
}

export default Logo