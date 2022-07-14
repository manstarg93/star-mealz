import React, { Fragment, useContext } from 'react'
import DeleteModal from '../../components/deleteButtton/DeleteModal'
import EditMealModal from '../../components/editMeal/EditMealModal'

import Meal from '../../components/meal/Meal'
import { MealContext } from '../../context/MealContext'


import { MealPlanContainer } from './MealPlan.styles'

const MealPlan = () => {

  const {selectedId} = useContext(MealContext)

   
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