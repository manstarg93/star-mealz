import styled from 'styled-components'
import { device } from '../../../styles/mediaquery'
import { variables } from '../../../styles/variables'
import Button from '../../ui/button/Button'
import {ModalContainer} from '../../ui/modal/Modal.styles'
import { MealSearchResultContainer } from './MealSearchResult.styles'

export const AddMealModalContainer = styled(ModalContainer)`
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
}
`

export const  AddMealModalHeaderContainer = styled.div`
    height: max-content;

display: flex;
justify-content: space-around;
align-items: center;
position: relative;

`


export const AddMealModalTitle = styled.h2`
    text-align: center;
    width: 100%;
    margin: 10px auto;
    font-size: 1.6rem;
    `

    export const CloseAddMealModalIconContainer = styled.div`
    
    svg{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    `

    export const AddMealModalForm = styled.form`
    display: flex;
        justify-content: space-between;
flex-direction: column;
align-items: center;
gap: 20px;
position: relative;
height: 100%;

    `






export const MealSearchContainer = styled.div`
   
   
    width: 100%;

`
export const NextButtonContainer = styled.div`
text-align: end;



width: 100%;
`

export const NextButton = styled(Button)`

background-color: ${variables.blue};
color: ${variables.white};

`

