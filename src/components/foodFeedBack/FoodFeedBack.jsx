import React from 'react'
import { ErrorTitle, SuccessTitle } from './FoodFeedBack.styles'

const FoodFeedBack = (props) => {

    let feedBack;
    if(props.verified === true){
        feedBack = <SuccessTitle>{props.feedBackMessage ? props.feedBackMessage : null}</SuccessTitle>
    }
    else if(props.verified === false){
        feedBack =  <ErrorTitle>{props.feedBackMessage ? props.feedBackMessage : null}</ErrorTitle>
    }
  return feedBack

}

export default FoodFeedBack