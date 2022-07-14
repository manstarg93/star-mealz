import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FoodAddContext } from '../../context/FoodAddContext'
import { addDocumentToCollection, docData } from '../../util/firebase.utils'
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
<MealItems />
        
       
     
      
</MealListItemsContainer>
    
      
    </MealContainer>
  )
}

export default Meal