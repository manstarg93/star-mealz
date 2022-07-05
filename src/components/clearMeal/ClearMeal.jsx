import React from 'react'
import { ClearMealContainer } from './ClearMeal.styles'
import {ReactComponent as ClearIcon} from '../../assets/removeicon.svg'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
const ClearMeal = (props) => {
    const {id} = props


    const {clearMealHandler} = useContext(FoodAddContext)

    const clearMealToAdd = () => {
        clearMealHandler(id)
    }
  return (
    <ClearMealContainer>

        <ClearIcon onClick={clearMealToAdd}/>
      
 
    </ClearMealContainer>
  
  )
  
  
}

export default ClearMeal