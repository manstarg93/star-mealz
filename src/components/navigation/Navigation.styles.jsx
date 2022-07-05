import styled from 'styled-components'
import { variables } from '../../styles/variables'
// import {ReactComponent as CrownLogo} from '../../assets/crown'
// import { variables } from '../../styles/variables'

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: sticky;
    bottom: 0;
    background-color: ${variables.white };
    border-bottom: solid .5px ${variables.lightGray};
    height: 70px;
    
`

// export const Logo = styled(CrownLogo)`
//     font-size: 20px;
//     color: ${variables.white};
// `