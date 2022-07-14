import React, { Fragment, useContext, useEffect, useState} from 'react'
import { MealContext } from '../../context/MealContext';
import { AddMealContainer, CalDelEdit, MealCal, MealCrudContainer, MealItemsContainer, MealItemsHeader, MealItemsHeading, MealItemsLi, MealItemsUl,  TotalWeight, TotalWeightContainer } from './MealItems.styles'

import DeleteButton from '../deleteButtton/DeleteButtton';
import EditIcon from '../editMeal/EditIcon';
import { docData } from '../../util/firebase.utils';
import { UiContext } from '../../context/UiContext';
import { FoodAddContext } from '../../context/FoodAddContext';

const MealItems = props => {

    const {selectedDay,databaseMeal,saveSelectedId} = useContext(MealContext)
   const {showEditModalHandler} = useContext(UiContext)
   const {selectMealWeight,foodAddingValues, mealTitleHandler,setMealModalHandler} = useContext(FoodAddContext)
   let mealPlanbyday;

   const editItemHandler  =(mappedMeal) => {

      setMealModalHandler(mappedMeal)
      saveSelectedId(mappedMeal.id)
      showEditModalHandler()

      
  }




  

 

   const totalDayCalories = databaseMeal.filter(meal => meal.selectedMealDay.toLowerCase() === selectedDay.toLowerCase()).reduce((acc, curr) => acc + parseInt(curr.selectedWeight), 0 )

   const selectedMealDay =  databaseMeal.filter(meal => meal.selectedMealDay.toLowerCase() === selectedDay.toLowerCase())

   if(selectedMealDay.length === 0){
      mealPlanbyday = <AddMealContainer>Add a meal for {selectedDay}</AddMealContainer>
   }
   else{
      mealPlanbyday = databaseMeal.filter(meal => meal.selectedMealDay.toLowerCase() === selectedDay.toLowerCase()).sort((a,b) => a.selectedOccasion.localeCompare(b.selectedOccasion)).map(mappedMeal => {

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
           
           <EditIcon onClick={() => editItemHandler(mappedMeal)}/>
           
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
          {selectedMealDay.length  !== 0 && <TotalWeight>Total Calories: {totalDayCalories?totalDayCalories:0}Kcal </TotalWeight>}
          
       </TotalWeightContainer>
       
    </MealItemsContainer>
  )
}

export default MealItems