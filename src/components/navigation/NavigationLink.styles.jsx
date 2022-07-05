import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { variables } from '../../styles/variables'



export const NavigationLinkContainer  =  styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
flex-wrap: wrap;
padding-right: 20px;
`


export const NavigationLinks  = styled(Link)`
    
color: ${variables.darkGrey};
padding: 0 10px;
font-weight: bold;
padding-bottom: 3px;
text-transform: uppercase;

&:hover{
    
     border-bottom: .1px solid ${variables.white};
        }

     

`