import {useReducer } from "react"
import { docData, getDocumentData } from "../util/firebase.utils";

const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const NewDay =new Date().getDay()

const currentDay = days[NewDay]



const initialState = {
    selectedDay: currentDay,
    selectedId: null,
    databaseMeal: [],
    mealTitle: ''
}

const actionType = {
  SELECT_DAY: ' SELECT_DAY',
    UPDATE_DATABASE_MEAL: ' UPDATE_DATABASE_MEAL',
  SAVE_SELECTED_ID: 'SAVE_SELECTED_ID'
}

const mealReducer = (state, action) => {

    const {type, payload} = action
    switch (type) {
        case actionType.SELECT_DAY:
        return{
            ...state,
            selectedDay: payload
        }
    
        case actionType.SAVE_SELECTED_ID:
            return{
                ...state,
                selectedId: payload.id,
                mealTitle: payload.mealTitle
            }
            case actionType.UPDATE_DATABASE_MEAL:
                return{
                    ...state,
                    databaseMeal: payload
                }
        default:
            return state
    }
}


export const useMealReducer = () => {

    const [state, dispatch] = useReducer(mealReducer,initialState)
    const {selectedDay,selectedId,databaseMeal,mealTitle} = state

    const selectDay = (selectedDay) => {
dispatch({
    type: actionType.SELECT_DAY,
    payload: selectedDay
})
    }


    const saveSelectedId = (id,mealTitle) => {
        const payload = {
            id,
            mealTitle
        }
        dispatch({
            type: actionType.SAVE_SELECTED_ID,
            payload: payload
        })
            }
const updateDatabase = async(uid) => {
           
                
                if (uid === undefined || uid === null) {
                    dispatch({
                        type: actionType.UPDATE_DATABASE_MEAL,
                        payload: []
                  })
                   return 
                }
            
                    await getDocumentData(uid).then(() => {
              
                            if(docData === undefined) {

                              dispatch({
                                    type: actionType.UPDATE_DATABASE_MEAL,
                                    payload: []
                              })
                               return 
                            }
                            else{
                                dispatch({
                                    type: actionType.UPDATE_DATABASE_MEAL,
                                    payload: docData.mealplan
                              })
                              
                            }
                            
                       })
                       
                       .catch(error => {
             
                       })
      
            }
            const resetDatabaseMeal = () => {
                dispatch({
                    type: actionType.UPDATE_DATABASE_MEAL,
                    payload: []
              })
              return
            }

    return{
        selectedDay,
        selectDay,
        saveSelectedId,
        selectedId,
        updateDatabase,
        resetDatabaseMeal,
        databaseMeal,
        mealTitle
    }
}