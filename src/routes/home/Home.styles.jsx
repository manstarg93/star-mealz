import styled from 'styled-components'
import { device } from '../../styles/mediaquery'


 export const HomeContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 20px;
width: 100%;
margin: 50px auto;


@media ${device.laptop}{

margin: 50px auto 0 auto;
}
`