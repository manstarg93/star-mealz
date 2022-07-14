import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../button/Button'
import Input from '../form/Input'

export const EmailLoginContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 40px auto;

`

export const SignUpLoginButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`

export const SubmitLogin = styled(Button)`
    background-color: ${variables.green};
    color: ${variables.white};
    width: 100%;
    padding:10px;

  
`

export const GoogleButton = styled(Button)`

background:linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335);
color: ${variables.white};
    width: 100%;
    padding:10px;
    
  
`

export const EmailLoginInput = styled(Input)`
    padding: 10px;
    border-radius: 10px;
`

export const ErrorMessage = styled.p`
    color: ${variables.red};
    text-align: start;
    height: 20px;
    font-weight: bold;
    font-size: 1.2rem;
`



