import styled from 'styled-components'
import { boxShadow, variables } from '../../styles/variables'
import { Select } from '../form/Input'




export const SelectDayContainer = styled.div`
   width: 20%;
  
`
export const SelectDaySelect = styled(Select)`
   color: ${variables.lightBlue};
   font-weight:bold;
`