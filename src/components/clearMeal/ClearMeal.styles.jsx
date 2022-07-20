import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'

export const ClearMealContainer = styled.div`
    text-align: center;

    svg{
        width: 33px;
        height: 33px;
        fill: ${variables.yellow};
        cursor: pointer;
        display: none;
        
        @media ${device.desktop}{
            display: none;
        }
    }
`

export const ClearButton = styled(Button)`
    display: block;
    background-color: ${variables.white};
    color: ${variables.yellow};
    border: solid 1px ${variables.yellow};
`