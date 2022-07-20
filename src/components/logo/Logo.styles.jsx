import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'

export const LogoContainer = styled.div`
    
    svg{
        fill: ${variables.blue};
        width: 30px;
        height: 30px;
        cursor: pointer;

        @media ${device.tablet}{
          width: 50px;
        height: 50px;
        }
    }
`