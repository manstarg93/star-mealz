import React, { useContext } from 'react'

import { InitialAddMealModalContainer, InitialAddMealModalTitle, InititalAddMealModalDone, OccasionItemModal, OccasionSelectorModalContainer } from './InititalAddMealModal.styled'
import Modal from '../../ui/modal/Modal'
import { UiContext } from '../../../context/UiContext'
import { actionTypes } from '../../../context/UiContextReducer'
import {ReactComponent as CloseIcon} from '../../../assets/close.svg'
import { AddMealModalHeaderContainer,  CloseAddMealModalIconContainer } from './AddMealModal.styles'
import {  OccasionSelectorAddIconContainer, OccasionSelectorMealIconContainer, OccasionSelectorTitle } from './InitialAddMeal.styles'
import {ReactComponent as PlusIcon} from '../../../assets/plusIcon.svg'

import {ReactComponent as BreakfastIcon} from '../../../assets/breakfast.svg'
import {ReactComponent as Lunchcon} from '../../../assets/lunch.svg'
import {ReactComponent as DinnerIcon} from '../../../assets/dinner.svg'
import {ReactComponent as SnackIcon} from '../../../assets/snack.svg'

import { FoodAddContext } from '../../../context/FoodAddContext'

const InitialAddMealModal = () => {

    const {showAddMealModal, UiToggleHelper,showInitialAddMealModal} = useContext(UiContext)


    const {selectOccasion} = useContext(FoodAddContext)

    const occasionArray = [
        {mealIcon: <BreakfastIcon/>,occasion: 'Add Breakfast', value: 'breakfast', addIcon: <PlusIcon/>},
        {mealIcon: <Lunchcon/>, occasion: 'Add Lunch' , value:'lunch', addIcon: <PlusIcon/>},
        {mealIcon: <DinnerIcon/>, occasion: 'Add Dinner', value:'dinner',addIcon: <PlusIcon/> },
        {mealIcon: <SnackIcon/>, occasion: 'Add Snack', value:'snack',addIcon: <PlusIcon/>}
    ]



 
    const getOccasionValue = (value) => {
selectOccasion(value)
UiToggleHelper(actionTypes.SHOW_ADD_MEAL_MODAL, showAddMealModal)
UiToggleHelper(actionTypes.SHOW_INITIAL_ADD_MEAL_MODAL, showInitialAddMealModal)
    }

    const closeInititalAddMealModal = () => {
UiToggleHelper(actionTypes.SHOW_INITIAL_ADD_MEAL_MODAL, showInitialAddMealModal)

    }

   
        



    
  return (
    <InitialAddMealModalContainer as={Modal} show={showInitialAddMealModal} close={closeInititalAddMealModal}>
         <AddMealModalHeaderContainer>
   
           <InitialAddMealModalTitle>Let's Add Our Meal.</InitialAddMealModalTitle>
           <CloseAddMealModalIconContainer>
           <CloseIcon onClick={closeInititalAddMealModal}/>
           </CloseAddMealModalIconContainer>
          
       </AddMealModalHeaderContainer>
  
<OccasionSelectorModalContainer >
{occasionArray.map(occasion => {
            return  <OccasionItemModal key={occasion.occasion} onClick={() => getOccasionValue(occasion.value)}>
            <OccasionSelectorMealIconContainer>
            {occasion.mealIcon}
            </OccasionSelectorMealIconContainer>
            <OccasionSelectorTitle>{occasion.occasion}</OccasionSelectorTitle>
            <OccasionSelectorAddIconContainer>
                {occasion.addIcon}
            </OccasionSelectorAddIconContainer>
        </OccasionItemModal>
        })}
</OccasionSelectorModalContainer>

<InititalAddMealModalDone onClick={closeInititalAddMealModal}>Done</InititalAddMealModalDone>
       
    </InitialAddMealModalContainer>

  )
}

export default InitialAddMealModal