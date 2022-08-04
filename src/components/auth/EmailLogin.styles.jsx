import styled from 'styled-components'
import { variables } from '../../styles/variables'
import Input from '../form/Input'
import Button from '../ui/button/Button'


export const EmailLoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: 30px auto 0 auto;

   padding: 0 10px;
`

export const EmailLoginInputContainer = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
`

export const EmailInput = styled(Input)`
    
`
export const EmailLogInButton = styled(Button)`
 width: 100%;

background-color: ${variables.blue};
color: ${variables.white};
`

export const ErrorMessage = styled.p`
    color: ${variables.red};
    text-align: start;
   
    font-weight: bold;
    font-size: 1.2rem;
`


export const ForgotPasswordText = styled.p`
    text-align: start;
  width: 100%;

    span{
        font-weight: bold;
        color: ${variables.blue};
        cursor: pointer;
    }
`