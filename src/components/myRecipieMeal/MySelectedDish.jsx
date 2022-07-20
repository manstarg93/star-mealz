import React, { useContext } from 'react'
import { useNavigate,useParams } from 'react-router';
import { RecipieContext } from '../../context/RecipieContext';
import { DishImage, DishTitle, GoBackContainer, ImageTitleContainer, MyDishDescription, MyDishList, MyDishTitle, MySelectedDishContainer, MySelectedDishMainContainer, NoRecipieMessage, ReturnButton, ViewRecipie, ViewRecipieContainer } from './MySelectedDish.styles'
import { GoBackButton, GoBackButtonContainer } from './MySelectedRecipie.styles';

const MySelectedDish = () => {
    const {dishes,loading} =  useContext(RecipieContext)
console.log(dishes)
    let myDishesList;

   const navigate = useNavigate()
   const params = useParams()
   

    const goToSelectedRecipie = (label) => {
        navigate(`/myrecipies/${params.title.toLowerCase()}/${label.toLowerCase()}`)
    }

    const goBackToRecipie = () => {
        navigate('/myrecipies')
    }
    myDishesList = dishes.map(dish => {
        console.log(dish)
        const {recipies} = dish
        console.log(recipies)
        if(recipies.length === 0 && !loading){
            return <NoRecipieMessage key={dish.title} >No Recipie available for this meal</NoRecipieMessage>
        }
  
        // const {recipe} = dish.recipies
       return recipies.map((recipes) => {
        return(
            <MyDishList onClick={() => goToSelectedRecipie(recipes.label)} key={recipes.label} >
                <ImageTitleContainer>
                <DishImage srcSet={recipes.image}/>
            <DishTitle>{recipes.label}</DishTitle>
        
                </ImageTitleContainer>
            
               
            </MyDishList>
        )
       })
        
      
        
    })
    
       
    
  return (
      <MySelectedDishMainContainer>
            <MyDishTitle>Not sure what type of <span>{params.title}</span> to cook?</MyDishTitle>
            <MyDishDescription>We've got you covered with our variety of delicious dishes for your specific meal plan, Which we believe will help keep you and your family excited to try something each day. </MyDishDescription>
  <MySelectedDishContainer>
     
       {myDishesList}
 
   </MySelectedDishContainer>
      </MySelectedDishMainContainer>
 
  )
}

export default MySelectedDish