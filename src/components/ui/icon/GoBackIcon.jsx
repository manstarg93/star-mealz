import React from 'react'
import { GoBackIconContainer } from './GoBackIcon.styles'
import {ReactComponent as LeftArrowIcon} from '../../../assets/leftArrowMain.svg'
const GoBackIcon = (props) => {


    const {onClick} = props
  return (
    <GoBackIconContainer onClick={onClick
  }>
    <LeftArrowIcon/>
    </GoBackIconContainer>
  )
}

export default GoBackIcon