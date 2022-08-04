import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Input from '../form/Input'
import Button from '../ui/button/Button'
import { ModalContainer } from '../ui/modal/Modal.styles'

export const EmailAuthContainer = styled(ModalContainer)`
position: fixed;
overflow: auto;
height: 100vh;
width: 100%;
top: 0;
bottom: 0;
left: 0;
right: 0;

background-color: ${variables.white};
display: ${props => props.show ? 'block' : 'none'};


@media ${device.laptop}{
    @media ${device.laptop}{
        width: 50%;
        margin:0 auto;
        top: 50%;
        left: 50%;
        bottom: auto;
        border-radius: 10px;
    height: max-content;
      
            transform: translate(-50%, -50%)
    }
}
`

export const  EmailAuthHeaderContainer = styled.div`
    height: max-content;
padding: 0 10px;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
margin: 0;
`


export const EmailAuthTitle = styled.h2`
    text-align: center;
    width: 100%;

`
export const EmailAuthFormContainer = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: 40px auto 0 auto;
    gap: 50px;
    
   padding: 0 10px;
    ;
`

export const LoginInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
`

export const LoginInput = styled(Input)`
    
`
export const LogInButton = styled(Button)`
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