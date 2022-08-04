import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import {boxShadow, variables} from '../../styles/variables'
import Input from '../form/Input'
import Button from '../ui/button/Button'
import { ModalContainer } from '../ui/modal/Modal.styles'



export const EditModalContainer = styled(ModalContainer)`
  
position: fixed;
background-color: ${variables.white};

top: 0;
bottom: 0;
left: 0;
right: 0;
gap: 40px;
padding: 15px;
height: 100%;
overflow: auto;
width: 100%;
display: ${props => props.show ? 'flex' : 'none'};
justify-content: space-between;

flex-direction: column;


@media ${device.laptop}{
    width: 50%;
        margin:0 auto;
        top: 50%;
        left: 50%;
        bottom: auto;
        border-radius: 10px;
        flex-direction: column;
    height: 80vh;
    
            transform: translate(-50%, -50%)
}
`


export const  MealAddingHeaderContainer = styled.div`


display: flex;
justify-content: space-around;
align-items: center;
position: relative;

`


export const MealAddingTitle = styled.h2`
    text-align: center;
    width: 100%;
    margin: 0;
    text-transform: capitalize;
    `

    export const CloseMealAddingIconContainer = styled.div`
    
    svg{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    `

export const MealAddingFormContainer = styled.form`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
gap: 20px;
height: 100%;
margin: 0 auto;

@media ${device.laptop}{
    width: 80%;
}
`

export const ConfirmButtonContainer = styled.div`
align-self: flex-end;
justify-self: flex-end;
width: 100%;
margin: 0 auto;
position:sticky;
bottom: 0;
`
export const ServingAndCalorieCountContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
`
export const ServingInputContainer = styled.div`
    display: flex;
width: 100%;
    justify-content: center;
    align-items: center;
   gap: 20px;

    margin: 0 auto;

    @media ${device.laptop}{
        width: 100%;
    }

`
export const ServingInput = styled(Input)`
    border: none;
    border-bottom: solid .5px ${variables.gray};
    padding: 13px;

    &:focus-visible{
        outline: none;
        border: none;
        border-bottom: solid .5px ${variables.gray};
    }
`
export const SearvingText = styled.p`
    width: 100%;
    text-align: start;
    border-bottom: solid .5px ${variables.gray};
    font-weight: bold;
    padding: 10px;

    margin: 0;
`

export const TotalCaloriesText = styled.p`
padding-right: 5px;
font-weight: bold;
`
export const TotalCalories = styled.p`
padding-right: 5px;
font-weight: bold;
`


export const CalorieCountAndNutritionContainer = styled.div`
 width: 100%;
margin: 20px auto;

 @media ${device.laptop}{
        width: 100%;
    }
`


export const NutritionalInformationContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 20px;
margin-bottom: 40px;
`

export const NutritionalInformationTitle = styled.div`
text-align: center;
font-weight: bold;

margin-top: 30px ;
padding: 10px ;
width: 100%;
border: ${variables.blue} solid 1px;
color: ${variables.blue};
`



export const NutritionContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 5px;
align-items: center;
width: 100%;
`

export const MainNutritionContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const MinorNutritionContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const MinorNutrition = styled.li`
color: ${variables.gray};

font-size: 1.4rem;
`




export const Nutrition = styled.li`
font-weight: bold;
`
export const NutritionSize = styled.li`
font-weight: bold;
`


export const FeedBackMessageErrorContainer = styled.p`
color: ${variables.red};
text-align: center;
padding: 10px;
`

export const FeedBackMessageSuccessContainer = styled.p`
color: ${variables.green};
text-align: center;
padding: 10px;
`

export const ConfirmEditButton = styled(Button)`
    background-color: ${variables.blue};
    color: ${variables.white};
    width: 100%;
    &:hover{
opacity: 1;
    }
`