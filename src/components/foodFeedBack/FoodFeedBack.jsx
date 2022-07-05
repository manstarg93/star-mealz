import React from 'react'
import { ErrorTitle, SuccessTitle } from './FoodFeedBack.styles'

const FoodFeedBack = (props) => {

    let feedBack;
    if(props.addClicked && props.added === true){
        feedBack = <SuccessTitle>{props.feedBackMessage}</SuccessTitle>
    }
    else if(props.addClicked && props.added === false){
        feedBack = <ErrorTitle>{props.feedBackMessage}</ErrorTitle>
    }
  return feedBack

}

export default FoodFeedBack