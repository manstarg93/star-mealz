import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'
import Button from '../ui/button/Button'
import { CardContainer } from '../ui/card/Card.styles'

export const SelectedRecipieContainer = styled.div`
       width: 100%;
margin: 0 auto;
position: relative;
padding: 10px;

@media ${device.tablet}{
    width: 80%;
}


`
export const ServingKalMealContainer = styled.div`
padding: 10px;
background-color: ${variables.blue};

color: ${variables.white};

width: 100%;
`

export const InnerSelectedRecipie = styled(CardContainer)`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

height: 100%;

@media ${device.laptop}{
    
    flex-wrap: nowrap;
}

`



export const InstructionIngredientsContainer = styled.div`
min-height: 300px;
overflow: auto;
width: 100%;
position: relative;

@media ${device.laptop}{
    max-height: 350px;
    min-height: 350px;
    flex-wrap: nowrap;
}
`

export const InstructionIngredientNav = styled.div`

padding: 10px;
margin-bottom: 10px;
background-color: ${variables.blue};
color: ${variables.white};
box-shadow: ${boxShadow};


&:not(:last-child){
    border-right: solid 1px ${variables.lightGray};
}
width: 100%;
&:hover{
    opacity: .8
}
`

export const InstIngFilterContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
align-items: flex-start;

cursor: pointer;
`

export const ImageContainer = styled.img`
    width: 100%;
height: 100%;
    filter: brightness(50%);

    @media ${device.laptop}{
    max-height: 350px;
    min-height: 350px;
    flex-wrap: nowrap;
}

`


export const MySelectedRecipieImageContainer = styled.div`
    min-height: 300px;
    width: 100%;
    position: relative;
    
 
`

export const RecipieTitle = styled.h2`
font-size: 1.8rem;
text-align: start;
position: absolute;
top: 0;
left: 0;
color: ${variables.white};
z-index: 8;
padding: 10px;
background-color: ${variables.yellow};
margin: 0;

`

export const RecipieDescription = styled.p`
text-align: center;
margin: 0 auto;
width: 100%;


@media ${device.tablet}{
    width: 70%;
}
`



export const InstructionIngredientContainer = styled.ul`
   padding: 0;
    max-height: 100%;
`

export const ItemList = styled.li`
  
    color: ${variables.darkGrey} ;
    width: 100%;
    text-align: start;
`

export const InstructionTitle = styled.h4`
color: ${variables.darkGrey};
    width: 100%;
background-color: ${variables.lightGray};
    box-shadow: ${boxShadow};
    padding: 10px;
    text-align: center;
`


export const ItemListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    padding: 10px;
`
export const CheckedIconContainer = styled.span`
    padding-right: 5px;
    margin: 0 auto;

   svg{
       height: 15px;
       width: 15px;
       fill: ${variables.blue};
       
   }
`

export const GoBackButtonContainer = styled.div`
   
margin: 20px auto;
text-align: start;
`

export const GoBackButton = styled(Button)`

background-color: ${variables.white};
color: ${variables.blue};
border: solid 1px ${variables.blue};
transition: all .5s ease-in-out;

&:hover{
    border: solid 1px ${variables.blue};
    
}
`