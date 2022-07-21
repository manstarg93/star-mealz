import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'
import Card from '../ui/card/Card'
import { CardContainer } from '../ui/card/Card.styles'



export const RecipieMealsListContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    gap:50px;
    flex-wrap: wrap;
    margin: 50px auto;

    @media ${device.tablet}{
gap: 20px;
    }
`
export const NoRecipie = styled.h1`
    
`


export const RecipieMealsList = styled(CardContainer)`
height: max-content;
width: 250px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${variables.white};

cursor: pointer;
`



export const RecipieHeaderDesign = styled.div`
width: 100%;
height: 50%;
background-color: ${variables.orange}; 
background: -webkit-linear-gradient(to left, #A83279, ${variables.orange} );
background: linear-gradient(to left, #A83279, ${variables.orange} ); 
position: relative;

`

    export const RecipieMealTitle = styled.h1`
        
       background-color: ${variables.blue};
       width: 100%;
        color: ${variables.white};
        padding: 10px;
        text-align: center;
        font-size: 1.6rem;
        text-transform: uppercase;

    `

    export const ViewDishesContainer = styled.div`
        width: 100%;
        margin: 10px auto;

    `

  

    export const ViewDishes = styled(Button)`
        
        border: solid 1px ${variables.blue};
        background-color: ${variables.white};
        color: ${variables.blue}
    `

