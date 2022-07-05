import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import {boxShadow, variables} from '../../styles/variables'
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
    margin: 10px auto;
    padding: 10px;
    background-color: ${variables.white};
    color: ${variables.darkGrey};
    font-size: 1.2rem;
    box-shadow: ${boxShadow};

    @media ${device.tablet}{
        font-size: 1.4rem;
    }
`



