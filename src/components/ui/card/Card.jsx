import React from 'react'
import { CardContainer } from './Card.styles'

const Card = ({children,props}) => {
  return (
   <CardContainer {...props} >{children}</CardContainer>
  )
}

export default Card