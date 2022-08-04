import styled from 'styled-components'
import { variables } from '../../styles/variables'
import Input from '../form/Input'
import Button from '../ui/button/Button'


export const EmailSignUpFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: 40px auto 0 auto;
    gap: 50px;
    
   padding: 0 10px;
`

export const EmailSignUpInputContainer = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
`

export const EmailInput = styled(Input)`
    
`
export const EmailSignUpButton = styled(Button)`
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