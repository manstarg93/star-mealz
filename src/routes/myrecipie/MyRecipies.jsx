import React, { useContext, useEffect, useState } from 'react'
import MyRecipieMeal from '../../components/myRecipieMeal/MyRecipieMeal'
import { AuthContext } from '../../context/AuthContext'
import { RecipieContext } from '../../context/RecipieContext'

import { LoadingContainer, MyRecipieContainer, MyRecipieMealDescription, MyRecipieMealTitle } from './MyRecipies.styles'

const MyRecipies = () => {

  const {loading,getMealRecipieHandler} = useContext(RecipieContext)

const {userId} = useContext(AuthContext)

useEffect(() => {

  getMealRecipieHandler(userId)
},[userId])


  return (
    <MyRecipieContainer>
      <MyRecipieMealTitle>
        Your potential meal is stored here 
      </MyRecipieMealTitle>
      <MyRecipieMealDescription>
      There is no longer a need to worry about what to cook for dinner, Most meal plans also have a variety of dish available to pick from. 
      </MyRecipieMealDescription><MyRecipieMealDescription>
       Try selecting a meal below to see the list of dishes available for you.
      </MyRecipieMealDescription>
     

        {loading ? <LoadingContainer>...Loading</LoadingContainer> : null}
<MyRecipieMeal />

    </MyRecipieContainer>

  )
}

export default MyRecipies