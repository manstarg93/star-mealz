import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FoodAddContext } from '../../context/FoodAddContext'
import { RecipieContext } from '../../context/RecipieContext'
import { UiContext } from '../../context/UiContext'
import AddMeal from '../addMeal/AddMeal'
import ClearMeal from '../clearMeal/ClearMeal'
import MealTitle from '../mealTitle/MealTitle'
import SelectMealDay from '../selectMealDay/SelectMealDay'
import SelectMealOccasion from '../selectMealOccasion/SelectMealOccasion'
import SelectMealWeight from '../selectMealWeight/SelectMealWeight'

import {  AddRemoveContainer, FoodListContainer, FoodListItems } from './FoodList.styles'




const FoodList = ({food}) => {
   

    const {addMeal, foodAddingValues} = useContext(FoodAddContext)
    const {showloginSignUpHandler} = useContext(UiContext)
  const {addMealRecipieHandler} = useContext(RecipieContext)

    const {userId} = useContext(AuthContext)

      const addMealHandler = async (event) => {
event.preventDefault()

if (userId === null) {
  showloginSignUpHandler()
  return
}

const foodId = Math.random(3)
        
          addMeal(userId,foodId)
          addMealRecipieHandler(userId, foodAddingValues.mealTitle,foodId)
     
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
           
        <AddMeal />
           </AddRemoveContainer>
         
      
    </FoodListContainer>
  )
}

export default FoodList