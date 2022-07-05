import React from 'react'
import SelectDay from '../selectDay/SelectDay'



import { MealContainer, MealListItemsContainer, MyMealLists, MealListTitle, SelectDayInput } from './Meal.styles'
import MealItems from './MealItems'

const Meal = () => {
  return (
    <MealContainer>
<MyMealLists>
<SelectDayInput/>

</MyMealLists>
<MealListItemsContainer>
<MealItems/>
        
       
     
      
</MealListItemsContainer>
    
      
    </MealContainer>
  )
}

export default Meal