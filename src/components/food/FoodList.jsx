import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FoodAddContext } from '../../context/FoodAddContext'
import AddMeal from '../addMeal/AddMeal'
import ClearMeal from '../clearMeal/ClearMeal'
import MealTitle from '../mealTitle/MealTitle'
import { MealTitleInput } from '../mealTitle/MealTitle.styles'
import SelectMealDay from '../selectMealDay/SelectMealDay'
import SelectMealOccasion from '../selectMealOccasion/SelectMealOccasion'
import SelectMealWeight from '../selectMealWeight/SelectMealWeight'

import {  AddRemoveContainer, FoodAddFeedback, FoodListContainer, FoodListItems } from './FoodList.styles'




const FoodList = ({food}) => {
   

    const {addMeal, } = useContext(FoodAddContext)


    const {userId} = useContext(AuthContext)

      const addMealHandler = async (event) => {
event.preventDefault()

          addMeal(userId)
     
      }

  return (
    <FoodListContainer onSubmit={addMealHandler}> 
       
      <FoodListItems>
    
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

       
           <AddRemoveContainer>
           <ClearMeal />
           
        <AddMeal 
        />
           </AddRemoveContainer>
         
      
    </FoodListContainer>
  )
}

export default FoodList