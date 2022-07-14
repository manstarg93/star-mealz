import React from 'react'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { ServingSize } from './SelectMealWeight.styles'

const SelectMealWeight = () => {

    const {selectMealWeight, foodAddingValues} = useContext(FoodAddContext)

    const weightSelectHandler = (event) => {
selectMealWeight(event.target.value)
    }

  return (
    <ServingSize label='Calories' required  name={foodAddingValues.selectedWeight} value={foodAddingValues.selectedWeight} onChange={weightSelectHandler}  type='number'  placeholder='Enter Calories: Kcal'/>
  )
}

export default SelectMealWeight