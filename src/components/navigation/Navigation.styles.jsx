import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
import { ModalContainer } from '../ui/modal/Modal.styles'
// import {ReactComponent as CrownLogo} from '../../assets/crown'
// import { variables } from '../../styles/variables'




export const NavigationContainer = styled(ModalContainer)`

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
    width: 100%;
    color: ${variables.darkGrey};
    background-color: ${variables.white };
    padding: 0;
    z-index: 98;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    margin: 0 auto;
z-index: 100;
height: 100vh;
    display: ${props => props.closeNav ? 'none' : 'flex'};
  

    @media ${device.laptop}{
        flex-direction: row;
    justify-content: space-around;
    align-items: center;  
     min-height: 70px;
     top: 0;
     height: auto;
     overflow: visible;
     padding: 10px 50px;
     max-height: max-content;
     position: sticky;
     display: flex;
     background-color: ${variables.white};
        color: ${variables.black}
    }

`
export const MobileNavDefault = styled.div`
position: sticky;

top: 0;
width: 100%;
display: ${props => props.closeNav ? 'flex' : 'none'};
justify-content: space-between ;
align-items: center;
max-height: max-content;
border-bottom: solid 1px ${variables.gray};
padding: 20px;
height: 80px;
z-index: 99;

color: ${variables.white};

background-color: ${variables.blue};
@media ${device.laptop}{
  display: none;
}
`
export const OpenNavIconContainer = styled.div`


svg{
    fill: ${variables.white};
        width: 40px;
        height: 40px;
       cursor: pointer;
}

@media ${device.laptop}{
  svg{
    fill: ${variables.black};
      
}
}

`

export const BannerTextDesktop = styled.div`
  
  display: none;

  @media ${device.laptop}{
    display: block;
  }
`

export const BannerText = styled.li`
  font-size: 2.5rem;

`

export const NavLogoContainer = styled.div`

   display: none;

  
    @media ${device.laptop}{
        text-align: center;
    padding: 5px 0;
    border-bottom: solid .2px ${variables.lightGray};
    width: 100%;
    display: flex;
flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
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

border-bottom: solid 1px ${variables.gray};
padding: 20px;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
color: ${variables.white};

background-color: ${variables.blue};
svg{
    fill: ${variables.white};
        width: 30px;
        height: 30px;
       cursor: pointer;
}

@media ${device.laptop}{
  display: none;
  svg{
    fill: ${variables.darkGrey};
    
}
}
`


export const WelcomeContainerHome = styled.div`

padding: 20px;

border-radius: 20px;
text-align: start;
display: block;
text-align: start;
width: max-content;
color: ${variables.white};
padding: 0 10px;
span{
font-style: italic;

font-weight: bold;
padding: 0 10px;

}

@media ${device.laptop}{
       display: none;
    }
`