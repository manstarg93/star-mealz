import React, { useContext } from 'react'
import {ReactComponent as CloseIcon} from '../../../assets/close.svg'
import Modal from '../../ui/modal/Modal'
import { UiContext } from '../../../context/UiContext'
import { actionTypes } from '../../../context/UiContextReducer'
import MealTitle from '../../mealTitle/MealTitle'
import { AddMealModalContainer, AddMealModalForm, AddMealModalHeaderContainer, AddMealModalTitle, CloseAddMealModalIconContainer, MealSearchContainer,  } from './AddMealModal.styles.jsx'

import MealSearchResult from './MealSearchResult'
import { FoodAddContext } from '../../../context/FoodAddContext'
import GoBackIcon from '../../ui/icon/GoBackIcon'

const AddMealModal = () => {

    const {showAddMealModal, UiToggleHelper,hideMealSearchHandler,showInitialAddMealModal} = useContext(UiContext)
    const {foodAddingValues} = useContext(FoodAddContext)
    const closeAddMealModalHandler = () => {
UiToggleHelper(actionTypes.SHOW_ADD_MEAL_MODAL, showAddMealModal)
hideMealSearchHandler()
    }

    const goBackToInitialAddMealModal = () => {
        UiToggleHelper(actionTypes.SHOW_ADD_MEAL_MODAL, showAddMealModal)
        UiToggleHelper(actionTypes.SHOW_INITIAL_ADD_MEAL_MODAL, showInitialAddMealModal)
        hideMealSearchHandler()
            }
        

    const addmealHandler = (event) => {
        event.preventDefault()
        console.log(foodAddingValues)
    }
  return (
   <AddMealModalContainer as={Modal} 
   title={`Adding ${foodAddingValues.selectedOccasion} for ${foodAddingValues.selectedMealDay}`} 
   show={showAddMealModal} 
   close={closeAddMealModalHandler}
   back={goBackToInitialAddMealModal}
   >
    
       <AddMealModalForm onSubmit={addmealHandler}>
      
       <MealSearchContainer>
       <MealTitle/>
       <MealSearchResult/>
       </MealSearchContainer>

    
       </AddMealModalForm>
       
   </AddMealModalContainer>
  )
}

export default AddMealModal