
import React from 'react'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealTitleInput } from './MealTitle.styles'

const MealTitle = () => {
    const {foodAddingValues, mealTitleHandler} = useContext(FoodAddContext)

const mealTitleHandle = (event) => {

    mealTitleHandler(event.target.value)
}
  return (
   <MealTitleInput required label='Meal Title' name={foodAddingValues.mealTitle} value={foodAddingValues.mealTitle} onChange={mealTitleHandle} placeholder='Enter meal title' />
  )
}

export default MealTitle