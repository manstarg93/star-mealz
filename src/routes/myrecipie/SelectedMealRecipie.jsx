import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import MySelectedRecipie from '../../components/myRecipieMeal/MySelectedRecipie'
import LoadingSpinner from '../../components/ui/loading/LoadingSpinner'
import { AuthContext } from '../../context/AuthContext'
import { RecipieContext } from '../../context/RecipieContext'
import { LoadingContainer } from './MyRecipies.styles'
import { SelectedMealRecipieContainer } from './SelectedMealRecipie.styles'

const SelectedMealRecipie = () => {

  const {loading,getSelectedRecipieHandler} = useContext(RecipieContext)
  const {userId} = useContext(AuthContext)

  const params = useParams()
  useEffect(() => {
  
    getSelectedRecipieHandler(userId, params.dishTitle.toLowerCase(), params.title.toLowerCase())
  },[userId,params.dishTitle,params.title])
  return (
    <SelectedMealRecipieContainer>
        
        {loading && <LoadingSpinner/> }
        <MySelectedRecipie/>
    </SelectedMealRecipieContainer>
  )
}

export default SelectedMealRecipie