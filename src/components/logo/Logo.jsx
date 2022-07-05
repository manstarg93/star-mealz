import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { LogoContainer } from './Logo.styles'

const Logo = () => {
    const navigate = useNavigate()

    const GoToHome = () => navigate('/')

  return (
      <LogoContainer>
 <CrownLogo onClick={GoToHome} />
      </LogoContainer>
   
  )
}

export default Logo