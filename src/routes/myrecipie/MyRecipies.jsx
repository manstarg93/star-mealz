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
      Lets try different dishes 
      </MyRecipieMealTitle>
      <MyRecipieMealDescription>
      Vivamus tempor aliquet dui, nec lacinia purus pellentesque vitae. Vivamus sit amet libero urna. Proin sagittis tellus ac erat fringilla, accumsan congue sem sollicitudin. Nunc in ligula dapibus, <br></br> <br></br>Pellentesque libero vel, rutrum lacus. Curabitur luctus, nulla sed pulvinar dapibus, velit mauris dapibus felis, ut malesuada est turpis ut lectus. 
      </MyRecipieMealDescription>

        {loading ? <LoadingContainer>...Loading</LoadingContainer> : null}
<MyRecipieMeal />

    </MyRecipieContainer>

  )
}

export default MyRecipies