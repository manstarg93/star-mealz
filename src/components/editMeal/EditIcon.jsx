import React, { useContext } from 'react'
import {ReactComponent as EditIconButton} from '../../assets/edit.svg'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'

import { EditButtonContainer } from './EditIcon.styles'
const EditIcon = (props) => {


    const {showEditModalHandler} = useContext(UiContext)
    const {saveSelectedId} = useContext(MealContext)
    const {id} = props
       
    
        const editItemHandler =  () => {
            saveSelectedId(id)
            showEditModalHandler()
            
        }

  return (


    <EditButtonContainer>

        <EditIconButton onClick={editItemHandler}/>
    </EditButtonContainer>
  )
}

export default EditIcon