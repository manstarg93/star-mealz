import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'

export const FoodListContainer = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin: 10px auto;
    
  @media ${device.laptop}{
flex-direction: row;
width: 60%;
  }


`

export const FoodListItems = styled.div`

    margin: 10px auto;
    width: 80%;
   
    padding: 0 10px;
    text-align: center;
    h1{
        margin: 10px;
    }

    p{
text-transform: capitalize;
    }

    @media ${device.laptop}{
        width: 100%;
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


