import { createContext} from "react";

import { useFoodAddReducer } from "./FoodAddReducer";



const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
            const NewDay =new Date().getDay()
        
            const currentDay = days[NewDay]

export const FoodAddContext = createContext({
    foodAddingValues: {
        mealTitle: '',
        selectedOccasion: 'breakfast',
        selectedMealDay: currentDay,
        selectedWeight: '',
       },
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
       

 
}) 



export const FoodProvider = ({children}) => {
    const {mealTitle, mealTitleHandler, clearMealHandler,selectOccasion,foodAddingValues,selectMealWeight,addMeal
        ,addMealClicked,verified,feedBackMessage,selectMealDay,removeMealHandler,updateMealHandler} = useFoodAddReducer()


    const value = {
        mealTitle,
        mealTitleHandler,
        clearMealHandler,
        selectOccasion,
    foodAddingValues,
        selectMealWeight,
        addMeal,
        
        updateMealHandler,
        addMealClicked,verified,feedBackMessage,selectMealDay,removeMealHandler,
       
    }
    return(
        <FoodAddContext.Provider value={value}>
{children}

        </FoodAddContext.Provider>
    )
}