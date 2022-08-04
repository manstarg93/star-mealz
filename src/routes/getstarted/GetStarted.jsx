import React, { Fragment } from 'react'

import EmailLogin from '../../components/auth/EmailLogin'
import EmailSignUp from '../../components/auth/EmailSignUp'
import LoginPrompt from '../../components/auth/LoginPrompt'
import PasswordResetModal from '../../components/auth/PasswordResetModal'
import SignUpPrompt from '../../components/auth/SignUpPrompt'
import GetStartedComponent from '../../components/getstartedComponent/GetStartedComponent'


import { GetStartedContainer } from './GetStarted.styles'

const GetStarted = () => {
  return (
      <Fragment>
   <GetStartedContainer>
       <GetStartedComponent/>
       
   </GetStartedContainer>
   <EmailLogin/>
   <EmailSignUp/>
  <LoginPrompt/>
  <SignUpPrompt/>
  <PasswordResetModal/>

      </Fragment>

  )
}

export default GetStarted