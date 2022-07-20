import { createContext } from "react";
import { useRecipieReducer } from "./RecipieReducer";


export const RecipieContext = createContext({
    recipies: [],
    dishes: [],
    SelectedRecipie: null,
    addMealRecipieHandler: () => {},
    getMealRecipieHandler : () => {},
    loading: false,
    addMealDishHandler: () => {},
    getSelectedRecipieHandler: () => {},
    removeRecipieHandler: () => {}
})

export const RecipieProvider = ({children}) => {

    const {recipies,loading,addMealRecipieHandler,getMealRecipieHandler,getSelectedRecipieHandler,addMealDishHandler,dishes,SelectedRecipie,removeRecipieHandler} = useRecipieReducer()

    const value = {
        recipies,
        loading,
        addMealRecipieHandler,
        getMealRecipieHandler,
        getSelectedRecipieHandler,
        addMealDishHandler,
        dishes,
        SelectedRecipie,
        removeRecipieHandler
    }

    return(
        <RecipieContext.Provider value={value}>{children}</RecipieContext.Provider>
    )
}