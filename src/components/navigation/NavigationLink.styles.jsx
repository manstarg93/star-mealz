import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { variables } from '../../styles/variables'
import { device } from '../../styles/mediaquery'
import Button from '../button/Button'



export const NavigationLinkContainer  =  styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
flex-wrap: wrap;
gap: 10px;
padding: 0;
@media ${device.mobile}{
    justify-content: space-between;
    gap: 25px;
}
`


export const NavigationLinks  = styled(Link)`
    font-size: 1.4rem;
    color: ${variables.white};
font-weight: bold;
padding-bottom: 3px;
text-transform: uppercase;
padding-bottom: 5px;

&:hover{
    
     border-bottom: .1px solid ${variables.white};
        }

        @media ${device.mobile}{
            font-size: 1.6rem;
        }

     

`



export const LoginRegisterButton = styled(Button)`
    
    background-color: ${variables.white};
    color: ${variables.green};
    padding: 10px;
`

export const LogoutButton = styled(Button)`
    color: ${variables.red};
    background-color: ${variables.white};
    padding: 10px;
`