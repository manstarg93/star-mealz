import styled from 'styled-components'
import { device } from '../../../styles/mediaquery'
import { boxShadow, variables } from '../../../styles/variables'


export const InitialAddMealContainer = styled.div`
    width: 100%;
    padding: 0 20px;
    
@media ${device.laptop}{
    padding: 10px 50px;
}
`

export const InitialAddMealTitle = styled.h2`
    text-align: center;
    
`

export const InitialAddMealDateContainer = styled.div`
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
   
    margin: 20px auto;
    padding: 0 ;
    @media ${device.laptop}{
   width: 40%;
   padding: 20px 0;
   margin: 10px auto;
}
`
export const DateSelectorTitle = styled.p`
    width: 100%;
    font-size: 2rem;

`
export const PreviousIconContainer = styled.div`

svg{
    width: 30px;
    height: 30px;
    cursor: pointer;
}
`

export const NextIconContainer = styled.div`

svg{
    width: 30px;
    height: 30px;
    cursor: pointer;
}
`


export const OccasionSelectorContainer = styled.div`
    display: flex;
    width: 100%;
 
    flex-direction: column;
 
    justify-content: center;
    gap: 20px;
    align-items: center;
    @media ${device.laptop}{
    flex-direction: row;
    justify-content: space-between;
    
}
`

export const OccasionSelectorItem = styled.div`
    width: 100%;
    gap: 10px;
    box-shadow: ${boxShadow};
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
 
    background-color: ${variables.lightGray};
    &:hover{
        opacity: .8;
    }
    @media ${device.laptop}{
 
}
    
`

export const OccasionSelectorMealIconContainer = styled.div`

svg{
    width: 25px;
    height: 25px;
}
`

export const OccasionSelectorAddIconContainer = styled.div`
svg{
    width: 25px;
    height: 25px;
    fill: ${variables.blue};
}
`

export const OccasionSelectorTitle = styled.p`
    width: 100%;
    font-size: 1.6rem;
`