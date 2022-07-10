import React, { Fragment, useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import { CancelDeleteButton, ConfirmDeleteButton, DeleteModalButtonContainer } from '../deleteButtton/DeleteModal.styles'
import { MealTitleInput } from '../mealTitle/MealTitle.styles'
import { MealOccasionSelector } from '../selectMealOccasion/SelectMealOccasion.styles'
import { ServingSize } from '../selectMealWeight/SelectMealWeight.styles'
import Modal from '../ui/modal/Modal'
import { EditFormGroup, EditModalContainer, EditTitle } from './EditMealModal.styles'

const EditMealModal = () => {

    const {showEditModal,showEditModalHandler} = useContext(UiContext)
    const {meals,selectMealWeight, selectedWeight,mealTitle,selectOccasion, mealTitleHandler, selectedOccasion,updateMealHandler} = useContext(FoodAddContext)
    const {selectedId} = useContext(MealContext)

    const cancelEdithandler =  () => {
     showEditModalHandler()
  }

  const mealTitleHandle = (event) => {

    mealTitleHandler(event.target.value)
}
  const EditItemHandler = () => {
    updateMealHandler(selectedId)
     showEditModalHandler()
          }


  const weightSelectHandler = (event) => {
    selectMealWeight(parseInt(event.target.value))
        }

        const mealAddHandler = (event) => {

          selectOccasion(event.target.value)
          
      }

   
      const options = [
    
        { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'snack', label: 'Snack' },
    { value: 'dinner', label: 'Dinner' }
      ]

      let selectedDay;
  const mealToUpdate = meals.filter(meal => meal.id === selectedId).map(selectedMeal => {
    selectedDay = selectedMeal.selectedMealDay
    return(
      <Fragment key={selectedMeal.id}>

  
<EditTitle>editing {selectedMeal.mealTitle}</EditTitle>

<MealTitleInput label='Meal Title' name='mealtitle' onChange={mealTitleHandle} value={mealTitle} placeholder={selectedMeal.mealTitle} />

<ServingSize label='Meal Calories' name='calories' onChange={weightSelectHandler}  value={selectedWeight} type='number'  placeholder={selectedMeal.selectedWeight}/>

<MealOccasionSelector  label='Occasion' name='mealoccasion' defaultValue={selectedOccasion} onChange={mealAddHandler}    >
      {options.map(option => {
        return(
          <option key={option.value} value={option.value}>{option.label}</option>
        )
      })}
    </MealOccasionSelector>

  

    <DeleteModalButtonContainer>
               <CancelDeleteButton onClick={cancelEdithandler}>Cancel</CancelDeleteButton>
               <ConfirmDeleteButton onClick={EditItemHandler}>Confirm</ConfirmDeleteButton>
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