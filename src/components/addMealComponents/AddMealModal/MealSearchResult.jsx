import React, { useContext } from 'react'
import { FoodAddContext } from '../../../context/FoodAddContext'
import { UiContext } from '../../../context/UiContext'
import { actionTypes } from '../../../context/UiContextReducer'
import { MealSearchResultContainer, MealSearchResultListContainer, MealSearchResultLists, MealServingCalories } from './MealSearchResult.styles'

const MealSearchResult = () => {
    const {UiToggleHelper,showMealSearch,finishAddingMeal,showAddMealModal} = useContext(UiContext)
    const {mealSearchResult,mealTitleHandler,mealTitle} = useContext(FoodAddContext)

    const getMealSearchResult = (meal) => {
       
        mealTitleHandler(meal)
        UiToggleHelper(actionTypes.SHOW_FINISH_ADDING_MEAL, finishAddingMeal)
        UiToggleHelper(actionTypes.SHOW_ADD_MEAL_MODAL, showAddMealModal)
    }
   let mealResultList;

    if(mealSearchResult.length !== 0){
        mealResultList = mealSearchResult.map(meal => {

            const mealCalories = meal.foodNutrients.filter(nutrient => nutrient.nutrientName === 'Energy')

            const finalCal = mealCalories.reduce((acc,curr) => curr.value ,[])
            
          
            return <MealSearchResultListContainer onClick={() => getMealSearchResult(meal)} key={meal.fdcId}>
            
           <MealSearchResultLists>{meal.description.toLowerCase()}</MealSearchResultLists>
           <MealServingCalories>Brand: {meal.brandOwner || 'Public'}</MealServingCalories>
           <MealServingCalories>{finalCal} kcal</MealServingCalories>
           <MealServingCalories>1 serving: {meal.servingSize || meal.foodMeasures.reduce((acc,curr) => curr.gramWeight,0)} <span>grams</span></MealServingCalories>
           
           
            </MealSearchResultListContainer>
        })
    }

   

   
   
  return (
    <MealSearchResultContainer show={showMealSearch}>
        {mealResultList ? mealResultList : null}
       
    </MealSearchResultContainer>
  )
}

export default MealSearchResult