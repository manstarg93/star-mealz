import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../button/Button'

export const ClearMealContainer = styled.div`
    text-align: center;

    /* span{
        padding: 8px 5px 0 5px;
    border-radius: 50%;
    border: 1px solid ${variables.red};

    } */
    svg{
        width: 33px;
        height: 33px;
        fill: ${variables.red};
        cursor: pointer;
        display: none;
        
        @media ${device.desktop}{
            display: none;
        }
    }
`

export const ClearButton = styled(Button)`
    display: block;
    background-color: ${variables.red};
    color: ${variables.white};

`