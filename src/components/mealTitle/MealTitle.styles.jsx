
import styled from 'styled-components'
import { boxShadow, variables } from '../../styles/variables'
import Input from '../form/Input'



export const MealTitleInput = styled(Input)`


border-radius: ${props => props.value !== '' && 'none'}

`