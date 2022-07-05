import { createContext } from "react";
import { useMealReducer } from "./MealContextReducer";


export const MealContext = createContext({
    selectedDay: 'monday',
    selectDay: () => {},
    
    saveSelectedId: () => {},
    selectedId: null
})

export const MealProvider = ({children}) => {

    const {selectedDay, selectDay,saveSelectedId,selectedId} = useMealReducer()

        const value = {
            selectedDay, selectDay,saveSelectedId,selectedId
        }
    return(

        <MealContext.Provider value={value}>
{children}
        </MealContext.Provider>
    )
}