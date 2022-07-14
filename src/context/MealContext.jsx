import { getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { docData, getDocumentData } from "../util/firebase.utils";
import { AuthContext, userIdContext } from "./AuthContext";
import { FoodAddContext } from "./FoodAddContext";
import { useMealReducer } from "./MealContextReducer";


export const MealContext = createContext({
    selectedDay: 'monday',
    selectDay: () => {},
    databaseMeal: [],
    saveSelectedId: () => {},
    selectedId: null,
    resetDatabaseMeal: () => {},
    updateDatabase: () => {},
    loading: false
})

export const MealProvider = ({children}) => {

    const {selectedDay, selectDay,saveSelectedId,selectedId} = useMealReducer()

    const {userId,auth,isLoggedIn} = useContext(AuthContext)
   


    const [databaseMeal, setDatabaseMeal] = useState([]) 



useEffect(() => {

    if (!userId) return
        const getDoc = async() => {
       
            await getDocumentData(userId).then(() => {
               
                    if(!docData.mealplan){
                        setDatabaseMeal([]) 
                    return
                    }
                    setDatabaseMeal(docData.mealplan)
               })
               
               .catch(error => {
  
               })
           }
            getDoc()
    
   
   
},[userId])



    const resetDatabaseMeal = () => {
        setDatabaseMeal([])
    }


    const updateDatabase = async() => {
        if (!userId) return
    
            await getDocumentData(userId).then(() => {
               
                    if(!docData.mealplan){
                        setDatabaseMeal([]) 
                    return
                    }
                    setDatabaseMeal(docData.mealplan)
               })
               
               .catch(error => {
     
               })
        
       
    
                
              
    }

        const value = {
            selectedDay, selectDay,saveSelectedId,selectedId,databaseMeal,resetDatabaseMeal,updateDatabase
        }
    return(

        <MealContext.Provider value={value}>
{children}
        </MealContext.Provider>
    )
}