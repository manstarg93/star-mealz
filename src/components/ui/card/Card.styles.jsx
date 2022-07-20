import styled from 'styled-components'
import { boxShadow } from '../../../styles/variables'


export const CardContainer = styled.div`
    
    box-shadow: ${boxShadow};
    background-color: white;
    border-radius: 10px;

    &:hover{
        box-shadow: ${boxShadow('hover')};
    }
`