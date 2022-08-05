import React, { Fragment, useContext } from 'react'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import Modal from '../ui/modal/Modal'
import { DeleteButton,  EditButton, EditDeleteIconContainer, EditDeleteModalContainer, EditDeleteTitle, } from './EditDeleteModal.styles'

import { actionTypes } from '../../context/UiContextReducer'
const EditDeleteModal = (props) => {

const {showEditDeleteModal,UiToggleHelper,showDeleteWarningModal,showEditModal} = useContext(UiContext)
const {saveSelectedId,mealInfo} = useContext(MealContext)

    const editItemHandler =() => {

        saveSelectedId(mealInfo.id)
       
        UiToggleHelper(actionTypes.SHOW_EDIT_MODAL, showEditModal)
        UiToggleHelper(actionTypes.SHOW_EDIT_DELETE_MODAL, showEditDeleteModal)
        
    }

    const deletewarninghandler =  () => {
        saveSelectedId(mealInfo.id,mealInfo.mealInfo.description)
        UiToggleHelper(actionTypes.SHOW_EDIT_DELETE_MODAL, showEditDeleteModal)
   
        UiToggleHelper(actionTypes.SHOW_DELETE_WARNING_MODAL,showDeleteWarningModal)
    }

  return (
 
        <EditDeleteModalContainer as={Modal} close={(() => UiToggleHelper(actionTypes.SHOW_EDIT_DELETE_MODAL, showEditDeleteModal))} title={`${mealInfo && mealInfo.mealInfo.description.toLowerCase()}`} show={showEditDeleteModal}>
           


            <EditDeleteIconContainer>
          
            <DeleteButton onClick={deletewarninghandler} >Delete Meal</DeleteButton>
    

        
           <EditButton onClick={editItemHandler}>Edit Meal</EditButton>
           
            </EditDeleteIconContainer>
            
        </EditDeleteModalContainer>
     
  
  )
}

export default EditDeleteModal