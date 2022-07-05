import styled from 'styled-components'
import { boxShadow, variables } from '../../styles/variables'

export const ButtonContainer = styled.button`

        padding: 15px;
    background-color: ${variables.blue};
    border: none;
    box-shadow: ${boxShadow};
    font-weight: bold;
    margin: 0 auto;
        transition: all .3s ease-in-out;
        color: ${variables.white};
        cursor: pointer;
        border-radius: 5px;
    
    &:hover{
        box-shadow: ${boxShadow('hover')};
        
        opacity: .8;
    
    }
`