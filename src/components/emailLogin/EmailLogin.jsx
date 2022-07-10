import React from 'react'
import Input from '../form/Input'
import { EmailLoginContainer, EmailLoginInput, SubmitLogin } from './EmailLogin.styles'

const EmailLogin = (props) => {
    const {login, signup} = props

    const onChangeHandler = () => {

        if(login){

        }

        if(signup){

        }
    }
    const submitHandler = () => {

        if(login){
console.log('Login')
        }

        else if(signup){
console.log('SignUp')
        }
    }
  return (
    <EmailLoginContainer>
        <EmailLoginInput label='Use email instead' placeholder='Enter email' onChange={onChangeHandler}/>
        <SubmitLogin onClick={submitHandler}>{signup ? 'Sign Up' : 'Log In'}</SubmitLogin>
    </EmailLoginContainer>
  )
}

export default EmailLogin