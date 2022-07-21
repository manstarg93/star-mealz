import React, { Fragment, useContext, useEffect } from 'react'
import DeleteModal from '../../components/deleteButtton/DeleteModal'
import EditMealModal from '../../components/editMeal/EditMealModal'
import EditDeleteModal from '../../components/meal/EditDeleteModal'

import Meal from '../../components/meal/Meal'
import { AuthContext } from '../../context/AuthContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'


import { MealPlanContainer } from './MealPlan.styles'

const MealPlan = () => {

  const {updateDatabase} =useContext(MealContext)
  const {userId} = useContext(AuthContext)
  const {showEditDeleteModal,showEditDeleteModalHandler} = useContext(UiContext)

  useEffect(() => {
    
    updateDatabase(userId)

    if(showEditDeleteModal){
      showEditDeleteModalHandler()
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