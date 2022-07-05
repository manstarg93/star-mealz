
import styled from 'styled-components'
import { boxShadow, variables } from './styles/variables'

export const AppContainer  = styled.div`
height: 100%;
width: 80%;
box-sizing: border-box;
margin: 40px auto;
box-shadow: ${boxShadow};
background-color: ${variables.white};

`
