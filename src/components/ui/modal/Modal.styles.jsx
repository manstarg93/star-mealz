import styled from 'styled-components'
import { device } from '../../../styles/mediaquery'
import { boxShadow, variables } from '../../../styles/variables'


export const ModalContainer = styled.div`
  
  z-index: 999;
padding: 0;
`

export const ModalBackDrop = styled.div`
 
   position: fixed;
   top: 0;
  right: 0;
  bottom: 0;
  left: 0;
    background-color: ${variables.black};
    opacity: 0.3;
    z-index: 998;
    display: ${props => props.show ? 'block' : 'none'};
`

export const ModalHeader = styled.div`
width: 100%;
    display: flex;
    background: ${variables.blue};
    flex-direction: column;
    gap: 20px;
    color: ${variables.white};
    padding: 15px;

 
`



export const ModalIcons = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
display: flex;


`
export const ModalIconContainer = styled.div`

      svg{
        cursor: pointer;
        fill: ${variables.white};
        width: 30px;
        height: 30px;
    }
`

export const ModalTitle = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: capitalize;
    width: 100%;
    text-align: center;
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
   padding: 15px;
    background-color: ${variables.white};
    width: 100%;
    height: 100%;
`