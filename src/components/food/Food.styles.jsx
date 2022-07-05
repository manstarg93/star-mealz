import styled from 'styled-components'
import { boxShadow, variables } from '../../styles/variables'
import Button from '../button/Button'

export const FoodContainer = styled.div`

        box-shadow: ${boxShadow};
        padding-bottom: 20px;
`

export const FoodImageBanner = styled.div`
    background-size: cover;
    filter: brightness(60%);
    background-image: ${({image}) => `url(${(image)})`};
    width: 100%;
    height: 300px;
    
`

export const FoodDisplayContainer = styled.div`
    margin: 0 auto;
        padding:  15px;
  
        color: ${variables.darkGrey};
        background-color: ${variables.lightGray};
      h1{
          font-size: 2.4rem;

          text-align: center;
      }

      p{
          text-align: center;
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