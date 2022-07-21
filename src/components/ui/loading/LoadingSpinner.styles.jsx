
import styled from 'styled-components'
import { variables } from '../../../styles/variables';

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
margin: 20px auto;
  width: 50px;
  height: 50px;
  width: 100%;
  
  & .path {
    stroke: ${variables.blue};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;