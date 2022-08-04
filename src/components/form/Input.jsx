import React from 'react'
import { ArrowDownContainer, InputContainer, InputFormGroup, InputLabel, SelectContainer,SelectInput } from './Input.styles'
import {ReactComponent as ArrowDown} from '../../assets/arrowDown.svg'
export const Input = (props) => {
  return (
    <InputFormGroup>
      <InputLabel htmlFor={props.name ? props.name : ''}>{props.label}</InputLabel>
 <InputContainer value={props.value && props.value} defaultValue={props.defaultValue && props.defaultValue}  {...props}/>
    </InputFormGroup>
   
  )
}

export const Select = props => {
  return(
    <InputFormGroup >
     <InputLabel htmlFor={props.name ? props.name.toString() : ''}>{props.label}</InputLabel>
    <SelectContainer onChange={props.onChange && props.onChange}>
 <SelectInput value={props.value && props.value} defaultValue={props.defaultValue && props.defaultValue}  {...props}>
      {props.children}
      
     
    </SelectInput>
    <ArrowDownContainer onClick={props.clicked} >
      <ArrowDown/>
      </ArrowDownContainer>
    </SelectContainer>
    </InputFormGroup>
   
  )
}

export default Input