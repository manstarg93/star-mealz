import styled from 'styled-components'
import { variables } from '../../styles/variables'
import Button from '../button/Button'
import Input from '../form/Input'

export const EmailLoginContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`



export const SubmitLogin = styled(Button)`
    background-color: ${variables.green};
    color: ${variables.white};
    width: 100%;
    padding:10px;
`

export const EmailLoginInput = styled(Input)`
    padding: 10px;
    border-radius: 10px;
`