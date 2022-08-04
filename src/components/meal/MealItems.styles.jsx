import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'
import Button from '../ui/button/Button'


export const MealItemsContainer = styled.div`
     width: 100%;
   
     transition: all 0.3s ease-in-out;
`

export const MealCrudContainer = styled.div`
  display: none;
  flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
   

    @media ${device.tablet}{
        display: none;
        flex-direction: row;
    }
    
`
export const MealItemsLi = styled.li`

    text-align: center;

    font-weight: bold;
    padding: 5px;
    padding-top: 18px;
    text-transform: capitalize;
    font-size: 1.2rem;
    width: 100%;
    min-height: 50px;
    height: max-content;
    &:not(:last-child){
        border-right: solid 1px ${variables.lightGray};
    }
    @media ${device.tablet}{
        font-size: 1.4rem;
    }


    span{
        text-transform: lowercase;
    }

`


export const MealCal = styled.div`
    
`
export const CalDelEdit = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    transition: all 2s ease;
`

export const MealItemsHeader = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px auto 0 auto;
    height: max-content;
  align-items: center;
  padding: 0 10px;
 
    box-shadow: ${boxShadow};
    border: solid .5px ${variables.lightGray};
    background-color: ${variables.white};
    @media ${device.tablet}{

    }
  

`
export const MealItemsHeading = styled.h2`
    font-size: 1.4rem;
    text-align: center;
    padding: 5px;
    width: 100%;

    &:not(:last-child){
        border-right: solid 1px ${variables.lightGray};
    }
    text-transform: uppercase;
    color: ${variables.blue};
    font-weight: bold;
    @media ${device.tablet}{
        font-size: 1.6rem;
    }
`
export const MealItemsUl = styled.ul`
     display: flex;
     justify-content: space-around;
    gap: 20px;
    align-items: center;
    box-shadow: ${boxShadow};
    margin: 5px auto;
    height: max-content;
    min-height: 50px;
    padding: 0;
    
    color: ${variables.darkGrey};

    @media ${device.tablet}{
        
    }


    cursor: pointer;
    &:nth-child(2n){
        background-color: ${variables.white};
        color: ${variables.darkGrey};
        fill: ${variables.darkGrey};
    }
    /* &:hover  > ${MealItemsLi} > ${CalDelEdit} > ${MealCrudContainer}{
        display: flex;  
    } */
   

    @keyframes slideIn {
  0% {
    opacity: 0.3;
  }
  100% {
   opacity: 1;
  }
}
`

export const ViewRecipie = styled(Button)`
    background-color: inherit;
    color: ${variables.orange};
    /* box-shadow: none; */
    font-weight: bold;
    z-index: 99;

`








export const TotalWeightContainer = styled.div`
    text-align: end;
    margin: 30px auto;

`
export const TotalWeight = styled.h4`
   color: ${variables.darkGrey};
   font-size: 1.4rem;
  
`

export const AddMealContainer = styled.h4`
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
`