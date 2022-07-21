import styled from 'styled-components'
import { device } from '../../styles/mediaquery'

export const SelectedMealDishesContainer = styled.div`

margin: 0 auto;

@media ${device.tablet}{

margin: 50px auto 0 auto;
}
`

export const NoRecipieMessage = styled.h2`
        
        text-align: center;
        text-transform: capitalize;
        
`