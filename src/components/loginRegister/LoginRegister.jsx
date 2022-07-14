import React, { useContext, useState } from 'react'

import { EmailLoginContainer, EmailLoginInput, ErrorMessage, GoogleButton, SignUpLoginButtonContainer, SubmitLogin } from './LoginRegister.styles'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, docData, getDocumentData, signInAuthWithEmailAndPassword, signInWithGooglePopOp } from '../../util/firebase.utils'
import { AuthContext } from '../../context/AuthContext'
import { UiContext } from '../../context/UiContext'
import { useInput } from '../../hooks/inputHook'
import { MealContext } from '../../context/MealContext'

const EmailLogin = (props) => {
    const {login, signup} = props
    const {setAuthHandler,userId,setUserData} = useContext(AuthContext)
    const {showloginSignUpHandler} = useContext(UiContext)
    const  {updateDatabase} = useContext(MealContext)

    const {loginRegisterInput: email, LoginRegisterOnChangeHandler: emailChangeHandler} = useInput()
    const {loginRegisterInput: password, LoginRegisterOnChangeHandler: passwordChangeHandler} = useInput()
    const {loginRegisterInput: confirmedPassword, LoginRegisterOnChangeHandler: confirmPasswordChangeHandler} = useInput()
    const {loginRegisterInput: displayName, LoginRegisterOnChangeHandler: displayNameHandler} = useInput()

const [errorMessage, setErrorMessage] = useState('')

    const submitHandler = async(event) => {
      event.preventDefault()
    

        if(login){
try {
  await signInAuthWithEmailAndPassword(email,password).then(({user}) => {
   
    setAuthHandler(user)
    setUserData(user.uid)
    updateDatabase()
  })
  .catch((error)=>{
  
  })
  
  
  
 
  showloginSignUpHandler()
 
} catch (error) {
  switch (error.code) {
    case 'auth/user-not-found':
      setErrorMessage('No user associated with this email')
      break;
  case 'auth/wrong-password':
    setErrorMessage('Wrong Password')
    break
    default:
      setErrorMessage('There is an error',error)
      break;
  }
  
}
        }

        if(signup){
          if(password !== confirmedPassword){
            setErrorMessage('password doesnt match')
            return
          }

try {
  const {user} = await createAuthUserWithEmailAndPassword(email, password)

  
 await createUserDocumentFromAuth(user,displayName).then(() => {

  setAuthHandler(user)
  setUserData(user.uid)
  updateDatabase()
  
 })

.catch(error => {

})
showloginSignUpHandler()





} catch (error) {
  if(error.code === 'auth/email-already-in-use'){
    setErrorMessage('Cannot create user, email alreay in use')
  }
 
}

        }
    }
    const googleSignInHandler = async() => {
      try {
        const {user} = await signInWithGooglePopOp()
 
      await createUserDocumentFromAuth(user).then(()=> {
  
        setAuthHandler(user)
        setUserData(user.uid)
        updateDatabase()
        
        
      })

      .catch(error => {

      })
      showloginSignUpHandler()
    
  
      } catch (error) {
    
      }
      

  }



  return (
    <form onSubmit={submitHandler}>
    <EmailLoginContainer>
    {signup && <EmailLoginInput type='text'  required label='Display Name' placeholder='Enter name' name='displayName' value={displayName} onChange={displayNameHandler}/> }
      <EmailLoginInput type='email' required label='Email' placeholder='Enter email' value={email} name='email' onChange={emailChangeHandler}/>
        <EmailLoginInput type='password'  required label='Password' placeholder='Enter password' name='password' value={password} 
        onChange={passwordChangeHandler}/>
      {signup && <EmailLoginInput type='password'  required label='Confirm Password' placeholder='Enter password' name='confirmedPassword' value={confirmedPassword} onChange={confirmPasswordChangeHandler}/> }
        
        <SignUpLoginButtonContainer>
        <SubmitLogin type='submit'>{signup ? 'Sign Up' : 'Log In'}</SubmitLogin>
     
           <  GoogleButton onClick={googleSignInHandler}> {signup ? 'Google Sign up' : 'Google Sign in'}   </GoogleButton>
        </SignUpLoginButtonContainer>

      <ErrorMessage>{errorMessage}</ErrorMessage>
        
       
    </EmailLoginContainer>
    </form>
  )
}

export default EmailLogin