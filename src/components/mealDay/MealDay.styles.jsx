import styled from 'styled-components'
import { variables } from '../../styles/variables'
import ItemList from '../ui/itemList/ItemList'
import { ItemLists } from '../ui/itemList/ItemList.styles'


export const MealDayContainer = styled(ItemList)`



        
 
`

export const MealDayList = styled(ItemLists)`
    background-color: ${variables.green} ;
    color: ${variables.white}
`


