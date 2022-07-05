import styled from 'styled-components'
import { variables } from '../../styles/variables'
import Button from '../button/Button'


export const DeleteModalContainer = styled.div`
    
`

export const DeleteModalHeader = styled.h4`
    text-align: center;
`

export const DeleteModalButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`


export const CancelDeleteButton = styled(Button)`
    background-color: ${variables.red};
    color: ${variables.white};

    &:hover{
        opacity: .8;
    }
`

export const ConfirmDeleteButton = styled(Button)`
    background-color: ${variables.green};
    color: ${variables.white};
    &:hover{
        opacity: .8;
    }
`