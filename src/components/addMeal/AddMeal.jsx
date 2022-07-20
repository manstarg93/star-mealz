
import React from 'react'

import {ReactComponent as AddMealIcon} from '../../assets/checkedwborder.svg'


import { AddButton, AddMealContainer } from './AddMeal.styles'


const AddMeal = props => {

  return (
      <AddMealContainer>
<AddMealIcon type='submit'/>
<AddButton type='submit'>Add Meal</AddButton>
      </AddMealContainer>
   
  )
}

export default AddMeal