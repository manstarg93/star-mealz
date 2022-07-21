import React, { Fragment, useContext } from 'react'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import Modal from '../ui/modal/Modal'
import { DeleteButton, DeleteIconContainer, EditButton, EditDeleteModalContainer, EditIconContainer, ModalAlteringTitle } from './EditDeleteModal.styles'
import {ReactComponent as DeleteIcon} from '../../assets/deleteicon.svg'
import {ReactComponent as EditIconButton} from '../../assets/edit.svg'
const EditDeleteModal = (props) => {

const {showEditDeleteModalHandler,showEditModalHandler,showdeletewarninghandler,showEditDeleteModal} = useContext(UiContext)
const {saveSelectedId,mealInfo} = useContext(MealContext)

    const editItemHandler =() => {

        saveSelectedId(mealInfo.id)
        showEditDeleteModalHandler()
        showEditModalHandler()
    }

    const deletewarninghandler =  () => {
        saveSelectedId(mealInfo.id,mealInfo.mealTitle)
        showEditDeleteModalHandler()
        showdeletewarninghandler()
        
    }

  return (
    <Modal close={showEditDeleteModalHandler} title={mealInfo && mealInfo.mealTitle} show={showEditDeleteModal}>

        <Fragment>
            <ModalAlteringTitle>You are altering {mealInfo ? mealInfo.mealTitle : 'this meal'}</ModalAlteringTitle>
        <EditDeleteModalContainer>
            <DeleteIconContainer onClick={deletewarninghandler}>
            <DeleteButton>Delete Meal</DeleteButton>
            </DeleteIconContainer>

            <EditIconContainer onClick={editItemHandler}>
           <EditButton>Edit Meal</EditButton>
            </EditIconContainer>
        </EditDeleteModalContainer>
        </Fragment>
        
    </Modal>
  )
}

export default EditDeleteModal