import React from 'react'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import AddMeal from '../addMeal/AddMeal'
import ClearMeal from '../clearMeal/ClearMeal'
import MealTitle from '../mealTitle/MealTitle'
import SelectMealDay from '../selectMealDay/SelectMealDay'
import SelectMealOccasion from '../selectMealOccasion/SelectMealOccasion'
import SelectMealWeight from '../selectMealWeight/SelectMealWeight'

import {  AddRemoveContainer, FoodAddFeedback, FoodListContainer, FoodListItems } from './FoodList.styles'




const FoodList = ({food}) => {
   

    const {selectedOccasion, selectedWeight, mealTitle } = useContext(FoodAddContext)
  return (
    <FoodListContainer>  <FoodListItems>
    
    <SelectMealDay/>
    </FoodListItems>
       <FoodListItems>
    
       <MealTitle/>
       </FoodListItems>

       <FoodListItems>
<SelectMealWeight/>
       </FoodListItems>

      
       <FoodListItems>
          <SelectMealOccasion/>
       </FoodListItems>

       <FoodListItems>
           <AddRemoveContainer>
           <ClearMeal />
        <AddMeal 
        mealTitle={mealTitle}
        selectedOccasion={selectedOccasion} 
        selectedWeight={selectedWeight} 
        
        />
           </AddRemoveContainer>
         
       </FoodListItems>
    </FoodListContainer>
  )
}

export default FoodList