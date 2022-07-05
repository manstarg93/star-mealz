import styled from 'styled-components'
import { boxShadow, variables } from '../../styles/variables'
import Input, { Select } from '../form/Input'

export const FoodListContainer = styled.div`
    display: flex;
    justify-content: space-around;
margin: 20px auto;
    align-items: center;

    &:nth-child(2n){
        background-color: ${variables.lightGray};
    }
`

export const FoodListItems = styled.div`

    margin: 10px auto;
    text-align: center;
    h1{
        margin: 10px;
    }

    p{
text-transform: capitalize;
    }
`







export const AddRemoveContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
gap: 15px;
    position: relative;
`

