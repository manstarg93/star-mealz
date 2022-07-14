import React from 'react'
import {ReactComponent as EditIconButton} from '../../assets/edit.svg'


import { EditButtonContainer } from './EditIcon.styles'
const EditIcon = (props) => {

  return (


    <EditButtonContainer>

        <EditIconButton  {...props}/>
    </EditButtonContainer>
  )
}

export default EditIcon