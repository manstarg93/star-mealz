import { getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { docData, getDocumentData } from "../util/firebase.utils";
import { AuthContext, userIdContext } from "./AuthContext";
import { FoodAddContext } from "./FoodAddContext";
import { useMealReducer } from "./MealContextReducer";


export const MealContext = createContext({
    selectedDay: 'monday',
    selectDay: () => {},
    mealTitle: '',
    databaseMeal: [],
    saveSelectedId: () => {},
    mealInfo: null,
    saveMappedMeal: () => {},
    resetDatabaseMeal: () => {},
    updateDatabase: () => {},
    loading: false
})

export const MealProvider = ({children}) => {

    const {selectedDay, selectDay,saveSelectedId,selectedId,databaseMeal,updateDatabase,resetDatabaseMeal,mealTitle,saveMappedMeal,mealInfo} = useMealReducer()


  




        const value = {
            selectedDay, selectDay,saveSelectedId,selectedId,databaseMeal,resetDatabaseMeal,updateDatabase,mealTitle,saveMappedMeal,mealInfo
        }
    return(

        <MealContext.Provider value={value}>
{children}
        </MealContext.Provider>
    )
}