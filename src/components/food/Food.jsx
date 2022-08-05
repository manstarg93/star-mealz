import React from 'react'
import { FoodContainer,FoodDisplayContainer,  FoodBanner, FoodCTA } from './Food.styles'


import foodBannerImage from '../../assets/headerImg.jpg'



const Food = () => {




  return (
    <FoodContainer>

          <FoodDisplayContainer>
            <FoodCTA>
            <h1>Your meal plan just got easier.</h1>
           <p>Plan, organise and enjoy whatever meal you would like to eat, you can also view the amount of calories and nutrition each meal provides when adding a meal.</p>
           <p>It is very easy to get started, simply search for a meal that you like and it will be added to a meal plan for you to access at any time.</p>
           <p>Lets get started.</p>

            </FoodCTA>
          <FoodBanner image={foodBannerImage}></FoodBanner>
      

    
    </FoodDisplayContainer>


        
    </FoodContainer>
  )
}

export default Food