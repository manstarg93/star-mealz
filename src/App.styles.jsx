
import styled from 'styled-components'
import { device } from './styles/mediaquery'
import { boxShadow, variables } from './styles/variables'

export const AppContainer  = styled.div`


box-sizing: border-box;




@media ${device.laptop}{
    
    height: 100%;

    background-color: ${variables.white};
}

`
