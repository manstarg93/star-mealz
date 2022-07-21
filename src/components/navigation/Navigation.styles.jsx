import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
// import {ReactComponent as CrownLogo} from '../../assets/crown'
// import { variables } from '../../styles/variables'

export const NavigationContainer = styled.div`

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
    width: 100%;
    color: ${variables.darkGrey};
    background-color: ${variables.white };
    padding: 0 10px;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    margin: 0 auto;


    display: ${props => props.closeNav ? 'none' : 'flex'};
  
    @media ${device.laptop}{
        flex-direction: row;
    justify-content: space-around;
    align-items: center;  
     min-height: 70px;
     top: 0;
     padding: 10px 20px;
     position: sticky;
     display: flex;
     border-bottom: solid 1px ${variables.gray};
    }

`
export const MobileNavDefault = styled.div`
position: sticky;
background-color: ${variables.white};
top: 0;
width: 100%;
display: ${props => props.closeNav ? 'flex' : 'none'};
justify-content: space-between ;
align-items: center;
max-height: max-content;
border-bottom: solid 1px ${variables.gray};
padding: 20px;
min-height: 50px;
z-index: 99;
opacity: 0.8;

@media ${device.laptop}{
  display: none;
}
`
export const OpenNavIconContainer = styled.div`

svg{
    fill: ${variables.black};
        width: 40px;
        height: 40px;
       cursor: pointer;
}

`



export const NavLogoContainer = styled.div`

   display: none;

  
    @media ${device.laptop}{
        text-align: center;
    padding: 5px 0;
    border-bottom: solid .2px ${variables.lightGray};
    width: 100%;
    display: flex;
flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
        width: auto;
        border-bottom: none;
    }
`

export const NavLogoContainerMobile = styled.div`


@media ${device.laptop}{
  display: none;
}
`

export const CloseNavMobileContainer = styled.div`
width: 100%;
min-height: max-content;
border-bottom: solid 1px ${variables.gray};
padding: 15px 5px ;
display: flex;
justify-content: space-between;

svg{
    fill: ${variables.darkGrey};
        width: 30px;
        height: 30px;
       cursor: pointer;
}

@media ${device.laptop}{
  display: none;
}
`


export const WelcomeContainerHome = styled.div`

padding: 10px;
border: solid 1px ${variables.blue};
border-radius: 20px;
display: block;

width: max-content;

span{
font-style: italic;
color: ${variables.blue};
font-weight: bold;
padding: 0 10px;

}

@media ${device.laptop}{
       display: none;
    }
`