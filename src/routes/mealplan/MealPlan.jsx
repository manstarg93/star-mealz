import React, { Fragment } from 'react'
import DeleteModal from '../../components/deleteButtton/DeleteModal'
import EditMealModal from '../../components/editMeal/EditMealModal'

import Meal from '../../components/meal/Meal'


import { MealPlanContainer } from './MealPlan.styles'

const MealPlan = () => {

    

   
  return (
    <Fragment>
    <MealPlanContainer>
        <Meal/>
    </MealPlanContainer>
    <DeleteModal/>
    <EditMealModal/>
    </Fragment>

  )
}

export default MealPlan