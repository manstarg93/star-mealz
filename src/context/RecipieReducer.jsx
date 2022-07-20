
import { useReducer } from "react"
import { addMealRecipiesToDocument, getRecipiesFromDocument, recipieDocument } from "../util/firebase.utils"
import axios from "axios";

const initialState = {
    recipies: [],
    dishes: [],
    loading: false,
    SelectedRecipie: null
}



export const useRecipieReducer = () => {
    const actionType = {
        ADD_MEAL_RECIPIE: 'ADD_MEAL_RECIPIE',
        SET_LOADING: 'SET_LOADING',
        ADD_MEAL_DISHES: 'ADD_MEAL_DISHES',
        ADD_SELECTED_RECIPIE: 'ADD_SELECTED_RECIPIE',
        REMOVE_RECIPE: 'REMOVE_RECIPE'
    }

    const recipieReducer = (state, action) => {
        const  {type, payload} =  action

        switch (type) {
            case actionType.ADD_MEAL_RECIPIE:
                return{
                    ...state,
                    loading: payload.loading,
                    recipies: payload.meals
                }
                case actionType.SET_LOADING:
                return{
                    ...state,
                    loading: payload
                }
                case actionType.ADD_MEAL_DISHES:
                return{
                    ...state,
                    loading: payload.loading,
                    dishes: payload.meals
                }
                case actionType.ADD_SELECTED_RECIPIE:
                return{
                    ...state,
                    loading: payload.loading,
                    SelectedRecipie: payload.meals
                }
        
            default:
                return state
        }
    }



    const [{recipies, loading,dishes,SelectedRecipie}, dispatch] =  useReducer(recipieReducer, initialState )

    const addMealRecipieHandler = async (userId, mealTitle,foodId) => {

 
await getRecipiesFromDocument(userId).then(() => {

    if(recipieDocument === undefined){
       retrieveFromRecipieApi(userId,mealTitle,foodId)

          return
    }

    
    
    const existingRecipie = recipieDocument.recipies.find(recipie => recipie.title.toLowerCase() === mealTitle.toLowerCase())

if(recipieDocument !== undefined && !existingRecipie){
    const options = {
        method: 'GET',
        url: 'https://edamam-recipe-search.p.rapidapi.com/search',
        params: {q: `${mealTitle}`},
        headers: {
          'X-RapidAPI-Key': 'a0999c0dffmsha721ff7c636b2a4p168e7ejsn3264334d5a46',
          'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
       
          const recipe = response.data.hits.map(recipe => recipe.recipe)
     

       
          const recipieObject = {
            id: foodId,
              title: response.data.q,
              recipies: recipe
          }
      
          const recipieArray = [...recipieDocument.recipies,recipieObject]
    
        addMealRecipiesToDocument(userId,recipieArray)
      }).catch(function (error) {
          console.error(error);
      });
}
    if(existingRecipie){
        return
    }
    
       
         
        
    
})

    }

    const getMealRecipieHandler = async (userId) => {
      
            if(userId === null || userId === undefined) {
                updateRecipies(false,[],actionType.ADD_MEAL_RECIPIE)
                return
            }

            if(recipies.length === 0){
                dispatch({
                    type: actionType.SET_LOADING,
                    payload: true
                })
                
            }
           
            await getRecipiesFromDocument(userId).then(() => {

              if (recipieDocument === undefined) {
                  updateRecipies(false,[],actionType.ADD_MEAL_RECIPIE)
               
                return
              }
             
                updateRecipies(false,recipieDocument.recipies,actionType.ADD_MEAL_RECIPIE)

            })
          
    }


    const addMealDishHandler = async(userId,title) => {

       
        if(userId === null || userId === undefined) {
            updateRecipies(false,[],actionType.ADD_MEAL_DISHES)
            return
        }

        if(dishes.length === 0){
            updateRecipies(true,[],actionType.ADD_MEAL_DISHES)
            
        }

        await getRecipiesFromDocument(userId).then(() => {

            if (recipieDocument.recipies === undefined) {
                updateRecipies(false,[],actionType.ADD_MEAL_DISHES)
             
             return
            }
         
           const mappedDish = recipieDocument.recipies.filter(recipie => {
              
               return recipie.title.toLowerCase() === title.toLowerCase()
           })

            
              updateRecipies(false,mappedDish,actionType.ADD_MEAL_DISHES)

          })

       

    }

    const getSelectedRecipieHandler = async(userId, dishTitle, paramTitle) => {
        if(userId === null || userId === undefined) {
            
            return
        }
        if(SelectedRecipie === null){
            dispatch({
                type: actionType.SET_LOADING,
                payload: true
            })
        }
        await getRecipiesFromDocument(userId).then((res) => {
            
            if (recipieDocument === undefined) {
                updateRecipies(false,null,actionType.ADD_SELECTED_RECIPIE)
            return
            }

const mappedSelectedDish = recipieDocument.recipies.map(res=> res)
const filteredTitle = mappedSelectedDish.filter(resTitle => resTitle.title.toLowerCase() === paramTitle)


const findItem = filteredTitle.map(recipie => recipie.recipies )


const foundItem = findItem.map(foundRecipe => {
    return foundRecipe.find( res => res.label.toLowerCase() === dishTitle.toLowerCase())
} )


updateRecipies(false,foundItem,actionType.ADD_SELECTED_RECIPIE)
        })
        .catch((error) => {

        })
    }

   

const removeRecipieHandler = async(userId, title) => {
    if(recipieDocument.recipies === undefined){
        return
    }
    const filteredDish = recipieDocument.recipies.filter(recipie => recipie.title.toLowerCase() !== title.toLowerCase())

    await getRecipiesFromDocument(userId).then(() => {
        if(recipieDocument !== undefined){
            addMealRecipiesToDocument(userId,filteredDish)
      
        }
     
    })
    .catch((error)=>{
     
    })
}

    ////////////////////////////////////////Helper Functions/////////////////////////////////


    const updateRecipies = (loading, meals, actionType) => {
        const recipie = {
            loading,
            meals
         }
         dispatch({
             type: actionType,
             payload: recipie
         })
    }

    const retrieveFromRecipieApi = (userId, mealTitle,foodId) => {
        const options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: {q: `${mealTitle}`},
            headers: {
              'X-RapidAPI-Key': 'a0999c0dffmsha721ff7c636b2a4p168e7ejsn3264334d5a46',
              'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
     
          const recipe = response.data.hits.map(recipe => recipe.recipe)
      
  
         
            const recipieObject = {
              id: foodId,
                title: response.data.q,
                recipies: recipe
            }
        
const recipeArray = [recipieObject]
            addMealRecipiesToDocument(userId,recipeArray)
          }).catch(function (error) {
              console.error(error);
          });
    }

    return{
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
}
