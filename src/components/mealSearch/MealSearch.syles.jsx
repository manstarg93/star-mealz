import styled from 'styled-components'
import { boxShadow, variables } from '../../styles/variables'
import Input from '../form/Input'


export const MealSearchContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;


`

export const MealSearchInput = styled(Input)`
    border: .1px solid ${variables.lightGray};
    margin-right: 10px;
     box-shadow: ${boxShadow};
    border-radius: 5px;

`