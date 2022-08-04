import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import { RecipieContext } from '../../context/RecipieContext';
import Modal from '../ui/modal/Modal'

import { CancelDeleteButton, ConfirmDeleteButton, DeleteModalButtonContainer, DeleteModalContainer, DeleteModalHeader } from './DeleteModal.styles'
import { actionTypes } from '../../context/UiContextReducer'

const DeleteModal = () => {
    const {removeMealHandler} = useContext(FoodAddContext)
    const {selectedId,updateDatabase,mealTitle} = useContext(MealContext)
    const {showDeleteWarningModal,UiToggleHelper} = useContext(UiContext)
    const {userId} = useContext(AuthContext)
    const {getMealRecipieHandler} = useContext(RecipieContext)
  
    const deletewarninghandler =  () => {
      
        UiToggleHelper(actionTypes.SHOW_DELETE_WARNING_MODAL,showDeleteWarningModal)
    }

    const deleteItemHandler = async () => {
        await removeMealHandler(selectedId,userId,mealTitle).then(() => {
            updateDatabase(userId)
            // getMealRecipieHandler(userId)
            // removeRecipieHandler(userId, mealTitle)
            UiToggleHelper(actionTypes.SHOW_DELETE_WARNING_MODAL,showDeleteWarningModal)
        })

       

       
            }
  return (

        <DeleteModalContainer as={Modal} close={deletewarninghandler} show={showDeleteWarningModal}>
            <DeleteModalHeader>Are you sure you want to remove {mealTitle ? mealTitle : 'meal'}</DeleteModalHeader>
           <DeleteModalButtonContainer>
               <CancelDeleteButton onClick={deletewarninghandler}>Cancel</CancelDeleteButton>
               <ConfirmDeleteButton onClick={deleteItemHandler}>Confirm</ConfirmDeleteButton>
           </DeleteModalButtonContainer>
        </DeleteModalContainer>

  )
}

export default DeleteModal