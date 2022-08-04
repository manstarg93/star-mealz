import React, { Fragment, useContext, useEffect } from 'react'
import DeleteModal from '../../components/deleteButtton/DeleteModal'
import EditMealModal from '../../components/editMeal/EditMealModal'
import EditDeleteModal from '../../components/meal/EditDeleteModal'

import Meal from '../../components/meal/Meal'
import { AuthContext } from '../../context/AuthContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'


import { MealPlanContainer } from './MealPlan.styles'

const MealPlan = () => {

  const {updateDatabase} =useContext(MealContext)
  const {userId} = useContext(AuthContext)
  const {showEditDeleteModal,UiToggleHelper} = useContext(UiContext)

  useEffect(() => {

    updateDatabase(userId)

    if(showEditDeleteModal){
    

      UiToggleHelper(actionTypes.SHOW_EDIT_DELETE_MODAL, showEditDeleteModal)
    }
},[userId])
   
  return (
    <Fragment>
    <MealPlanContainer>
        <Meal/>
    </MealPlanContainer>
    <DeleteModal/>
    <EditMealModal />
    <EditDeleteModal/>
    </Fragment>

  )
}

export default MealPlan