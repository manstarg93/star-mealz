import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'


export const DeleteButtonContainer = styled.div`
    
    svg{
        fill: ${variables.red};
        width: 10px;
        height: 10px;
       cursor: pointer;
    
       @media ${device.tablet}{
        width: 20px;
        height: 20px;
       }
    }
`