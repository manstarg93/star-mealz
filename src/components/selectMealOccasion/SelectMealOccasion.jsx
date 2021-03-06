import React, { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealOccasionSelector } from './SelectMealOccasion.styles'


const SelectMealOccasion = () => {

    const {selectOccasion,foodAddingValues } = useContext(FoodAddContext)

    const mealAddHandler = (event) => {

        selectOccasion(event.target.value)
       
        
    }

    const options = [
    
      { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'snack', label: 'Snack' },
  { value: 'dinner', label: 'Dinner' }
    ]
  return (
    <MealOccasionSelector label='Occasion' required name={foodAddingValues.selectedOccasion} value={foodAddingValues.selectedOccasion} onChange={mealAddHandler}    >
      {options.map(option => {
        return(
          <option key={option.value} value={option.value}>{option.label}</option>
        )
      })}
    </MealOccasionSelector>
  )
}

export default SelectMealOccasion