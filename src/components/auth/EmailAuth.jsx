import React from 'react'
import Modal from '../ui/modal/Modal'
import { EmailAuthContainer, EmailAuthHeaderContainer, EmailAuthTitle } from './EmailAuth.styles'
import GoBackIcon from '../ui/icon/GoBackIcon'
const EmailAuth = (props) => {

    const {children, show, close, title} = props
  return (
    <EmailAuthContainer as={Modal} show={show} close={close} >


<EmailAuthHeaderContainer>
        <GoBackIcon onClick={close}/>
            <EmailAuthTitle>
               {title}
            </EmailAuthTitle>
            </EmailAuthHeaderContainer>
            {children}


    </EmailAuthContainer>
  )
}

export default EmailAuth