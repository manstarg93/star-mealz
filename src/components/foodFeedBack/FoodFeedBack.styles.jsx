import styled from 'styled-components'
import { variables } from '../../styles/variables'


export const FoodFeedBackContainer = styled.div`
    
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: end
    ;
`

export const SuccessTitle = styled.p`
    width: 100%;
    width: max-content;
    color: ${variables.green};
    padding: 10px;
    text-transform: capitalize;
    margin: 0 auto;
`

export const ErrorTitle = styled.p`
    width: 100%;
    text-transform: capitalize;
    width: max-content;
    color: ${variables.red};
    padding: 10px;
    margin: 0 auto;
    
`