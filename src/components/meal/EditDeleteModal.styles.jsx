import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'
import { ModalContainer } from '../ui/modal/Modal.styles'


export const EditDeleteModalContainer = styled(ModalContainer)`
    
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    gap: 20px;
    flex-direction: column;
    position: fixed;
width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${props => props.show ? 'flex' : 'none'};
    background-color: ${variables.white};

    @media ${device.laptop}{

        top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
`

export const EditDeleteTitle = styled.h2`
    
width: 100%;
padding: 10px;
    margin: 0 auto;
    font-size: 1.6rem;
    text-align: center;
    text-transform: capitalize;
`




export const EditButton = styled(Button)`
    background-color: ${variables.white};
    border: solid 1px ${variables.blue};
    color: ${variables.blue};
`

export const DeleteButton = styled(Button)`
     background-color: ${variables.white};
    border: solid 1px ${variables.red};
    color: ${variables.red};
`


export const ModalAlteringTitle = styled.h4`
    text-align: center;
    text-transform: capitalize
    ;
`

export const EditDeleteIconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`