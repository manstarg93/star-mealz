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
            <RecipieMealsList key={recipie.title}>
           
                <RecipieHeaderDesign>
                <RecipieMealTitle>{recipie.title}</RecipieMealTitle>
                </RecipieHeaderDesign>
                
                
                
                <ViewDishesContainer>
                <ViewDishes onClick={() => goToSelectedMealDish(recipie.title)}>View Dishes</ViewDishes>
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