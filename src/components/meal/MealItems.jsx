import React, { useContext} from 'react'
import { MealContext } from '../../context/MealContext';
import { AddMealContainer, CalDelEdit, MealCal, MealCrudContainer, MealItemsContainer, MealItemsHeader, MealItemsHeading, MealItemsLi, MealItemsUl,  TotalWeight, TotalWeightContainer, ViewRecipie } from './MealItems.styles'

import DeleteButton from '../deleteButtton/DeleteButtton';
import EditIcon from '../editMeal/EditIcon';
import { UiContext } from '../../context/UiContext';



import {useNavigate} from 'react-router-dom'

const MealItems = props => {

    const {selectedDay,saveSelectedId,databaseMeal} = useContext(MealContext)
   const {showEditModalHandler} = useContext(UiContext)
   let mealPlanbyday;
const navigate = useNavigate()
   const editItemHandler  =(mappedMeal) => {

      saveSelectedId(mappedMeal.id)
      showEditModalHandler()
  }

  const viewRecipieHandler = (mealTitle) => {
     

     navigate(`/myrecipies/${mealTitle.toLowerCase()}`)
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
            <MealItemsLi >
            {mappedMeal.selectedWeight}Kcal
    
            </MealItemsLi>
            <MealItemsLi>
               <CalDelEdit>
                  <MealCal>
                  <ViewRecipie onClick={() => viewRecipieHandler(mappedMeal.mealTitle)}>Recipie</ViewRecipie>
                  </MealCal>
               <MealCrudContainer>
          <DeleteButton id={mappedMeal.id} mealTitle={mappedMeal.mealTitle}/>
           
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
            <MealItemsHeading>Recipie </MealItemsHeading>
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