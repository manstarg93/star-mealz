import React, { Fragment } from 'react'
import { FoodContainer, FoodImageBanner, FoodDisplayContainer, FoodListMainContainer, AddToCartContainer, AddToPlan, RemoveTitle, Header } from './Food.styles'
import FoodList from './FoodList'

import mealTable from '../../assets/mealtable.jpg'

import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import FoodFeedBack from '../foodFeedBack/FoodFeedBack'



const Food = () => {

    const {addMealClicked,foodAdded,feedBackMessage} = useContext(FoodAddContext)


  return (
    <FoodContainer>
        <FoodImageBanner image={mealTable}/>
          <FoodDisplayContainer>
          <h1>Ready To Plan Your Diet?</h1>
           <p>Just enter the name and estimated calories of the food you plan to eat for the selected week day, Then it will be added to your meal plan. </p>

           <p>Dont forget to add lunch or dinner! </p>
    
    </FoodDisplayContainer>

    <FoodList />
    <FoodFeedBack addClicked={addMealClicked} added={foodAdded} feedBackMessage={feedBackMessage} />

        
    </FoodContainer>
  )
}

export default Food