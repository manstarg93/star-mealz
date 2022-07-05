import styled from 'styled-components'
import { variables } from '../../styles/variables'


export const MealItemsContainer = styled.div`
     width: 100%;

     transition: all 0.3s ease-in-out;
`

export const MealCrudContainer = styled.div`
  
    align-items: center;
    gap: 20px;
    justify-content: center;
    display: none;

    
`
export const MealItemsLi = styled.li`

    text-align: center;
    border-right: solid .2px ${variables.gray};
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    height: 100%;
    text-transform: capitalize;

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

  
    border: solid .2px ${variables.gray};
    
  

`
export const MealItemsHeading = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    
    width: 100%;
    padding: 10px;
    margin: 0 auto;
`
export const MealItemsUl = styled.ul`
     display: flex;
     justify-content: center;
    gap: 20px;
    align-items: center;
   
    margin: 0 auto;
    height: 40px;
    border: solid .2px ${variables.gray};
   
    color: ${variables.darkGrey};


    cursor: pointer;
    &:nth-child(2n){
        background-color: ${variables.lightBlue};
        color: ${variables.white};
        fill: ${variables.white};
    }
    &:hover  > ${MealItemsLi} > ${CalDelEdit} > ${MealCrudContainer}{
        display: flex;
       

   
        
    }
   

    @keyframes slideIn {
  0% {
    opacity: 0.3;
  }
  100% {
   opacity: 1;
  }
}
`









export const TotalWeightContainer = styled.div`
    text-align: end;
    margin: 30px auto;

`
export const TotalWeight = styled.h4`
   color: ${variables.darkGrey};

`

export const AddMealContainer = styled.h4`
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
`