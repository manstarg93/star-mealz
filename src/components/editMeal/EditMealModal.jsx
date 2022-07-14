import React, { Fragment, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'

import { CancelDeleteButton, ConfirmDeleteButton, DeleteModalButtonContainer } from '../deleteButtton/DeleteModal.styles'
import { MealTitleInput } from '../mealTitle/MealTitle.styles'

import Modal from '../ui/modal/Modal'
import { EditFormGroup, EditModalContainer, EditTitle, MealCalorieInput } from './EditMealModal.styles'

const EditMealModal = () => {

  
    const {showEditModal,showEditModalHandler} = useContext(UiContext)
    const {selectMealWeight,mealTitleHandler,updateMealHandler} = useContext(FoodAddContext)
    const {selectedId,databaseMeal,updateDatabase} = useContext(MealContext)

    const {userId} = useContext(AuthContext)
  

    const cancelEdithandler =  () => {
     showEditModalHandler()
  }

  const mealTitleHandle = (event) => {

    mealTitleHandler(event.target.value)
}
  


  const weightSelectHandler = (event) => {
    selectMealWeight(event.target.value)

        }

   
      
      const EditItemHandler = (selectedMeal) => {

      updateMealHandler(selectedId,userId,selectedMeal)
            updateDatabase()
            showEditModalHandler()
          
       
        
              }
   

      let selectedDay;
    
  const mealToUpdate = databaseMeal.filter(meal => meal.id === selectedId).map(selectedMeal => {
    
    selectedDay = selectedMeal.selectedMealDay
    return(
      <Fragment key={selectedMeal.id}>

  
<EditTitle>Editing <span>{selectedMeal.mealTitle}</span> for {selectedMeal.selectedOccasion}</EditTitle>

<MealTitleInput label='Meal Title' name='mealtitle' onChange={mealTitleHandle} defaultValue={selectedMeal.mealTitle} placeholder={selectedMeal.mealTitle} />

<MealCalorieInput label='Meal Calories' name='calories' onChange={weightSelectHandler}  defaultValue={selectedMeal.selectedWeight} type='number'  placeholder={selectedMeal.selectedWeight}/>


  

    <DeleteModalButtonContainer>
               <CancelDeleteButton onClick={cancelEdithandler}>Cancel</CancelDeleteButton>
               <ConfirmDeleteButton onClick={() => EditItemHandler(selectedMeal)}>Confirm</ConfirmDeleteButton>
           </DeleteModalButtonContainer>
      </Fragment>
    )
  })
  return (
   <Modal close={showEditModalHandler} title={`${selectedDay}`}  show={showEditModal}>
     <EditModalContainer>

     {mealToUpdate}
     </EditModalContainer>
   </Modal>
  )

}
export default EditMealModal