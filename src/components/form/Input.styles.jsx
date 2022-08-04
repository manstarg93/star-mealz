import styled from 'styled-components'
import { variables } from '../../styles/variables'


export const InputFormGroup = styled.div`
     position: relative;
     width: 100%;
     z-index: 99;
`


export const InputContainer = styled.input`
border: solid ${variables.gray} 1px;
    padding: 15px;
    transition: all ease-in-out .3s;

   width: 100%;
    &::placeholder{
        color: ${variables.gray};
    }

    &:focus-visible{
        outline: none;
        border: solid ${variables.blue} .3px;
    }
`
export const InputLabel = styled.label`
    font-size: 1.2rem;
    position: absolute;
    font-weight: bold;
    top: -6px;
    left: 10px;
    background-color: white;
    z-index:10;
    text-transform: capitalize;
`



export const SelectContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
position: relative;
border: solid ${variables.gray} 1px;

background-color: ${variables.white};

`

export const SelectInput = styled.select`
border: none;
    padding: 15px;
background-color: ${variables.white};
z-index: 9;
appearance: none;
width: 100%;
z-index: 9;
font-size: 1.6rem;

    &:focus-visible{
        outline: none;
    }

    option{
        width: 100%;
       
    }
`


export const ArrowDownContainer = styled.span`

    color: ${variables.darkGrey};
    padding: 0 10px;
   right: 0;
    z-index: 8;
  

    svg{
        color: inherit;
        height: 30px;

        width: 30px;

        color: inherit;
    }
`