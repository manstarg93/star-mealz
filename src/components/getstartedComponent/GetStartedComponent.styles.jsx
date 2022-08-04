import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../ui/button/Button'

export const GetStartedComponentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100vh;
margin: 0 auto;
padding: 30px 0;
position: relative;
@media ${device.tablet}{
    justify-content: center;
    align-items: center;
    padding: 10px 0;
}

@media ${device.laptop}{
    /* align-items: flex-start;
    padding: 20px; */
}
`

export const GetStartedComponentBackDrop = styled.div`
width: 100%;
background-image: ${props => `url(${props.backGroundImage})`};

background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: fixed;
background-color: ${variables.black};
top: 0;
bottom: 0;
left: 0;
right: 0;
filter: brightness(30%);

@media ${device.laptop}{
    
}
`


export const GetStartedLogoBrandContainer  = styled.div`
margin: 0 auto;
text-align: center;
/* position: absolute;
top: 30px;
left: 0;
right: 0; */
z-index: 99;
svg{
    fill: ${variables.white};
    width: 50px;
    height: 50px;
}

@media ${device.laptop}{
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
}

`

export const BrandName = styled.h1`
text-align: center;
color: ${variables.white};

font-weight: bold;
`

export const LoginGetStartedContainer = styled.div`
z-index: 9;
color: ${variables.white};
display: flex;
justify-content: space-around;
flex-direction: column;

gap: 20px;
width: 90%;


@media ${device.tablet}{
justify-content: center;
gap: 10px;
}
@media ${device.laptop}{
    
    width: 50%;
    margin: 0 auto;
}
`
export const GetStartedTextContainer = styled.div`
    
`


export const GetStartedText = styled.h1`
font-weight: 300;
    text-align: center;
    padding: 5px 0;

    @media ${device.laptop}{
    
}

`

export const GetStartedButton = styled(Button)`
width: 100%;
background-color: ${variables.blue};
color: ${variables.white};
text-transform: uppercase;
@media ${device.laptop}{
    width: 80%;
}
`

export const LogInPropmtText = styled.p`
text-align: center;
color: ${variables.white};
span{
    color: ${variables.blue};
    font-weight: bold;
    cursor: pointer;
    
    background-color: ${variables.white};
    padding: 5px;
    border-radius: 5px;
}

@media ${device.laptop}{
   
}
`