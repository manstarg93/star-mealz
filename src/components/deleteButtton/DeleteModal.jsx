import React, { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import Button from '../button/Button'
import Modal from '../ui/modal/modal/Modal'

import { DeleteButtonContainer } from './DeleteButton'
import { CancelDeleteButton, ConfirmDeleteButton, DeleteModalButtonContainer, DeleteModalHeader } from './DeleteModal.styles'

const DeleteModal = () => {
    const {removeMealHandler} = useContext(FoodAddContext)
    const {selectedId} = useContext(MealContext)
    const {showDeleteWarningModal, showdeletewarninghandler} = useContext(UiContext)

    const deletewarninghandler =  () => {
        showdeletewarninghandler()
    }

    const deleteItemHandler = () => {
        removeMealHandler(selectedId)
        showdeletewarninghandler()
            }
  return (
    <Modal show={showDeleteWarningModal}>
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