import React, { Fragment, useContext, useEffect, useState } from 'react'
import MyRecipieMeal from '../../components/myRecipieMeal/MyRecipieMeal'
import LoadingSpinner from '../../components/ui/loading/LoadingSpinner'
import { AuthContext } from '../../context/AuthContext'
import { RecipieContext } from '../../context/RecipieContext'

import { LoadingContainer, MyRecipieContainer, MyRecipieMealDescription, MyRecipieMealTitle } from './MyRecipies.styles'

const MyRecipies = () => {

  const {loading,getMealRecipieHandler,recipies} = useContext(RecipieContext)

const {userId} = useContext(AuthContext)

useEffect(() => {

  getMealRecipieHandler(userId)
},[userId])


  return (
    <MyRecipieContainer>
      <MyRecipieMealTitle>
        Your potential meal is stored here 
      </MyRecipieMealTitle>
      {recipies.length !== 0 && <Fragment> <MyRecipieMealDescription>
      There is no longer a need to worry about what to cook for dinner, Most meal plans also have a variety of dish available to pick from. 
      </MyRecipieMealDescription><MyRecipieMealDescription>
       Try selecting a meal below to see the list of dishes available for you.
      </MyRecipieMealDescription></Fragment>}
     
     

        {loading ? <LoadingSpinner/> : null}
<MyRecipieMeal />

    </MyRecipieContainer>

  )
}

export default MyRecipies