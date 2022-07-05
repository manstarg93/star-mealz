import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'
import Input, { Select } from '../form/Input'

export const FoodListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin: 10px auto;
    
  @media ${device.desktop}{
flex-direction: row;
  }


`

export const FoodListItems = styled.div`

    margin: 10px auto;

    width: 100%;
    padding: 0 10px;
    text-align: center;
    h1{
        margin: 10px;
    }

    p{
text-transform: capitalize;
    }

    @media ${device.desktop}{
        width: auto;
    }
`







export const AddRemoveContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
gap: 20px;
    position: relative;
`

