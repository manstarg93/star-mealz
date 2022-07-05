import styled from  'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import SelectDay from '../selectDay/SelectDay'


export const MealContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const SelectDayInput = styled(SelectDay)`
    width: max-content;
`

export const MyMealLists = styled.div`
    
  margin: 20px auto;
padding: 10px 0 10px 0;

`

export const MyMealList = styled.div`
text-align: start;
font-size: 1.6rem;
   
`

export const MealListItemsContainer = styled.div`
    
    display: flex;
justify-content: space-between;
width: 100%;
align-items: center;


@media ${device.tablet}{

}

`

export const MealListTitle = styled.h1`
    font-size: 1.4rem;
    text-align: center;

    @media ${device.tablet}{
        font-size: 1.8rem;
}
`

