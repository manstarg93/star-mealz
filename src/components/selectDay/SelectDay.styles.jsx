import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'
import { Select } from '../form/Input'




export const SelectDayContainer = styled.div`
  width: 100%;
  
  @media ${device.desktop}{
    width: 20%;
  }
`
export const SelectDaySelect = styled(Select)`
   color: ${variables.darkGrey};
   font-weight:bold;
`