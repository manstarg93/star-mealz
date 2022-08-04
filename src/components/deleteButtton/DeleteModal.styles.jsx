import styled from 'styled-components'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'
import { ModalContainer } from '../ui/modal/Modal.styles'


export const DeleteModalContainer = styled(ModalContainer)`

position: fixed;
    justify-content: center;
    align-items: center;
    background-color: ${variables.white};
    gap: 50px;
    flex-direction: column;
        top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${props => props.show ? 'flex' : 'none'};
 
`

export const DeleteModalHeader = styled.h4`
    text-align: center;
    padding: 10px;
    text-align: center;
`

export const DeleteModalButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 70%;
    margin: 0 auto;
`


export const CancelDeleteButton = styled(Button)`
    background-color: ${variables.red};
    color: ${variables.white};
    width: 100%;

`

export const ConfirmDeleteButton = styled(Button)`
    background-color: ${variables.green};
    color: ${variables.white};
    width: 100%;
`