import React from 'react'
import { FoodContainer,FoodDisplayContainer,  FoodBanner, FoodCTA } from './Food.styles'


import foodBannerImage from '../../assets/headerImg.jpg'



const Food = () => {




  return (
    <FoodContainer>

          <FoodDisplayContainer>
            <FoodCTA>
            <h1>Your meal plan just got easier.</h1>
           <p>Plan, organise and enjoy whatever you'd like to eat for the day or the week, each food that you add has a summary of the calorie and detailed nutritions they provide for you.</p>
           <p>It is very easy to get started, simply search for the food you like and it will be added to your meal plan which you can access at any time.</p>
           <p>Lets get started.</p>

            </FoodCTA>
          <FoodBanner image={foodBannerImage}></FoodBanner>
      

    
    </FoodDisplayContainer>


        
    </FoodContainer>
  )
}

export default Food