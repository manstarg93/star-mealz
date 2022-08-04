import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'
import Modal from '../ui/modal/Modal'
import { ModalContainer } from '../ui/modal/Modal.styles'


export const AuthPromptContainer = styled(ModalContainer)`
    background-color: ${variables.lightBlue};
    position: fixed;
   width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 30vh;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 15px;

    display: ${props => props.show ? 'block' : 'none'};
    @media ${device.tablet}{
        min-height: 70vh;
    }
    @media ${device.laptop}{
        width: 50%;
        margin:0 auto;
        top: 50%;
        left: 50%;
        bottom: auto;
        border-radius: 10px;
       
        min-height: 30vh;
            transform: translate(-50%, -50%)
    }
`

export const AuthPromptTitle = styled.p`
    text-align: center;
    color: ${variables.black};
`

export const AuthPromptButton = styled(Button)`
    width: 100%;
    padding: 15px;
    text-transform: uppercase;
    color: ${variables.black};
    background-color: ${variables.white};
    margin: 10px auto;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    span{

        svg{
width: 25px;


height: 25px;
padding-right: 5px;

        }
    }
`