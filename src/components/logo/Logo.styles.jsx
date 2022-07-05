import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const LogoContainer = styled.div`
    
    width: 30%;
    border-right: solid 1px ${variables.lightGray};
  text-align: center;
    height: 100%;

    position: relative;
    
    svg{

        position: absolute;
        top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    }
`