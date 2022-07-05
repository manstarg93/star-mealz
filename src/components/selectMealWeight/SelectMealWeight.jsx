import React from 'react'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { ServingSize } from './SelectMealWeight.styles'

const SelectMealWeight = () => {

    const {selectMealWeight, selectedWeight} = useContext(FoodAddContext)

    const weightSelectHandler = (event) => {
selectMealWeight(parseInt(event.target.value))
    }

  return (
    <ServingSize label='Calories' name='calories' value={selectedWeight} onChange={weightSelectHandler}  type='number'  placeholder='Enter Calories: Kcal'/>
  )
}

export default SelectMealWeight