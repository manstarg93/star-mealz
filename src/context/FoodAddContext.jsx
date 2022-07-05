import { createContext, useEffect } from "react";
import { useFoodAddReducer } from "./FoodAddReducer";



const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
            const NewDay =new Date().getDay()
        
            const currentDay = days[NewDay]

export const FoodAddContext = createContext({
    mealTitle: '',
    mealTitleHandler: () => {},
    foodSearchHandler: () => {},
    clearMealHandler: () => {},
    selectOccasion: () => {},
    selectedOccasion: 'breakfast',
    selectMealWeight: () => {},
    selectedWeight: '',
    addMeal: () => {},
    meals: [],
    mealOptions: [],
    addMealClicked: false,
    foodAdded: false,
    feedBackMessage: '',
    selectedMealDay: currentDay,
    selectMealDay: () => {},
    removeMealHandler: () => {},
    updateMealHandler: () => {}
}) 



export const FoodProvider = ({children}) => {
    const {mealTitle, mealTitleHandler, clearMealHandler,selectOccasion,selectedOccasion,selectedWeight,selectMealWeight,addMeal,
        meals,addMealClicked,foodAdded,feedBackMessage,resetMealClicked,selectMealDay,selectedMealDay,removeMealHandler,updateMealHandler} = useFoodAddReducer()


        useEffect(() => {
            if(addMealClicked){
setTimeout(() => {
    resetMealClicked()
},2000);
            }
        },[addMealClicked,resetMealClicked])
    const value = {
        mealTitle,
        mealTitleHandler,
        clearMealHandler,
        selectOccasion,
        selectedOccasion,
        selectMealWeight,
        selectedWeight,
        addMeal,
        meals,
        updateMealHandler,
        addMealClicked,foodAdded,feedBackMessage,selectMealDay,selectedMealDay,removeMealHandler
    }
    return(
        <FoodAddContext.Provider value={value}>
{children}

        </FoodAddContext.Provider>
    )
}