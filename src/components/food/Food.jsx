import React, { Fragment } from 'react'
import { FoodContainer,FoodDisplayContainer, MealSearchTextContainer, MealSearchText, FoodBanner, FoodCTA, MealSearchButton } from './Food.styles'
import FoodList from './FoodList'

import foodBannerImage from '../../assets/headerImg.jpg'

import { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import FoodFeedBack from '../foodFeedBack/FoodFeedBack'
import {ReactComponent as FoodSearchIcon} from '../../assets/searchIcon.svg'
import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'


const Food = () => {

    const {verified,feedBackMessage} = useContext(FoodAddContext)
    const {showAddMealModal, UiToggleHelper} = useContext(UiContext)

    const showAddMealModalHandler = () => {

      UiToggleHelper(actionTypes.SHOW_ADD_MEAL_MODAL, showAddMealModal)
    }

  return (
    <FoodContainer>
        {/* <FoodImageBanner image={mealTable}/> */}
          <FoodDisplayContainer>
            <FoodCTA>
            <h1>Your meal plan just got easier.</h1>
           <p>Easily plan and organise what you'd like to eat for the day or the week, whilst keeping track of your calories and nutrition</p>
           <p>It is very easy to get started, simply search for the food you like and it will be added to your meal plan for when your convinence at any time.</p>
           {/* <MealSearchTextContainer>
         <span><FoodSearchIcon/></span>
         
         <MealSearchButton onClick={showAddMealModalHandler
        }>Find meal</MealSearchButton>
         </MealSearchTextContainer> */}
            </FoodCTA>
          <FoodBanner image={foodBannerImage}></FoodBanner>
      

    
    </FoodDisplayContainer>
{/* 
    <FoodList /> */}
    {/* <FoodFeedBack  verified={verified} feedBackMessage={feedBackMessage} /> */}

        
    </FoodContainer>
  )
}

export default Food