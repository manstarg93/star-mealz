import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'
// import {ReactComponent as CrownLogo} from '../../assets/crown'
// import { variables } from '../../styles/variables'

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    position: sticky;
    bottom: 0;
    background-color: ${variables.purple };
    min-height: 70px;


    @media ${device.tablet}{
        flex-direction: row;
    justify-content: space-around;
    align-items: center;
    }
    
`

export const NavLogoContainer = styled.div`

    text-align: center;
    padding: 5px 0;
    border-bottom: solid .2px ${variables.lightGray};
    width: 100%;

  
    @media ${device.mobile}{
        width: auto;
        border-bottom: none;
    }
`

export const DisplayName = styled.h4`
    font-size: 1.4rem;
    color: ${variables.lightGray};


text-transform: capitalize;
text-align: center;

span{
font-style: italic;
color: ${variables.orange};
font-weight: bold;
padding: 0 10px;
}
@media ${device.mobile}{
            
        }

`
// export const Logo = styled(CrownLogo)`
//     font-size: 20px;
//     color: ${variables.white};
// `