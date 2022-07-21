import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { RecipieContext } from '../../context/RecipieContext';
import { NoRecipie, RecipieHeaderDesign, RecipieMealsList, RecipieMealsListContainer, RecipieMealTitle, ViewDishes, ViewDishesContainer } from './MyRecipieMeal.styles'

const MyRecipieMeal = () => {
    const {recipies, loading} = useContext(RecipieContext)
const navigate = useNavigate()
    

    let myRecipieMealsList;


    if(recipies.length === 0 && !loading){
        myRecipieMealsList = <NoRecipie>No Recipie</NoRecipie>
    
    }


const goToSelectedMealDish = (title) => {
            navigate(`/myrecipies/${title.toLowerCase()}`)
            
    }

 


    myRecipieMealsList = recipies.map(recipie => {
        return(
            <RecipieMealsList onClick={() => goToSelectedMealDish(recipie.title)} key={recipie.title}>
                <RecipieMealTitle>{recipie.title}</RecipieMealTitle>
                <ViewDishesContainer>
                
                <ViewDishes >View Dishes</ViewDishes>
                </ViewDishesContainer>
                
            
            </RecipieMealsList>
           
        )
    })

  return (
      
          
 <RecipieMealsListContainer>
    
        {myRecipieMealsList}
    </RecipieMealsListContainer>

   
  )
}

export default MyRecipieMeal