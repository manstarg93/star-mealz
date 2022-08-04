import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'
import Button from '../ui/button/Button'

export const FoodContainer = styled.div`
width: 100%;

padding: 0 20px;
@media ${device.laptop}{
    padding: 10px 50px;
    background-color: ${variables.white};
    color: ${variables.darkGrey}
    
}
      
       
`


// export const FoodImageBanner = styled.div`
//     background-size: cover;
//     filter: brightness(60%);
//     background-image: ${({image}) => `url(${(image)})`};
//     width: 100%;
//     height: 300px;
    
// `

export const FoodDisplayContainer = styled.div`
    margin: 0 auto;
    display: flex;
   
    max-height: 100%;
  gap: 30px;
    justify-content: space-around;
    flex-direction: column;
   
      @media ${device.laptop}{
line-height: normal;
flex-wrap: nowrap;
flex-direction: row;
gap: auto;
min-height: 300px;
justify-content: space-between;

          }


`


export const FoodCTA = styled.div`
   width: 100%;
         

          p{
            line-height: 2;
          }
          h1{
              margin: 0;
          }

    @media ${device.laptop}{
        width: 50%;
}
`

export const FoodBanner = styled.div`
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    margin: 0 auto;
    border: none;
    width: 100%;
display: none;
    
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${variables.blue};

outline: none;
    @media ${device.laptop}{
       width: 60%;
       display: block;
       min-height: 300px;
}
`

export const RemoveTitle = styled.span`
   
    font-size: 1.6rem;
    padding: 20px;
    
`

export const FoodListMainContainer = styled.div`
    background-color: ${variables.white};
h1{

    text-align: center;
    text-transform: uppercase;
    padding: 20px;
}

   
`

export const AddToCartContainer = styled.div`
    
    margin: 0 auto;
    text-align: center;
    width: 100%;


    h1{
        font-size: 2rem;
        color: ${variables
        .darkGrey}
    }
`


export const AddToPlan = styled(Button)`
    
    
    
    
    transition: all .3s ease-in-out;

        border-radius: none;
        background-color: ${variables.lightBlue};
    
    &:hover{
        box-shadow: ${boxShadow('hover')};
        background-color: ${variables.blue};
    }
`


export const Header = styled.div`
    text-align: center;
    padding: 20px;
   text-transform: uppercase;
    font-weight: bold;
`


export const MealSearchTextContainer = styled.div`
      border-radius: 10px;
     
      text-align: start;
    background-color: ${variables.white};
    color: ${variables.darkGrey};
    border: solid ${variables.gray} 1px;
    padding: 0 10px ;
    text-align: start;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    span{


        svg{
            width: 25px;


height: 25px;
padding-right: 10px;
        }
    }

@media ${device.laptop}{
    width: 50%;
}

`

export const MealSearchButton = styled(Button)`
  font-weight: bold;
  width: 100%;
  color: ${variables.darkGrey};
background-color: ${variables.white};
box-shadow: none;
font-size: 1.6rem;
text-align: start;
  
`

