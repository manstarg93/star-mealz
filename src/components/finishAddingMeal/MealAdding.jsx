import React, { useContext, useEffect, useState } from 'react'
import { UiContext } from '../../context/UiContext'
import {AuthContext} from '../../context/AuthContext'
import { AddMealButtonContainer, CalorieCountAndNutritionContainer, CaloriesTextContainer, CloseMealAddingIconContainer, FeedBackMessageErrorContainer, FeedBackMessageSuccessContainer, MainNutritionContainer, MealAddingContainer, MealAddingFormContainer, MealAddingHeaderContainer, MealAddingTitle, MinorNutrition, MinorNutritionContainer, Nutrition, NutritionalInformation, NutritionalInformationContainer, NutritionalInformationTitle, NutritionContainer, NutritionSize, SearvingText, ServingAndCalorieCountContainer, ServingCalorieCount, ServingInput, ServingInputContainer, TotalCalories, TotalCaloriesText } from './MealAdding.Styles'
import Modal from '../ui/modal/Modal'
import { actionTypes } from '../../context/UiContextReducer'
import {ReactComponent as CloseIcon} from '../../assets/close.svg'
import { FoodAddContext } from '../../context/FoodAddContext'
import GoBackIcon from '../ui/icon/GoBackIcon'
import AddMeal from '../addMeal/AddMeal'
import { MealContext } from '../../context/MealContext'
import { useNavigate } from 'react-router'

const MealAdding = () => {

    const {finishAddingMeal, UiToggleHelper,showAddMealModal, showMealSearch,showInitialAddMealModal} = useContext(UiContext)
const {foodAddingValues,addMeal,verified,feedBackMessage} = useContext(FoodAddContext)
const {userId} = useContext(AuthContext)
const [servingInput, setServingInput] = useState(1)
const {updateDatabase} = useContext(MealContext)

const navigate = useNavigate()




    const closeMealAdding = () => {
        UiToggleHelper(actionTypes.SHOW_FINISH_ADDING_MEAL, finishAddingMeal)
        UiToggleHelper(actionTypes.SHOW_MEAL_SEARCH, showMealSearch)
    }

    const closeMealAddingHandler = () => {
        UiToggleHelper(actionTypes.SHOW_FINISH_ADDING_MEAL, finishAddingMeal)
        UiToggleHelper(actionTypes.SHOW_ADD_MEAL_MODAL, showAddMealModal
            )
    }

    const submitFormHandler = async(event) => {
event.preventDefault()
if(foodAddingValues.selectedMeal){
   
    const mealValues = {
        id: foodAddingValues.selectedMeal.fdcId,
        totalCalories: finalCal,
        totalWeight: weight,
        serving: servingInput,
        day: foodAddingValues.selectedMealDay,
        occasion: foodAddingValues.selectedOccasion,
        mealInfo: foodAddingValues.selectedMeal
    }

    await addMeal(userId, mealValues).then(res => {
        updateDatabase(userId)
    })
}


    setServingInput(1)
    UiToggleHelper(actionTypes.SHOW_FINISH_ADDING_MEAL, finishAddingMeal)

    navigate('/mealplan')
    
    }


    const servingInputHandler = (event) => {
        setServingInput(event.target.value)
    }

let mealToAdd;
let finalCal;
let foodNutrients;
let weight;

if(foodAddingValues.selectedMeal){
    const mealCalories = foodAddingValues.selectedMeal.foodNutrients.filter(nutrient => nutrient.nutrientName === 'Energy')

    finalCal = mealCalories.reduce((acc,curr) => curr.value ,[])
     weight = foodAddingValues.selectedMeal.servingSize?.toFixed(0) || foodAddingValues.selectedMeal.foodMeasures.reduce((acc,curr) => curr.gramWeight?.toFixed(0),0)
}
if(foodAddingValues.selectedMeal){
   

   foodNutrients = foodAddingValues.selectedMeal.foodNutrients.map(nutrient => {
        return(
            <NutritionContainer key={nutrient.nutrientId}>
            <MainNutritionContainer>
            <Nutrition>{nutrient.nutrientName}</Nutrition>
           <NutritionSize>{nutrient.value} {nutrient.unitName}</NutritionSize>
            </MainNutritionContainer>
   
     

        </NutritionContainer>
        )
    })

    mealToAdd =  <MealAddingContainer as={Modal} show={finishAddingMeal} close={closeMealAdding}>
    <MealAddingHeaderContainer>
    <GoBackIcon onClick={closeMealAddingHandler}/>
   
            <MealAddingTitle>{ foodAddingValues.selectedMeal ? foodAddingValues.selectedMeal.description.toLowerCase() : 'Meal'}</MealAddingTitle>
            <CloseMealAddingIconContainer>
            <CloseIcon onClick={closeMealAdding}/>
            </CloseMealAddingIconContainer>
           
           
        </MealAddingHeaderContainer>
 
        <MealAddingFormContainer onSubmit={submitFormHandler}>
            <ServingAndCalorieCountContainer>
            <ServingInputContainer>
 
 <ServingInput required type='number' value={servingInput} onChange={servingInputHandler} placeholder='serving'/>
 <SearvingText>Serving</SearvingText>
 </ServingInputContainer>
 <ServingCalorieCount>
 <CaloriesTextContainer>
     <TotalCaloriesText>Weight: </TotalCaloriesText> <TotalCalories>{ foodAddingValues.selectedMeal ? weight * servingInput : '1'}<span> g</span></TotalCalories>  
     </CaloriesTextContainer>
 
     <CaloriesTextContainer>
     <TotalCaloriesText>Total Calories: </TotalCaloriesText> <TotalCalories>{ foodAddingValues.selectedMeal ? finalCal.toFixed(0) * servingInput : '1'}<span> kcal</span></TotalCalories> 
     </CaloriesTextContainer>
 
   
            
            </ServingCalorieCount>
            </ServingAndCalorieCountContainer>
            
 
            {foodAddingValues.selectedMeal && 
 
         
            <NutritionalInformationContainer>
                <NutritionalInformationTitle>
                    Nutritional  Information
                </NutritionalInformationTitle>
                {foodNutrients}
 
            </NutritionalInformationContainer>
      
            }
          
           {verified ? <FeedBackMessageSuccessContainer>{feedBackMessage}</FeedBackMessageSuccessContainer> : <FeedBackMessageErrorContainer>{feedBackMessage}</FeedBackMessageErrorContainer>}
 
 <AddMealButtonContainer>
 <AddMeal/>
 </AddMealButtonContainer>
 
            </MealAddingFormContainer>
     </MealAddingContainer>
}
   

  return mealToAdd
}

export default MealAdding