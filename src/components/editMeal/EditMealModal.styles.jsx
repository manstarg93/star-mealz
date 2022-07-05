import styled from 'styled-components'
import {variables} from '../../styles/variables'
export const EditModalContainer = styled.div`
    padding: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;

`

export const EditTitle = styled.h4`
    text-align: center;
    text-transform: capitalize;
    width: 100%;
    margin: 0;
    padding: 10px;
    background-color: ${variables.lightBlue};
    color: ${variables.white}
`



