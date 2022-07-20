import React, { Fragment, useContext, useEffect } from 'react'
import DeleteModal from '../../components/deleteButtton/DeleteModal'
import EditMealModal from '../../components/editMeal/EditMealModal'

import Meal from '../../components/meal/Meal'
import { AuthContext } from '../../context/AuthContext'
import { MealContext } from '../../context/MealContext'


import { MealPlanContainer } from './MealPlan.styles'

const MealPlan = () => {

  const {updateDatabase} =useContext(MealContext)
  const {userId} = useContext(AuthContext)

  useEffect(() => {
    
    updateDatabase(userId)
},[userId])
   
  return (
    <Fragment>
    <MealPlanContainer>
        <Meal/>
    </MealPlanContainer>
    <DeleteModal/>
    <EditMealModal />
    </Fragment>

  )
}

export default MealPlan