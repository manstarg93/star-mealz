import React, { useContext } from 'react'
import {ReactComponent as DeleteIcon} from '../../assets/deleteicon.svg'

import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'
import { DeleteButtonContainer } from './DeleteButton'
const DeleteButton = (props) => {


    const {saveSelectedId} = useContext(MealContext)
    const  {UiToggleHelper,showDeleteWarningModal} = useContext(UiContext)
const {id,mealTitle} = props


    const deletewarninghandler =  () => {
        saveSelectedId(id,mealTitle)

        UiToggleHelper(actionTypes.SHOW_DELETE_WARNING_MODAL, showDeleteWarningModal)
    }

  return (


    <DeleteButtonContainer>

        <DeleteIcon onClick={deletewarninghandler}/>
    </DeleteButtonContainer>
  )
}





export default DeleteButton