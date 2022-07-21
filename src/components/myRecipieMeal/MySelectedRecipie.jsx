import React, { Fragment, useContext, useState } from 'react'
import { RecipieContext } from '../../context/RecipieContext'
import {ReactComponent as CheckedIcon} from '../../assets/checkedIcon.svg'
import { CheckedIconContainer, GoBackButton, GoBackButtonContainer, HealthInformation, ImageContainer, IngredientContainer, InnerSelectedRecipie, InstIngFilterContainer, InstructionContainer, InstructionIngredientContainer, InstructionIngredientNav, InstructionIngredientsContainer,  InstructionTitle, ItemList, ItemListContainer, MySelectedRecipieImageContainer, RecipieDescription, RecipieTitle, SelectedRecipieContainer, ServingKalMealContainer } from './MySelectedRecipie.styles'
import { useNavigate, useParams } from 'react-router'

const MySelectedRecipie = () => {

  const {SelectedRecipie,loading} = useContext(RecipieContext)
const params = useParams()
const navigate = useNavigate()
  const [ingredientClicked, setIngredientClicked] = useState(true)
  const [nutritionClicked, setNutrition] = useState(false)

  const ingredientClickedHandler = () => {
      setIngredientClicked(true)

      setNutrition(false)
  }

  const nutritionHandler = () => {
    setIngredientClicked(false)

      setNutrition(true)
  }

  const goBackHandler = () => {
    navigate(`/myrecipies/${params.title}`)
  }


let checkContainer;

  if(SelectedRecipie === null && !loading){
    checkContainer = <h4>No Recipie for this Dish</h4>
  }
  if(SelectedRecipie !== null){
   
    const [{label,image,ingredientLines,calories,dietLabels,totalWeight,mealType,healthLabels}] = SelectedRecipie
    
    checkContainer =   
 <SelectedRecipieContainer >
     <RecipieTitle>{label}</RecipieTitle>
     <InnerSelectedRecipie>
    

       
       <ImageContainer src={image}/>
      
        
         
         <InstructionIngredientsContainer>
             <InstIngFilterContainer>
               <InstructionIngredientNav onClick={ingredientClickedHandler}>Ingredients</InstructionIngredientNav>
               <InstructionIngredientNav onClick={nutritionHandler}>Nutrition</InstructionIngredientNav>
               
             </InstIngFilterContainer>
             {ingredientClicked && <InstructionIngredientContainer> <InstructionTitle>Ingredients with instructions</InstructionTitle>
                 {ingredientLines.map(inst => {
                 return (
<ItemListContainer key={Math.random(5)} >
<CheckedIconContainer><CheckedIcon/></CheckedIconContainer>
<ItemList >  {inst}</ItemList>
</ItemListContainer>

                 )
               })}</InstructionIngredientContainer>}

               {nutritionClicked && <InstructionIngredientContainer>
                 <InstructionTitle>Nutrition Information</InstructionTitle>
                
                
                 <ItemListContainer>
                 <CheckedIconContainer><CheckedIcon/></CheckedIconContainer>
                 <ItemList >Meal Type:  {mealType.length === 0 ? ' Any Occasion' : mealType.map(diets => diets)}</ItemList>

                 
                 </ItemListContainer>

                 <ItemListContainer>
                 <CheckedIconContainer><CheckedIcon/></CheckedIconContainer>
                 <ItemList> Calories:  {calories.toFixed(2)}Kcal</ItemList>
                 </ItemListContainer>
                 <ItemListContainer>
                 <CheckedIconContainer><CheckedIcon/></CheckedIconContainer>
                 <ItemList> Weight:  {totalWeight.toFixed(2)}g</ItemList>
                   </ItemListContainer>
                   <ItemListContainer>
                   <CheckedIconContainer><CheckedIcon/></CheckedIconContainer>
                   <ItemList > Diet:  {dietLabels.length === 0 ? 'Average Fat' : dietLabels.map(diets => diets)}</ItemList>
                   </ItemListContainer>
                 <InstructionTitle>Health Information</InstructionTitle>
                 {healthLabels.map(healthLabel => {
                   
                     return (
                      <ItemListContainer key={Math.random(5)}>
                        <CheckedIconContainer><CheckedIcon/></CheckedIconContainer>
                        <ItemList >{healthLabel}</ItemList>
                      </ItemListContainer>

                     )
                 })}
               
               </InstructionIngredientContainer>}
         </InstructionIngredientsContainer>
         
     </InnerSelectedRecipie>
    <GoBackButtonContainer ><GoBackButton onClick={goBackHandler}>Go Back</GoBackButton></GoBackButtonContainer>
  </SelectedRecipieContainer>

  }

  return checkContainer
}

export default MySelectedRecipie