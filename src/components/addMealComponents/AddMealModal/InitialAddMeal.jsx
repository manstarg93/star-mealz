import React, { useContext, useState } from 'react'
import { DateSelectorTitle, InitialAddMealContainer, InitialAddMealDateContainer, InitialAddMealTitle, NextIconContainer, OccasionSelectorAddIconContainer, OccasionSelectorContainer, OccasionSelectorIconContainer, OccasionSelectorItem, OccasionSelectorMealIconContainer, OccasionSelectorTitle, PreviousIconContainer } from './InitialAddMeal.styles'
import {ReactComponent as PlusIcon} from '../../../assets/plusIcon.svg'

import {ReactComponent as BreakfastIcon} from '../../../assets/breakfast.svg'
import {ReactComponent as Lunchcon} from '../../../assets/lunch.svg'
import {ReactComponent as DinnerIcon} from '../../../assets/dinner.svg'
import {ReactComponent as SnackIcon} from '../../../assets/snack.svg'

import SelectMealDay from '../../selectMealDay/SelectMealDay'
import { FoodAddContext } from '../../../context/FoodAddContext'
import { actionTypes } from '../../../context/UiContextReducer'
import { UiContext } from '../../../context/UiContext'

const InitIalAddMeal = () => {

    const {selectOccasion} = useContext(FoodAddContext)

    const occasionArray = [
        {mealIcon: <BreakfastIcon/>,occasion: 'Add Breakfast', value: 'breakfast', addIcon: <PlusIcon/>},
        {mealIcon: <Lunchcon/>, occasion: 'Add Lunch' , value:'lunch', addIcon: <PlusIcon/>},
        {mealIcon: <DinnerIcon/>, occasion: 'Add Dinner', value:'dinner',addIcon: <PlusIcon/> },
        {mealIcon: <SnackIcon/>, occasion: 'Add Snack', value:'snack',addIcon: <PlusIcon/>}
    ]

    const {showAddMealModal, UiToggleHelper,finishAddingMeal} = useContext(UiContext)

 
    const getOccasionValue = (value) => {
selectOccasion(value)
UiToggleHelper(actionTypes.SHOW_ADD_MEAL_MODAL, showAddMealModal)

    }




  return (
    <InitialAddMealContainer>
        <InitialAddMealTitle>Let's Add Our Meal</InitialAddMealTitle>
        <InitialAddMealDateContainer>
            <SelectMealDay/>
        </InitialAddMealDateContainer>
<OccasionSelectorContainer >
{occasionArray.map(occasion => {
            return  <OccasionSelectorItem key={occasion.occasion} onClick={() => getOccasionValue(occasion.value)}>
            <OccasionSelectorMealIconContainer>
            {occasion.mealIcon}
            </OccasionSelectorMealIconContainer>
            <OccasionSelectorTitle>{occasion.occasion}</OccasionSelectorTitle>
            <OccasionSelectorAddIconContainer>
                {occasion.addIcon}
            </OccasionSelectorAddIconContainer>
        </OccasionSelectorItem>
        })}
</OccasionSelectorContainer>
       
    </InitialAddMealContainer>
  )
}

export default InitIalAddMeal