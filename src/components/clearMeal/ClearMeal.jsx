import React from 'react'
import { ClearButton, ClearMealContainer } from './ClearMeal.styles'
import {ReactComponent as ClearIcon} from '../../assets/removeicon.svg'
import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'
const ClearMeal = (props) => {

    const {clearMealHandler} = useContext(FoodAddContext)

    const {finishAddingMeal,UiToggleHelper,showAddMealModal} = useContext(UiContext)

    const clearMealToAdd = () => {
        UiToggleHelper(actionTypes.SHOW_FINISH_ADDING_MEAL, finishAddingMeal)
          UiToggleHelper(actionTypes.SHOW_ADD_MEAL_MODAL, showAddMealModal)
          
    }
  return (
    <ClearMealContainer>

        <ClearIcon onClick={clearMealToAdd}/>
        <ClearButton onClick={clearMealToAdd}>Clear Entry</ClearButton>
 
    </ClearMealContainer>
  
  )
  
  
}

export default ClearMeal