import React, { Fragment, useContext } from 'react'
import { useNavigate,useParams } from 'react-router';
import { RecipieContext } from '../../context/RecipieContext';
import { DishImage, DishTitle, ImageTitleContainer, MyDishDescription, MyDishList, MyDishTitle, MySelectedDishContainer, MySelectedDishMainContainer, NoRecipieMessage } from './MySelectedDish.styles'

const MySelectedDish = () => {
    const {dishes,loading} =  useContext(RecipieContext)

    let myDishesList;

   const navigate = useNavigate()
   const params = useParams()
   

    const goToSelectedRecipie = (label) => {
        navigate(`/myrecipies/${params.title.toLowerCase()}/${label.toLowerCase()}`)
    }


    myDishesList = dishes.map(dish => {
      
        const {recipies} = dish
      
        if(recipies.length === 0 && !loading){
            return <NoRecipieMessage key={dish.title} >No Recipie available for this meal</NoRecipieMessage>
        }
  
       return recipies.map((recipes) => {
        return(
            <MyDishList onClick={() => goToSelectedRecipie(recipes.label)} key={recipes.label} >
                <ImageTitleContainer> 

                <DishImage srcSet={recipes.image}
               
                />
          
             
            <DishTitle>{recipes.label}</DishTitle>
        
                </ImageTitleContainer>
            
               
            </MyDishList>
        )
       })
        
      
        
    })
    
       
    
  return (
      <MySelectedDishMainContainer>
          {dishes.length !== 0 && <Fragment>
             <MyDishTitle>Not sure what type of <span>{params.title}</span> to cook?</MyDishTitle>
            <MyDishDescription>We've got you covered with our variety of delicious dishes for your specific meal plan. </MyDishDescription> </Fragment>}
            
  <MySelectedDishContainer>
     
       {myDishesList}
 
   </MySelectedDishContainer>
      </MySelectedDishMainContainer>
 
  )
}

export default MySelectedDish