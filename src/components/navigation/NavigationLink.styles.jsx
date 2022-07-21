import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { variables } from '../../styles/variables'
import { device } from '../../styles/mediaquery'
import Button from '../ui/button/Button'




export const NavigationLinkContainer  =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
flex-wrap: wrap;
gap: 20px;
padding: 0 10px;
margin: 20px auto;
text-align: start;
width: 100%;
@media ${device.laptop}{
    justify-content: flex-end;
    gap: 25px;
    
    flex-direction: row;
    align-items: center;
}
`


export const NavigationLinks  = styled.li`
    font-size: 1.6rem;
    color: ${variables.darkGrey};
font-weight: bold;
width: 100%;
text-transform: uppercase;



@media ${device.laptop}{
            width: max-content;
        }

&:hover{
    
     border-bottom: .1px solid ${variables.blue};
        }

        @media ${device.laptop}{
          
        }

     

`



export const LoginRegisterButton = styled(Button)`
    
    background-color: ${variables.blue};
    color: ${variables.white};
    padding: 10px;
    width: 100%;

    @media ${device.laptop}{
        width: max-content;
    }
`

export const LogoutButton = styled(Button)`
    color: ${variables.white};
    background-color: ${variables.yellow};
    padding: 10px;
    width: 100%;

    @media ${device.laptop}{
        width: max-content;
    }
`

export const WelcomeContainer = styled.div`

padding: 10px;
border: solid 1px ${variables.blue};
border-radius: 20px;
display: none;

span{
font-style: italic;
color: ${variables.blue};
font-weight: bold;
padding: 0 10px;

}

@media ${device.laptop}{
       display: block;
    }
`

