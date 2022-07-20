import React from 'react'




import { MealContainer, MealListItemsContainer, MyMealLists,  SelectDayInput } from './Meal.styles'
import MealItems from './MealItems'

const Meal = () => {
  
  return (
    <MealContainer>
<MyMealLists>
<SelectDayInput/>

</MyMealLists>
<MealListItemsContainer>
<MealItems />
        
       
     
      
</MealListItemsContainer>
    
      
    </MealContainer>
  )
}

export default Meal