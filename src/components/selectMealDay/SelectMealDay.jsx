import React, { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { SelectMealDaySelect } from './selectMealDay.styles'

const SelectMealDay = () => {

    const {selectMealDay,foodAddingValues} = useContext(FoodAddContext)
    const mealDaySelectHandler = (event) => {
        selectMealDay(event.target.value)
        
            }


  return (
    <SelectMealDaySelect label='Pick a day' name='mealday' value={foodAddingValues.selectedMealDay}  onChange={mealDaySelectHandler}>
    
        <option value='monday'>Monday</option>
        <option value='tuesday'>Tuesday</option>
        <option value='wednesday'>Wednesday</option>
        <option value='thursday'>Thursday</option>
        <option value='friday'>Friday</option>
        <option value='saturday'>Saturday</option>
        <option value='sunday'>Sunday</option>
    </SelectMealDaySelect>
  )
}

export default SelectMealDay