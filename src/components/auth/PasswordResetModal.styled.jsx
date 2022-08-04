import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'
import { ModalContainer } from '../ui/modal/Modal.styles'

export const PasswordResetModalContainer = styled(ModalContainer)`
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

export const PasswordResetForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 90%;
gap: 30px;
margin: 0 auto;
padding: 10px 0;
`

export const ClosePasswordResetContainer = styled.div`

text-align: end;

svg{
    cursor: pointer;


}
`

export const ConfirmResetButton = styled(Button)`
background-color: ${variables.blue};
color: ${variables.white};
width: 100%;
justify-self: flex-end;
`

export const PasswordResetHeader= styled.div`
display: flex;
justify-content: space-between;
padding: 20px 0;
width: 90%;
margin: 0 auto;

`

export const PasswordResetTitle = styled.h2`
font-size: 1.6rem;
margin: 0;
width: 100%;
text-align: start;
`

export const FeedBackMessageContainer = styled.div`
width: 100%;

text-align: center;
`

export const FeedBackMessageError = styled.p`
color: ${variables.red};
padding: 0;
`

export const FeedBackMessageSuccess = styled.p`
color: ${variables.green};
padding: 0;
`