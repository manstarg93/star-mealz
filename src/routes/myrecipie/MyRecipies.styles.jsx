import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'


export const MyRecipieContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    background-color: ${variables.white};
    padding: 15px;
`

export const MyRecipieMealTitle = styled.h1`
    font-size: 1.6rem;
`

export const MyRecipieMealDescription = styled.p`
    text-align: center;

    margin: 0 auto;
   width: 100%;
   
    
    @media ${device.tablet}{
        width: 70%;
    }
`

export const LoadingContainer = styled.p`
    text-align: center;
    padding: 20px;
    
`

