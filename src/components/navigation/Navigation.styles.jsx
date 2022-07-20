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
    color: ${variables.darkGrey};
    background-color: ${variables.white };
    min-height: 70px;
    padding: 10px 0;
    border-bottom: solid 1px ${variables.gray};
    margin-bottom: 50px;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
  
    @media ${device.tablet}{
        
        width: auto;
        border-bottom: none;
    }
`

export const DisplayName = styled.h4`
    font-size: 1.4rem;
    color: ${variables.darkGrey};

text-align: center;

span{
font-style: italic;

font-weight: bold;
padding: 0 10px;

}
@media ${device.mobile}{
            
        }

`

export const NonAuthContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    min-height: 70px;
    padding: 10px 0;
    border-bottom: solid 1px ${variables.gray};
    margin-bottom: 50px;

`
// export const Logo = styled(CrownLogo)`
//     font-size: 20px;
//     color: ${variables.white};
// `