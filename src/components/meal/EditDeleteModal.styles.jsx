import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'


export const EditDeleteModalContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    gap: 50px;
    background-color: ${variables.white};
`

export const DeleteIconContainer = styled.div`
    

    
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
export const EditIconContainer = styled.div`
    

    svg{
        fill: ${variables.green};
        width: 10px;
        height: 10px;
       cursor: pointer;
    

       @media ${device.tablet}{
        width: 20px;
        height: 20px;
       }
    }
`

export const ModalAlteringTitle = styled.h4`
    text-align: center;
    text-transform: capitalize
    ;
`