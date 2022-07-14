import {useReducer } from "react"

const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const NewDay =new Date().getDay()

const currentDay = days[NewDay]



const initialState = {
    selectedDay: currentDay,
    selectedId: null
}

const actionType = {
  SELECT_DAY: ' SELECT_DAY',

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
                selectedId: payload
            }
        default:
            return state
    }
}


export const useMealReducer = () => {

    const [state, dispatch] = useReducer(mealReducer,initialState)
    const {selectedDay,selectedId} = state

    const selectDay = (selectedDay) => {
dispatch({
    type: actionType.SELECT_DAY,
    payload: selectedDay
})
    }


    const saveSelectedId = (id) => {
        dispatch({
            type: actionType.SAVE_SELECTED_ID,
            payload: id
        })
            }


    return{
        selectedDay,
        selectDay,
        saveSelectedId,
        selectedId
    }
}