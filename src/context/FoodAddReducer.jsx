
import axios from "axios";
import {  useReducer } from "react"
import { addDocumentToCollection, addMealRecipiesToDocument, docData, getDocumentData, getRecipiesFromDocument, recipieDocument } from "../util/firebase.utils";




const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
            const NewDay =new Date().getDay()
        
            let currentDay = days[NewDay] 
            


const initialState = {

   
    
   mealSearchResult: [],
   foodAddingValues: {
    selectedMeal: null,
    selectedOccasion: 'breakfast',
    selectedMealDay: currentDay,
   
   },
   mealTitle: '',
    verified: false,
    feedBackMessage: '',

}



export const useFoodAddReducer = () => {

    const actionType = {
        FOOD_ADDING_VALUES: 'FOOD_ADDING_VALUES',  
        SET_FEEDBACK_MESSAGE: ' SET_FEEDBACK_MESSAGE',
        SET_MEAL_SEARCH_RESULT: 'SET_MEAL_SEARCH_RESULT',
        SET_MEAL_TITLE: ' SET_MEAL_TITLE'
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
                case actionType.SET_MEAL_SEARCH_RESULT: 
                return{
                    ...state,
                    mealSearchResult: payload
                }
                case actionType.SET_MEAL_TITLE: 
                return{
                    ...state,
                    mealTitle: payload
                }
        
            default:
                return state
        }
    }

    const [{verified,feedBackMessage,foodAddingValues, mealSearchResult,mealTitle }, dispatch] = useReducer(AddFoodReducer, initialState)



    const getMealSearchResultHandler = (mealTitle) => {
        const apiKey = process.env.REACT_APP_USDA_API_KEY
        
                    
        dispatch({
            type: actionType.SET_MEAL_TITLE,
            payload: mealTitle
        })

        if(mealTitle !== ''){
            const query = mealTitle.toLowerCase()
            
axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&pageSize=3&api_key=${apiKey}`,{
             
                }).then((res) => {
     
      
                  dispatch({
                      type: actionType.SET_MEAL_SEARCH_RESULT,
                        payload: res.data.foods
                  })
                }).catch((error) => {
                console.log(error)
                })
        }
        
           
    }

        const mealTitleHandler = (meal) => {




            const updateTitle = {
                ...foodAddingValues,
                selectedMeal: meal
               
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
     

        const addMeal = async (userId,meal) => {
             let verified;
       let updatedMeals;
   


        await getDocumentData(userId).then(data => {


            if(docData === undefined){
            
           
            updatedMeals = [meal]
            addDocToCollectionHandler(userId,updatedMeals,'meal added successfully')
            resetFeedbackMessage()
            clearMealHandler()
            return
            }

            const existingItem = docData.mealplan.find(food => food.id === meal.id)
            if (existingItem){
   
                return
            }


                        updatedMeals = [...docData.mealplan,meal]
                          
                        addDocToCollectionHandler(userId,updatedMeals,'meal added successfully')
                       
                        clearMealHandler()
                            resetFeedbackMessage()
                        
                    
            
            
        })
        .catch(error => {
            verified = false
        
          setMessageHandler('Please log in or register to save your meals',verified)
          resetFeedbackMessage()
        })

          }

   
       
    const updateMealHandler =  async(id,userId,selectedMeal,totalWeight,finalCal,servingValue) => {

        await getDocumentData(userId).then(() => {
            if(docData !== undefined){
                const selectedMealIndex = docData.mealplan.findIndex(meal => meal.id === id)

                const updatedMeal = {
                    ...docData.mealplan[selectedMealIndex],
                    serving: servingValue,
                    totalCalories: finalCal,
                    totalWeight      
                    
                }
                const copiedMeal = docData.mealplan
              
                
            copiedMeal.splice(selectedMealIndex,1,updatedMeal)
             addDocToCollectionHandler(userId,copiedMeal,'meal updated successfully')
            
            resetFeedbackMessage()
            }

          
        })
 

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

        const removeMealHandler = async(selectedId, userId, mealTitle) => {

            const updatedMeal =  docData.mealplan.filter(meal => meal.id !== selectedId)
            addDocToCollectionHandler(userId,updatedMeal,'meal removed successfully')
            resetFeedbackMessage()
         
            // if(recipieDocument.recipies === undefined){
            //     return
            // }
            // const filteredDish = recipieDocument.recipies.filter(recipie => recipie.title.toLowerCase() !== mealTitle.toLowerCase())
        
            // await getRecipiesFromDocument(userId).then(() => {
            //     if(recipieDocument !== undefined){
            //         addMealRecipiesToDocument(userId,filteredDish)
              
            //     }
             
            // })
            // .catch((error)=>{
             
            // })

            
        }
       
        const addDocToCollectionHandler =  async(id, meal,message) => {
            let verified = false
            await addDocumentToCollection(id,meal).then(() => {
            verified = true
           
                setMessageHandler(message,verified)
            })
        }
    

    return{
        getMealSearchResultHandler,
        mealSearchResult,
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
mealTitle

    }
}