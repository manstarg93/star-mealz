import React, { Fragment, useContext} from 'react'
import { MealContext } from '../../context/MealContext';
import { AddMealContainer, CalDelEdit, MealCal, MealCrudContainer, MealItemsContainer, MealItemsHeader, MealItemsHeading, MealItemsLi, MealItemsUl,  TotalWeight, TotalWeightContainer } from './MealItems.styles'
import {FoodAddContext} from '../../context/FoodAddContext'
import DeleteButton from '../deleteButtton/DeleteButtton';
import EditIcon from '../editMeal/EditIcon';
const MealItems = () => {

    const {selectedDay} = useContext(MealContext)
    const {meals} = useContext(FoodAddContext)
   let mealPlanbyday;

   const totalDayCalories = meals.filter(meal => meal.selectedMealDay.toLowerCase() === selectedDay.toLowerCase()).reduce((acc, curr) => acc + curr.selectedWeight, 0 )

   const selectedMealDay =  meals.filter(meal => meal.selectedMealDay.toLowerCase() === selectedDay.toLowerCase())

   if(selectedMealDay.length === 0){
      mealPlanbyday = <AddMealContainer>Add a meal for {selectedDay}</AddMealContainer>
   }
   else{
      mealPlanbyday = meals.filter(meal => meal.selectedMealDay.toLowerCase() === selectedDay.toLowerCase()).sort((a,b) => a.selectedOccasion.localeCompare(b.selectedOccasion)).map(mappedMeal => {

         return(
   
     <MealItemsUl key={mappedMeal.id}>
            <MealItemsLi >
               
               {mappedMeal.selectedOccasion} 
            </MealItemsLi>
            <MealItemsLi >
               {mappedMeal.mealTitle}
            </MealItemsLi>
            <MealItemsLi>
               <CalDelEdit>
                  <MealCal>
                  {mappedMeal.selectedWeight}Kcal
                  </MealCal>
             
               <MealCrudContainer>
          <DeleteButton id={mappedMeal.id}/>
           
           <EditIcon id={mappedMeal.id}/>
           
        </MealCrudContainer>
               </CalDelEdit>
             
            </MealItemsLi>
            
       
            </MealItemsUl>
           
          
        )
        
      })
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
          {selectedMealDay.length  !== 0 && <TotalWeight>Total Calories: {totalDayCalories}Kcal </TotalWeight>}
          
       </TotalWeightContainer>
       
    </MealItemsContainer>
  )
}

export default MealItems