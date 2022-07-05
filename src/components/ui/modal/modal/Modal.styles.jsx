import styled from 'styled-components'
import { boxShadow, variables } from '../../../../styles/variables'

export const ModalContainer = styled.div`
    width: max-content;
    max-width: 50%;
    margin: 0 auto;
    height: max-content;
    padding: 10px;
    max-height: 450px;
    position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
    background-color: ${variables.white};
    box-shadow: ${boxShadow};
    display: ${props => props.show ? 'block' : 'none'};
  z-index: 999;


`

export const ModalBackDrop = styled.div`
   position: fixed;
   position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
    background-color: ${variables.darkGrey};
    opacity: 0.8;
    z-index: 998;
    display: ${props => props.show ? 'block' : 'none'};
`

export const ModalHeader = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: max-content;
`

export const ModalTitle = styled.h1`
    font-size: 1.6rem;
`

export const CloseModalContainer = styled.div`
 
    svg{
        fill: ${variables.darkGrey};
        width: 20px;
        height: 20px;
       cursor: pointer;
    }
`

export const ModalBody = styled.div`
    
`