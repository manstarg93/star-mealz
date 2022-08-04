import React, { useContext} from 'react'
import { MealContext } from '../../context/MealContext';
import { AddMealContainer, MealItemsContainer, MealItemsHeader, MealItemsHeading, MealItemsLi, MealItemsUl,  TotalWeight, TotalWeightContainer} from './MealItems.styles'


import { UiContext } from '../../context/UiContext';

import { actionTypes } from '../../context/UiContextReducer';
import LoadingSpinner from '../ui/loading/LoadingSpinner';

const MealItems = props => {

    const {selectedDay,saveSelectedId,databaseMeal,saveMappedMeal} = useContext(MealContext)
   const {UiToggleHelper,showEditDeleteModal} = useContext(UiContext)

   let mealPlanbyday;
   let totalCalories;




const editDeleteModalHandler = (mappedMeal) => {

saveSelectedId(mappedMeal.id)
saveMappedMeal(mappedMeal)
UiToggleHelper(actionTypes.SHOW_EDIT_DELETE_MODAL, showEditDeleteModal)
}


if(!databaseMeal){
   mealPlanbyday = <LoadingSpinner/>
}
  
else if(databaseMeal.length !== 0){

   const totalDayCalories = databaseMeal.filter(meal => meal.day.toLowerCase() === selectedDay.toLowerCase()).reduce((acc, curr) => acc + parseInt(curr.totalCalories), 0 )

   const selectedMealDay =  databaseMeal.filter(meal => meal.day.toLowerCase() === selectedDay.toLowerCase())

   if(selectedMealDay.length === 0){
      mealPlanbyday = <AddMealContainer>Add a meal for {selectedDay}</AddMealContainer>
   }
   else{
      totalCalories = <TotalWeight>Total Calories: {totalDayCalories?totalDayCalories:0}Kcal </TotalWeight>
      mealPlanbyday = databaseMeal.filter(meal => meal.day.toLowerCase() === selectedDay.toLowerCase()).sort((a,b) => a.occasion.localeCompare(b.occasion)).map(mappedMeal => {

         return(
   
     <MealItemsUl onClick={() => editDeleteModalHandler(mappedMeal)} key={mappedMeal.id}>
            <MealItemsLi >
               
               {mappedMeal.occasion} 
            </MealItemsLi>
            <MealItemsLi >
               {mappedMeal.mealInfo.description.toLowerCase()}
            </MealItemsLi>
            <MealItemsLi >
            {mappedMeal.totalCalories.toFixed(0)} <span>Kcal</span> - ({mappedMeal.totalWeight} <span>g</span>)
    
            </MealItemsLi>
            
            
       
            </MealItemsUl>
           
          
        )
        
      })
   }



}

   

   
 
  return (
    
    <MealItemsContainer>
        <MealItemsHeader>
            <MealItemsHeading>Occasion</MealItemsHeading>
            <MealItemsHeading>Title</MealItemsHeading>
            <MealItemsHeading>Calories </MealItemsHeading>
           
        </MealItemsHeader>
        {mealPlanbyday}
       <TotalWeightContainer
       >
         {totalCalories}
          
       </TotalWeightContainer>
       
    </MealItemsContainer>
  )
}

export default MealItems