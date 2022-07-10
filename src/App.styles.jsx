
import styled from 'styled-components'
import { device } from './styles/mediaquery'
import { boxShadow, variables } from './styles/variables'

export const AppContainer  = styled.div`


box-sizing: border-box;




@media ${device.laptop}{
    width: 80%;
    height: 100%;
    box-shadow: ${boxShadow};
    margin: 40px auto;
    background-color: ${variables.white};
}

`
