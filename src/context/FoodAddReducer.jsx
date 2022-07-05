
import { useReducer } from "react"



const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
            const NewDay =new Date().getDay()
        
            const currentDay = days[NewDay]


const initialState = {

    mealTitle: '',
    selectedOccasion: 'breakfast',
    selectedWeight: '',
    meals: [],
    addMealClicked: false,
    foodAdded: false,
    feedBackMessage: '',
    selectedMealDay: currentDay
   
}



export const useFoodAddReducer = () => {


    

    

    const actionType = {
        
        CLEAR_MEAL: 'CLEAR_MEAL',
        SELECT_OCCASION: 'SELECT_OCCASION',
        SELECT_WEIGHT: 'SELECT_WEIGHT',
        ENTER_MEAL_TITLE:'ENTER_MEAL_TITLE',
        ADD_TO_MEAL: 'ADD_TO_MEAL',
        ADD_MEAL_CLICKED_HANDLER: 'ADD_MEAL_CLICKED_HANDLER',
        SET_FEEDBACK_MESSAGE: ' SET_FEEDBACK_MESSAGE',
        SELECT_MEAL_DAY: ' SELECT_MEAL_DAY',
        REMOVE_MEAL: 'REMOVE_MEAL',
        UPDATE_MEAL: 'UPDATE_MEAL',
    }
    


    const AddFoodReducer = (state, action) => {
        const {type, payload} = action

        switch (type) {
            case actionType.SELECT_MEAL_DAY:
                return{
                    ...state,
                    selectedMealDay: payload
                   
                }
            case actionType.ENTER_MEAL_TITLE:
                return{
                    ...state,
                    mealTitle: payload
                   
                }
                case actionType.SELECT_OCCASION:
                    return{
                        ...state,
                        selectedOccasion: payload
                       
                    }
                    case actionType.SELECT_WEIGHT:
                        return{
                            ...state,
                            selectedWeight: payload
                           
                        }
                        case actionType.ADD_MEAL_CLICKED_HANDLER:
                            return{
                                ...state,
                                addMealClicked: payload
                               
                            }
                        case actionType.ADD_TO_MEAL:
            return{
                ...state,
                meals: payload,

            }

            case actionType.SET_FEEDBACK_MESSAGE:
                return{
                    ...state,
                    feedBackMessage: payload.message,
                    foodAdded: payload.addedSuccess
                }
                case actionType.CLEAR_MEAL:
                    return{
                        ...state,
                        mealTitle: '',
                        selectedWeight: '',
                  
                    }
                    case actionType.REMOVE_MEAL:
                        return{
                            ...state,
                            meals: payload
                      
                        }

                        case actionType.UPDATE_MEAL:
                            return{
                                ...state,
                                meals: payload
                          
                            }
         
        
            default:
                return state
        }
    }

    const [{mealTitle,selectedOccasion,selectedWeight,meals,addMealClicked,foodAdded,feedBackMessage, selectedMealDay }, dispatch] = useReducer(AddFoodReducer, initialState)


    const selectMealDay = (selectedDay) => {
            
        dispatch({
            type: actionType.SELECT_MEAL_DAY,
            payload: selectedDay

        })
    }

       
const resetMealClicked = () => {
    dispatch({
        type: actionType.ADD_MEAL_CLICKED_HANDLER,
        payload: false
    })
}

        const mealTitleHandler = (mealTitle) => {
         
            dispatch({
                    type: actionType.ENTER_MEAL_TITLE,
                    payload: mealTitle
            })
        }
    
      

        const selectOccasion = (mealOccasion) => {
    

            dispatch({
                type: actionType.SELECT_OCCASION,
                payload: mealOccasion
            })
 
        }

        const selectMealWeight = (enteredWeight) => {
           

            dispatch({
                type: actionType.SELECT_WEIGHT,
                payload: enteredWeight
            })
 
        }

        const addMealClickedHandler = () => {

            dispatch({
                type: actionType.ADD_MEAL_CLICKED_HANDLER,
                payload: true
            })
        }
        const setMessageHandler = (message, addedSuccess) => {

            const payload = {
                message,
                addedSuccess
            }
            dispatch({
                type: actionType.SET_FEEDBACK_MESSAGE,
                payload: payload
            })
        }

     

        const addMeal = (id) => {
            addMealClickedHandler()
    
       let addedSuccess;
       let updatedMeals;
       const existingMeal = meals.find(meal => meal.mealTitle.toLowerCase() === mealTitle.toLowerCase() && meal.selectedOccasion === selectedOccasion && meal.selectedMealDay === selectedMealDay)

       console.log(selectedMealDay)
       if(selectedMealDay === ''){
        addedSuccess = false
        setMessageHandler('Please select a day', addedSuccess)
        
        return
    }
       if(mealTitle === ''){
        addedSuccess = false
        setMessageHandler('Please enter meal title', addedSuccess)
        
        return
    }
    if(selectedOccasion === 'occasion' || selectedOccasion === ''){

        addedSuccess = false
        setMessageHandler('Please select the correct occasion', addedSuccess)
      
       return
    }
    if(selectedWeight === '' || selectedWeight === isNaN ){
        addedSuccess = false
    setMessageHandler('enter a valid weight',addedSuccess)
       
        return
    }
    if(existingMeal){
      
        
        addedSuccess = false
        setMessageHandler('Meal already added to occasion',addedSuccess)
          return
      }
        
            addedSuccess = true
            setMessageHandler('meal added successfully',addedSuccess)
           
            const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            const NewDay =new Date().getDay()
        
            const currentDay = days[NewDay]

            const meal = {
                id: Math.random(1),
                mealTitle,
                selectedOccasion,
                selectedWeight,
                selectedMealDay
    
            }
        updatedMeals = [...meals,meal]
          
       
            dispatch({
                type: actionType.ADD_TO_MEAL,
                payload: updatedMeals
            })


          }

       
    const updateMealHandler = (id) => {
        const selectedMealIndex = meals.findIndex(meal => meal.id === id)
        console.log(selectedMealIndex)
        console.log(id)
       
        const updatedMeal = {
            ...meals[selectedMealIndex],
            mealTitle,
            selectedOccasion,
            selectedWeight,
            
        }
        const copiedMeal = meals
        
    copiedMeal.splice(selectedMealIndex,1,updatedMeal)

        dispatch({
            type: actionType.UPDATE_MEAL,
            payload: copiedMeal
        })
    
    }

             
        

        const clearMealHandler = () => {

            dispatch({
                type: actionType.CLEAR_MEAL,
           
            })
        }

        const removeMealHandler = (selectedId) => {

            const updatedMeal =  meals.filter(meal => meal.id !== selectedId)
            dispatch({
                type: actionType.REMOVE_MEAL,
                payload: updatedMeal
            })
        }
        
    

    return{
        mealTitleHandler,
        mealTitle,
        clearMealHandler,
        selectOccasion,
        selectedOccasion,
        selectMealWeight,
        selectedWeight,
        addMeal,
meals,
addMealClicked,foodAdded,feedBackMessage,
resetMealClicked,
selectMealDay,
selectedMealDay,
removeMealHandler,
updateMealHandler

    }
}