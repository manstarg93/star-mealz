import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import { RecipieContext } from '../../context/RecipieContext';
import Modal from '../ui/modal/Modal'

import { DeleteButtonContainer } from './DeleteButton'
import { CancelDeleteButton, ConfirmDeleteButton, DeleteModalButtonContainer, DeleteModalHeader } from './DeleteModal.styles'

const DeleteModal = () => {
    const {removeMealHandler} = useContext(FoodAddContext)
    const {selectedId,updateDatabase,mealTitle} = useContext(MealContext)
    const {showDeleteWarningModal, showdeletewarninghandler} = useContext(UiContext)
    const {userId} = useContext(AuthContext)
    const {removeRecipieHandler} = useContext(RecipieContext)
  
    const deletewarninghandler =  () => {
        showdeletewarninghandler()
    }

    const deleteItemHandler = async () => {
        await removeMealHandler(selectedId,userId).then(() => {
            updateDatabase(userId)
        })

       removeRecipieHandler(userId, mealTitle)

        showdeletewarninghandler()
            }
  return (
    <Modal close={showdeletewarninghandler} show={showDeleteWarningModal}>
        <DeleteButtonContainer>
            <DeleteModalHeader>Are you sure you want to remove meal?</DeleteModalHeader>
           <DeleteModalButtonContainer>
               <CancelDeleteButton onClick={deletewarninghandler}>Cancel</CancelDeleteButton>
               <ConfirmDeleteButton onClick={deleteItemHandler}>Confirm</ConfirmDeleteButton>
           </DeleteModalButtonContainer>
        </DeleteButtonContainer>
    </Modal>
  )
}

export default DeleteModal