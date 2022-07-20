import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'

export const AddMealContainer  = styled.div`
    

    svg{
        fill: ${variables.green};
        width: 28px;
        height: 28px;
       cursor: pointer;
       display: none;
       @media ${device.desktop}{
            display: none;
        }
    }
`

export const AddButton = styled(Button)`
    display: block;
    background-color: ${variables.white};
    color: ${variables.blue};
    border: solid 1px ${variables.blue};
  
`