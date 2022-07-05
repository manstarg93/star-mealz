
import React from 'react'
import { useContext } from 'react'
import {ReactComponent as AddMealIcon} from '../../assets/checkedwborder.svg'
import { FoodAddContext } from '../../context/FoodAddContext'
import { AddButton, AddMealContainer } from './AddMeal.styles'

const AddMeal = props => {



    const {addMeal} = useContext(FoodAddContext)
    const addMealHandler = () => {

        const id=Math.random()
       
        addMeal(id)
        
    }
  return (
      <AddMealContainer>
<AddMealIcon onClick={addMealHandler}/>
<AddButton onClick={addMealHandler}>Add Meal</AddButton>
      </AddMealContainer>
   
  )
}

export default AddMeal