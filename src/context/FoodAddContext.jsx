import { createContext} from "react";

import { useFoodAddReducer } from "./FoodAddReducer";



const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
            const NewDay =new Date().getDay()
        
            let currentDay = days[NewDay]

           if(currentDay !== ''){
               currentDay = 'Today'
           }

export const FoodAddContext = createContext({
    foodAddingValues: {
        selectedMeal: null,
        selectedOccasion: 'breakfast',
        selectedMealDay: currentDay,
    
       },
       mealTitle: '',
    mealTitleHandler: () => {},
    foodSearchHandler: () => {},
    clearMealHandler: () => {},
    selectOccasion: () => {},
  
    selectMealWeight: () => {},

    addMeal: () => {},

    mealOptions: [],

    verified: false,
    feedBackMessage: '',
    selectMealDay: () => {},
    removeMealHandler: () => {},
    updateMealHandler: () => {},
    getMealSearchResultHandler: () => {},
    mealSearchResult: [],
       

 
}) 



export const FoodProvider = ({children}) => {
    const { mealTitleHandler, clearMealHandler,selectOccasion,foodAddingValues,selectMealWeight,addMeal
        ,addMealClicked,verified,feedBackMessage,selectMealDay,removeMealHandler,updateMealHandler,getMealSearchResultHandler,
        mealSearchResult,mealTitle} = useFoodAddReducer()


    const value = {
        mealTitle,
        mealTitleHandler,
        clearMealHandler,
        selectOccasion,
    foodAddingValues,
        selectMealWeight,
        addMeal,
        
        updateMealHandler,
        addMealClicked,verified,feedBackMessage,selectMealDay,removeMealHandler,getMealSearchResultHandler,
        mealSearchResult
       
    }
    return(
        <FoodAddContext.Provider value={value}>
{children}

        </FoodAddContext.Provider>
    )
}