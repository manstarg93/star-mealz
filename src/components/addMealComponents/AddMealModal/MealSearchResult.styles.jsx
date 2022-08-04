import styled from 'styled-components'
import { variables } from '../../../styles/variables'

export const MealSearchResultContainer = styled.div`
   
    position: absolute;
padding-top: 50px;
    top: 0;
    bottom: 0;

    left: 0;
    right: 0;
width: 100%;
z-index: 8;
background-color: ${variables.white};
overflow: auto;
display: ${props => props.show ? 'flex' : 'none'};
flex-direction: column;
height: 100%;
border: solid 1px ${variables.gray};
border-radius: 10px;
gap: 10px;


`

export const MealSearchResultListContainer = styled.ul`
   margin: 5px;
   padding: 5px;
cursor: pointer;
align-self: flex-end;

   width: 100%;
   margin: 0 auto;
  border-bottom: solid 1px ${variables.gray};

   &:not(:last-child){
    
   }
`

export const MealSearchResultLists = styled.li`
    font-weight: bold;
    color: ${variables.black};
    text-transform: capitalize;
`

export const MealServingCalories = styled.p`
    color: ${variables.darkGrey};
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 0 ;

    span{
        text-transform: lowercase;
    }
`