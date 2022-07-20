import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'
import Button from '../ui/button/Button'
import { CardContainer } from '../ui/card/Card.styles'


export const MySelectedDishMainContainer = styled.div`
      width: 100%;
margin: 0 auto;

@media ${device.tablet}{
    width: 80%;
}

       
`


export const MyDishTitle = styled.h2`
text-align: center;
font-size: 1.6rem;

span{
        color: ${variables.blue};
        text-transform: capitalize;
        text-align: center;
}
`

export const MyDishDescription = styled.p`
width: 90%;
margin: 0 auto;
padding: 20px 0;
`

export const MySelectedDishContainer = styled.div`
display: flex;
justify-content: space-around;
gap: 50px;
margin: 50px auto;
width: 100%;
flex-wrap: wrap;
@media ${device.tablet}{
gap: 20px
}

`





export const MyDishList = styled(CardContainer)`
height: 250px;
width: 300px;
/* display: flex;
flex-direction: column;
justify-content: space-between; */
background-color: ${variables.lightGray};
cursor: pointer;
`

export const ImageTitleContainer = styled.div`
height: 100%;
background-color: ${variables.orange}; 
background: -webkit-linear-gradient(to left, #A83279, ${variables.orange} );
background: linear-gradient(to left, #A83279, ${variables.orange} ); 
position: relative;
`


export const DishImage = styled.img`
width: 100%;
height: 100%;
filter: brightness(50%);
`

export const DishTitle = styled.h1`
        width: 100%;
position: absolute;
color: ${variables.white};
top: 0;
left: 0;
padding: 10px;
margin: 0 auto;
font-size: 1.6rem;
text-transform: uppercase;
background-color: ${variables.blue};
box-shadow: ${boxShadow};


`

export const ViewRecipieContainer = styled.div`
width: 40%;
margin: 10px auto;
position: absolute;
bottom: 0;
left: 0;

right: 0;

`



export const ViewRecipie = styled(Button)`


background-color: ${variables.white};
color: ${variables.green};
`

export const NoRecipieMessage = styled.h2`
        
        text-align: center;
        text-transform: capitalize;
        width: 90%;
        margin: 0 auto;
        background-color:inherit;
        padding: 20px;
        
`

export const GoBackContainer = styled.div`
 width: 90%;
margin: 20px 0 20px 20px;
text-align: start;
`

export const ReturnButton = styled(Button)`
       background-color: ${variables.orange};
color: ${variables.white}; 

`