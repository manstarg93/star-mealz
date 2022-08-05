import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { variables } from '../../styles/variables'
import { device } from '../../styles/mediaquery'
import Button from '../ui/button/Button'




export const NavigationLinkContainer  =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
flex-wrap: wrap;
gap: 20px;
padding: 0 20px;
margin: 20px auto;
text-align: start;

   
width: 100%;
@media ${device.laptop}{
    justify-content: flex-end;

    gap: inherit;
    flex-direction: row;
    align-items: center;

    
}
`


export const NavigationLinks  = styled.li`
    font-size: 1.6rem;
    color: ${variables.darkGrey};
font-weight: bold;
width: 100%;
text-transform: uppercase;

span{
    background-color: ${variables.blue};

    color: ${variables.white}
}


@media ${device.laptop}{
            width: max-content;


            &:not(:last-child){
       padding: 0 20px;
    }
        }

&:hover{
   opacity: 0.8;
        }

        @media ${device.laptop}{
          
        }

     

`



export const LoginRegisterButton = styled(Button)`
    
    background-color: ${variables.blue};
    color: ${variables.white};
    padding: 10px;
    width: 100%;

    @media ${device.laptop}{
        width: max-content;
    }
`

export const LogoutButton = styled(Button)`
    color: ${variables.white};
    background-color: ${variables.yellow};
    padding: 10px;
    width: 90%;
    margin: 0 auto;

    @media ${device.laptop}{
        width: max-content;
        display: none;
        width: 100%;
    }
`
export const LogoutContainer = styled.div`
  position: absolute;
width: 100%;
min-height: max-content;
z-index: 99;
left: 0;
right: 0;
display: none;
background-color: ${variables.white};
border: ${variables.gray} solid 1px;
border-top: none;
padding: 10px;
 color: ${variables.white};

`
export const LogoutButtonHome = styled(Button)`

  background-color: ${variables.yellow};
  width: 100%;
`


export const WelcomeContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
border: ${variables.gray} solid 1px;
background-color: ${variables.blue};
z-index: 99;
display: none;

position: relative;

span{
font-style: italic;

font-weight: bold;
padding: 0 10px;

}

@media ${device.laptop}{
       display: block;
       overflow: none;
    
     text-align: center;
     color: ${variables.white};
      
          &:hover > ${LogoutContainer}{
           display: block;
       }
    }
`


export const WelcomeUserText = styled.li`
  padding: 10px;
color: ${variables.darkGrey};
border-radius: 20px;
text-align: start;
display: block;
text-align: start;
width: max-content;
color: ${variables.white};
span{
font-style: italic;

font-weight: bold;
padding: 0 10px;

}



` 




export const FindMealContainer = styled.div`
      border-radius: 10px;
     
      text-align: start;
    background-color: ${variables.white};
    color: ${variables.darkGrey};
    padding: 0 10px ;
    text-align: start;
    cursor: pointer;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

  

        svg{
            width: 25px;
height: 25px;

        }
  

`

export const FindMealButton = styled(Button)`
 
  width: 100%;
  color: ${variables.darkGrey};
background-color: ${variables.white};
box-shadow: none;
border: none;
text-align: start;
font-size: 1.6rem;
margin: 0 ;
padding: 0;
font-weight: bold;

&:hover{
    box-shadow: none;
}
`

