import React from 'react'
import { ClearButton, ClearMealContainer } from './ClearMeal.styles'
import {ReactComponent as ClearIcon} from '../../assets/removeicon.svg'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
const ClearMeal = (props) => {

    const {clearMealHandler} = useContext(FoodAddContext)

    const clearMealToAdd = () => {
        clearMealHandler()
    }
  return (
    <ClearMealContainer>

        <ClearIcon onClick={clearMealToAdd}/>
        <ClearButton onClick={clearMealToAdd}>Clear Entry</ClearButton>
 
    </ClearMealContainer>
  
  )
  
  
}

export default ClearMeal