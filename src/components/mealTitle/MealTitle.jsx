
import React from 'react'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealTitleInput } from './MealTitle.styles'

const MealTitle = () => {
    const {mealTitle, mealTitleHandler} = useContext(FoodAddContext)

const mealTitleHandle = (event) => {

    mealTitleHandler(event.target.value)
}
  return (
   <MealTitleInput label='Meal Title' name='mealtitle' value={mealTitle} onChange={mealTitleHandle} placeholder='Enter meal title' />
  )
}

export default MealTitle