
import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import Button from '../button/Button'

export const LoginRegisterModalContainer = styled.div`
    display: ${ props => props.showDefault ? 'block' : 'none'};

`

export const SignUpLoginContainer = styled.div`
    
    display: ${ props => props.showDefault ? 'none' : 'block'};
`

export const SignUpTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    padding: 10px;
`

export const LoginContainer = styled.div`
  
`
export const SignUpContainer = styled.div`
   
`
export const GoogleSignUp = styled.div`
    text-align: center;
    border-bottom: solid .5px ${variables.gray};
    border-radius: 10px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    margin: 40px auto;
   padding: 5px;
   gap: 20px;
    cursor: pointer;
    svg{
        
        height: 30px;
    }

    @media ${device.laptop}{
        width: 50;
        justify-content: flex-start;
    }
`


export const GoogleButton = styled.span`
    text-align: start;
    font-size: 1.1rem;
    font-weight: bold;
    padding-left: 0;
    width: 80%;
    font-size: 1.4rem;
    
    @media ${device.mobile}{
       

        
    }
`

export const LoginRegisterText = styled.p`
    color: ${variables.gray};
    text-align: center;
    font-size: 1.2rem;
    span{
        color: ${variables.green};
        font-weight: bold;
        cursor: pointer;
    }
`

export const ReturnIconContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 5px;
align-items: center;

margin-top: 20px;

svg{

    width: 15px;
    height: 30px;
    fill: ${variables.purple};
    cursor: pointer;
}
    
`
export const GoBackText = styled.span`
    color: ${variables.darkGrey};
`

export const LoginSignUpHeader = styled.div`
    width: 100%;
    margin: 0 auto;

    background-size: cover;
    background-repeat: no-repeat;
    height: 150px;
    background-image: ${props => `url(${props.loginSignupImage})`};
    
`

export const LoginSignUpTitle = styled.div`
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
    color: ${variables.darkGrey};
`

export const LoginSignUpContainer = styled.div`

    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`



export const SignUpButton = styled(Button)`
    background-color: ${variables.purple};
    color: ${variables.white};
    width: 100%;
`

export const LoginButtton = styled(Button)`
    background-color: ${variables.green};
    color: ${variables.white};
    width: 100%;
`

