import styled from 'styled-components'
import { device } from '../../../styles/mediaquery'
import { variables } from '../../../styles/variables'
import Button from '../../ui/button/Button'
import { ModalContainer } from '../../ui/modal/Modal.styles'
import { OccasionSelectorItem } from './InitialAddMeal.styles'

export const InitialAddMealModalContainer = styled(ModalContainer)`

overflow: scroll;
position: fixed;
background-color: ${variables.white};
height: 100vh;
width: 100%;
top: 0;
bottom: 0;
left: 0;
right: 0;
gap: 40px;
padding: 15px;

justify-content: flex-start;
display: ${props => props.show ? 'flex' : 'none'};

flex-direction: column;

@media ${device.laptop}{
    width: 50%;
        margin:0 auto;
        top: 50%;
        left: 50%;
        bottom: auto;
        border-radius: 10px;
    height: 80vh;
      
            transform: translate(-50%, -50%)
}`

export const OccasionSelectorModalContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
height: 100%;
`

export const InititalAddMealModalDone = styled(Button)`
width: 100%;
background-color: ${variables.yellow};
color: ${variables.white};
justify-self: flex-end;
`

export const OccasionItemModal = styled(OccasionSelectorItem)`
    background-color: ${variables.lightGray};
`

export const InitialAddMealModalTitle = styled.div`
     text-align: center;
    width: 100%;
    margin: 10px auto;
    font-size: 2rem;
`