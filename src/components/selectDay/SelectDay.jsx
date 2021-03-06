import React, { useContext} from 'react'
import { MealContext } from '../../context/MealContext'
import { SelectDayContainer, SelectDaySelect } from './SelectDay.styles'

const SelectDay = () => {

  const {selectDay,selectedDay} = useContext(MealContext)


    const daySelectHandler = (event) => {
selectDay(event.target.value)
    }



   
  return (
    <SelectDayContainer>
<SelectDaySelect label='pick a day' name='selectday' value={selectedDay} onChange={daySelectHandler}>
        <option value='monday'>Monday</option>
        <option value='tuesday'>Tuesday</option>
        <option value='wednesday'>Wednesday</option>
        <option value='thursday'>Thursday</option>
        <option value='friday'>Friday</option>
        <option value='saturday'>Saturday</option>
        <option value='sunday'>Sunday</option>

    
    </SelectDaySelect>
    </SelectDayContainer>
  )
}

export default SelectDay