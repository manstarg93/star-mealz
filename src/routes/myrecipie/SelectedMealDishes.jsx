import React, {  useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import MySelectedDish from '../../components/myRecipieMeal/MySelectedDish'
import { AuthContext } from '../../context/AuthContext'
import { RecipieContext } from '../../context/RecipieContext'
import { LoadingContainer } from './MyRecipies.styles'
import { NoRecipieMessage, SelectedMealDishesContainer } from './SelectedMealDishes.styles'

const SelectedMealDishes = () => {

    const {loading,addMealDishHandler} =  useContext(RecipieContext)
    const {userId} = useContext(AuthContext)
    const params = useParams()


   useEffect(() => {

        addMealDishHandler(userId,params.title)
   
    },[userId])

  return (
    <SelectedMealDishesContainer>

{loading && <LoadingContainer>...Loading</LoadingContainer> }

<MySelectedDish/>
    </SelectedMealDishesContainer>
  )
}

export default SelectedMealDishes