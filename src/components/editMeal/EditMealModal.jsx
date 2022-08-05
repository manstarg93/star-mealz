import React, { Fragment, useContext, useEffect, useState,  } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FoodAddContext } from '../../context/FoodAddContext'
import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'
import {ReactComponent as CloseIcon} from '../../assets/close.svg'


import Modal from '../ui/modal/Modal'
import {  ConfirmButtonContainer, ConfirmEditButton, EditModalContainer,   MainNutritionContainer, MealAddingFormContainer,  Nutrition, NutritionalInformationContainer, NutritionalInformationTitle, NutritionContainer, NutritionSize, SearvingText, ServingAndCalorieCountContainer, ServingInput, ServingInputContainer, TotalCalories, TotalCaloriesText } from './EditMealModal.styles'
import { CaloriesTextContainer,ServingCalorieCount } from '../finishAddingMeal/MealAdding.Styles'
import LoadingSpinner from '../ui/loading/LoadingSpinner'

const EditMealModal = () => {

  let mySelectedMealToEdit;
let finalCal;
let totalWeight;
let servingValue
  const {showEditModal,UiToggleHelper} = useContext(UiContext)
  const {updateMealHandler} = useContext(FoodAddContext)
  const {selectedId,updateDatabase,mealInfo} = useContext(MealContext)
 
  const {userId} = useContext(AuthContext)



  const [mealServing, setMealSearving] = useState({
    servingInput: 1,
    touched: false
  })
  useEffect(() => {
    if(mealInfo){
      setMealSearving({
        ...mealServing,
        mealServing: mealInfo.serving
      })
    }
  },[])

 



    

    const cancelEdithandler =  () => {

     UiToggleHelper(actionTypes.SHOW_EDIT_MODAL, showEditModal)
   
     setMealSearving({
      ...mealServing,
      touched: false
    })
  }

        const servingInputHandler = (event) => {
       
          setMealSearving({
            servingInput: event.target.value,
            touched: true
          })
      }
      
      const EditItemHandler = async(event,selectedMeal,totalWeight,finalCal,servingValue) => {
        event.preventDefault()

     await updateMealHandler(selectedId,userId,selectedMeal,totalWeight,finalCal,servingValue).then(() => {
      updateDatabase(userId)
      UiToggleHelper(actionTypes.SHOW_EDIT_MODAL, showEditModal)
     })
     setMealSearving({
      ...mealServing,
      touched: false
    })

              }
   




if(showEditModal && !mealInfo ){
mySelectedMealToEdit = <LoadingSpinner/>
}
     else if( mealInfo){

      const mealCalories = mealInfo.mealInfo.foodNutrients.filter(nutrient => nutrient.nutrientName === 'Energy').reduce((acc,curr) => curr.value ,[])


      if(!mealServing.touched){
        totalWeight = mealInfo.totalWeight
        finalCal = mealInfo.totalCalories
        servingValue = mealInfo.serving
      }
      else if(mealServing.touched && mealInfo){
        totalWeight = mealInfo.mealInfo.servingSize * mealServing.servingInput || mealInfo.mealInfo.foodMeasures.reduce((acc,curr) => curr.gramWeight,0)  * mealServing.servingInput
        finalCal = parseInt(mealCalories) * mealServing.servingInput
        servingValue = mealServing.servingInput
      }


      mySelectedMealToEdit = <EditModalContainer 
      as={Modal}  
      close={cancelEdithandler} 
      title={`${mealInfo ? mealInfo.mealInfo.description.toLowerCase() : 'Meal'}`}
       show={showEditModal}>
      
        

       <MealAddingFormContainer  onSubmit={(event) => EditItemHandler(event,mealInfo,totalWeight,finalCal,servingValue)}>
           <ServingAndCalorieCountContainer>
           <ServingInputContainer>

<ServingInput required type='number' value={servingValue}  onChange={servingInputHandler} placeholder={'serving size'}/>
<SearvingText>Serving</SearvingText>
</ServingInputContainer>
<ServingCalorieCount>
 <CaloriesTextContainer>
     <TotalCaloriesText>Weight: </TotalCaloriesText> <TotalCalories>{totalWeight}<span> g</span></TotalCalories>  
     </CaloriesTextContainer>
 
     <CaloriesTextContainer>
     <TotalCaloriesText>Total Calories: </TotalCaloriesText> <TotalCalories>{ finalCal }<span> kcal</span></TotalCalories> 
     </CaloriesTextContainer>
 
   
            
            </ServingCalorieCount>
           </ServingAndCalorieCountContainer>
           

           {mealInfo &&  
           <NutritionalInformationContainer>
               <NutritionalInformationTitle>
                   Nutritional  Information
               </NutritionalInformationTitle>
              
              {  mealInfo.mealInfo.foodNutrients.map(nutrient => {
          return(
              <NutritionContainer key={nutrient.nutrientId}>
              <MainNutritionContainer>
              <Nutrition>{nutrient.nutrientName}</Nutrition>
             <NutritionSize>{nutrient.value} {nutrient.unitName}</NutritionSize>
              </MainNutritionContainer>
     
       
  
          </NutritionContainer>
          )
      })}
 
             
           </NutritionalInformationContainer>
        
           }



<ConfirmButtonContainer>
           
           <ConfirmEditButton type='submit' >Confirm</ConfirmEditButton>
       </ConfirmButtonContainer>
           </MealAddingFormContainer>
      
      </EditModalContainer>



}
return mySelectedMealToEdit
}
export default EditMealModal