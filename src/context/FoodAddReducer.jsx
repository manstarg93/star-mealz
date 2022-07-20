
import {  useReducer } from "react"
import { addDocumentToCollection, addMealRecipiesToDocument, docData, getDocumentData, getRecipiesFromDocument, recipieDocument } from "../util/firebase.utils";




const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
            const NewDay =new Date().getDay()
        
            const currentDay = days[NewDay]


const initialState = {

   
    
   
   foodAddingValues: {
    mealTitle: '',
    selectedOccasion: 'breakfast',
    selectedMealDay: currentDay,
    selectedWeight: '',
   },
    verified: false,
    feedBackMessage: '',

}



export const useFoodAddReducer = () => {

    const actionType = {
        FOOD_ADDING_VALUES: 'FOOD_ADDING_VALUES',  
        SET_FEEDBACK_MESSAGE: ' SET_FEEDBACK_MESSAGE',
    }
    
    const AddFoodReducer = (state, action) => {
        const {type, payload} = action

        switch (type) {
                case actionType.FOOD_ADDING_VALUES:
                return{
                    ...state,
                    foodAddingValues: payload
                   
                }
           
            case actionType.SET_FEEDBACK_MESSAGE:
                return{
                    ...state,
                    feedBackMessage: payload.message,
                    verified: payload.verified
                }
        
            default:
                return state
        }
    }

    const [{verified,feedBackMessage,foodAddingValues }, dispatch] = useReducer(AddFoodReducer, initialState)

        const mealTitleHandler = (mealTitle) => {

            const updateTitle = {
                ...foodAddingValues,
                mealTitle
            }

            dispatch({
                    type: actionType.FOOD_ADDING_VALUES,
                    payload: updateTitle
            })
        }
    
        const selectMealDay = (selectedDay) => {
            

            const updateDate = {
                ...foodAddingValues,
                selectedMealDay: selectedDay
            }
            
            dispatch({
                type: actionType.FOOD_ADDING_VALUES,
                payload: updateDate
    
            })
        }
      

        const selectOccasion = (mealOccasion) => {
    
            const updateOccassion = {
                ...foodAddingValues,
                selectedOccasion: mealOccasion
            }

            dispatch({
                type: actionType.FOOD_ADDING_VALUES,
                payload: updateOccassion
            })
 
        }

        const selectMealWeight = (enteredWeight) => {

            const updateWeight = {
                ...foodAddingValues,
                selectedWeight: enteredWeight
            }

            dispatch({
                type: actionType.FOOD_ADDING_VALUES,
                payload: updateWeight
            })
 
        }

   
        const setMessageHandler = (message, verified) => {

            const payload = {
                message,
                verified
            }
            dispatch({
                type: actionType.SET_FEEDBACK_MESSAGE,
                payload: payload
            })
        }

const resetFeedbackMessage = () => {
    
    setTimeout(() => {
        setMessageHandler('',false)
    },2000);
}
     

        const addMeal = async (userId,foodId) => {
           
            
       let verified;
       let updatedMeals;
   


        await getDocumentData(userId).then(data => {


            if(docData === undefined){
            
                const meal = {
                    id: Math.random(1),
                    mealTitle: foodAddingValues.mealTitle,
                                selectedOccasion: foodAddingValues.selectedOccasion,
                               selectedWeight: foodAddingValues.selectedWeight,
                                selectedMealDay: foodAddingValues.selectedMealDay
            
                }
            updatedMeals = [meal]
            addDocToCollectionHandler(userId,updatedMeals,'meal added successfully')
            resetFeedbackMessage()
            clearMealHandler()
            return
            }


           
             
               const existingMeal = docData.mealplan.find(meal => meal.mealTitle.toLowerCase() === foodAddingValues.mealTitle.toLowerCase() 
                && meal.selectedOccasion === foodAddingValues.selectedOccasion && meal.selectedMealDay === foodAddingValues.selectedMealDay)
                       
                    
                        if(existingMeal){
                            verified = false
                            setMessageHandler('Meal already added to occasion',verified)
                            resetFeedbackMessage()
                              return
                          }
                          else{
                            const meal = {
                                id: foodId,
                               mealTitle: foodAddingValues.mealTitle,
                                selectedOccasion: foodAddingValues.selectedOccasion,
                               selectedWeight: foodAddingValues.selectedWeight,
                                selectedMealDay: foodAddingValues.selectedMealDay
                        
                            }
                        updatedMeals = [...docData.mealplan,meal]
                          
                        addDocToCollectionHandler(userId,updatedMeals,'meal added successfully')
                       
                        clearMealHandler()
                            resetFeedbackMessage()
                        }
                    
            
            
        })
        .catch(error => {
            verified = false
        
          setMessageHandler('Please log in or register to save your meals',verified)
          resetFeedbackMessage()
        })

          }

   
       
    const updateMealHandler =  (id,userId,mappedMeal) => {
        const selectedMealIndex = docData.mealplan.findIndex(meal => meal.id === id)
      
            if(foodAddingValues.mealTitle === '' ){
    
                updateMeal(userId,selectedMealIndex,mappedMeal.mealTitle,foodAddingValues.selectedWeight)
            }  
            if(foodAddingValues.selectedWeight === '' ){
    
                updateMeal(userId,selectedMealIndex,foodAddingValues.mealTitle,mappedMeal.selectedWeight)
            }  
            if(foodAddingValues.selectedWeight === '' && foodAddingValues.selectedWeight === ''){
    
                updateMeal(userId,selectedMealIndex,mappedMeal.mealTitle,mappedMeal.selectedWeight)
            }  

          if(foodAddingValues.mealTitle !== '' && foodAddingValues.selectedWeight !== ''  ){

  
            updateMeal(userId,selectedMealIndex,foodAddingValues.mealTitle, foodAddingValues.selectedWeight)
          }

    }


const updateMeal = async (userId, mealIndex, mealTitle, selectedWeight) => {
    const updatedMeal = {
        ...docData.mealplan[mealIndex],
        mealTitle: mealTitle,
        selectedWeight: selectedWeight,
                           
        
    }
    const copiedMeal = docData.mealplan
    
copiedMeal.splice(mealIndex,1,updatedMeal)
 addDocToCollectionHandler(userId,copiedMeal,'meal updated successfully')

resetFeedbackMessage()
}
        const clearMealHandler = () => {

            const updateValue = {
                selectedOccasion: 'breakfast',
                selectedMealDay: currentDay,
                mealTitle: '',
                selectedWeight: ''
            }
     

                dispatch({
                    type: actionType.FOOD_ADDING_VALUES,
                    payload: updateValue
                })
        }

        const removeMealHandler = async(selectedId, userId) => {

            const updatedMeal =  docData.mealplan.filter(meal => meal.id !== selectedId)
            addDocToCollectionHandler(userId,updatedMeal,'meal removed successfully')
            resetFeedbackMessage()
         


            
        }
       
        const addDocToCollectionHandler =  async(id, meal,message) => {
            let verified = false
            await addDocumentToCollection(id,meal).then(() => {
            verified = true
           
                setMessageHandler(message,verified)
            })
        }
    

    return{
        mealTitleHandler,
    
        clearMealHandler,
        selectOccasion,
        selectMealWeight,
        addMeal,
verified,feedBackMessage,
selectMealDay,
removeMealHandler,
updateMealHandler,
foodAddingValues,


    }
}