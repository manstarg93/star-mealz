
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { UiContext } from '../../context/UiContext'
import { useInput } from '../../hooks/inputHook'

import { MealTitleInput } from './MealTitle.styles'

const MealTitle = () => {
    const {getMealSearchResultHandler,mealTitle} = useContext(FoodAddContext)

    const {showMealSearchHandler,hideMealSearchHandler,showAddMealModal,finishAddingMeal}  = useContext(UiContext)

    useEffect(() => {
if(mealTitle === ''){
hideMealSearchHandler()
}
    },[mealTitle])

    useEffect(() => {
      if(!showAddMealModal && !finishAddingMeal){
        getMealSearchResultHandler('')
      }
          },[showAddMealModal,finishAddingMeal])



const mealTitleHandle = (event) => {


    getMealSearchResultHandler(event.target.value)
    showMealSearchHandler()

}
  return (
   <MealTitleInput required label='Meal Title' type='search' name={mealTitle}  value={mealTitle} onChange={mealTitleHandle} placeholder='Enter meal title' />
  )
}

export default MealTitle