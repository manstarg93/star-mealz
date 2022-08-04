import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
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


import {  AddRemoveContainer, FoodListContainer, FoodListItems, MealSearchText, MealSearchTextContainer } from './FoodList.styles'



const FoodList = ({food}) => {
   
const navigate = useNavigate()

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
          await addMealRecipieHandler(userId, foodAddingValues.mealTitle,foodId)
          navigate('/myrecipies')
      }

  return (
    <FoodListContainer onSubmit={addMealHandler}> 
       
      {/* <FoodListItems>
    
    <SelectMealDay/>

    </FoodListItems> */}
       <FoodListItems>
    
       
       </FoodListItems>

    

      
       {/* <FoodListItems>
          <SelectMealOccasion/>
       </FoodListItems>

       
           <AddRemoveContainer>
           <ClearMeal />
           
        <AddMeal />
           </AddRemoveContainer> */}
         
      
    </FoodListContainer>
  )
}

export default FoodList