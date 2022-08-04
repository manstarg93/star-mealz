import React, { useContext, useState } from 'react'
import { ClosePasswordResetContainer, ConfirmResetButton, FeedBackMessageContainer, FeedBackMessageError, FeedBackMessageSuccess, PasswordResetForm, PasswordResetHeader, PasswordResetModalContainer, PasswordResetTitle } from './PasswordResetModal.styled'
import Modal from '../ui/modal/Modal'
import Input from '../form/Input'
import { useInput } from '../../hooks/inputHook'
import {ReactComponent as CloseIcon} from '../../assets/close.svg'
import { AddMealModalHeaderContainer, AddMealModalTitle, CloseAddMealModalIconContainer } from '../addMealComponents/AddMealModal/AddMealModal.styles'
import { UiContext } from '../../context/UiContext'
import { actionTypes } from '../../context/UiContextReducer'
import { getPasswordToUpdate, passwordResetErrorMessage, passwordResetSuccessMessage, resetSuccess, sendUserPasswordResetEmail } from '../../util/firebase.utils'
import { feedbackMessageUtil } from '../../util/feedbackMessageUtil'
import { FeedBackMessageErrorContainer } from '../finishAddingMeal/MealAdding.Styles'
const PasswordResetModal = () => {

    const {input, InputHandler} = useInput()
    const {UiToggleHelper, showPasswordReset,showLoginWithEmail} = useContext(UiContext)

const [resetEmailAuth, setResetEmailAuth] = useState({
    success: false,
    message: ''
})

    const resetPasswordHandler = async (event) => {
        event.preventDefault()
        await sendUserPasswordResetEmail(input).then(() => {
            if(resetSuccess){
                setResetEmailAuth({
                    success: true,
                    message: passwordResetSuccessMessage
                })
            }
            if(!resetSuccess && passwordResetErrorMessage){
                switch (passwordResetErrorMessage) {
                    case 'Firebase: Error (auth/too-many-requests).':
                        setResetEmailAuth({
                            success: false,
                            message: 'Too many request'
                        })
                        break;
                        case 'Firebase: Error (auth/user-not-found).':
                            setResetEmailAuth({
                                success: false,
                                message: 'Email not found'
                            })
                            break;
                    default:
                        setResetEmailAuth({
                            success: false,
                            message: 'An error occured'
                        })
                        break;
                }
                
             
            }
            setTimeout(() => {
                setResetEmailAuth({
                    success: false,
                    message: ''
                })
              },1000)
        })

       
    }

    

    const closePasswordResetForm =  () => {
UiToggleHelper(actionTypes.SHOW_PASSWORD_RESET, showPasswordReset)

    }
  return (
    <PasswordResetModalContainer as={Modal} show={showPasswordReset} close={closePasswordResetForm}>
         <PasswordResetHeader>
         <PasswordResetTitle>We will send a password reset link to your email</PasswordResetTitle>
           <ClosePasswordResetContainer>
           <CloseIcon onClick={closePasswordResetForm}/>
           </ClosePasswordResetContainer>
          
       </PasswordResetHeader>
        <PasswordResetForm onSubmit={resetPasswordHandler}>
            <Input type='email' placeholder='email address' value={input} onChange={InputHandler} required />
            <ConfirmResetButton type='submit'>Send password reset link</ConfirmResetButton>
        </PasswordResetForm>

<FeedBackMessageContainer>
{resetEmailAuth.success && resetEmailAuth.message !== '' && <FeedBackMessageSuccess>{resetEmailAuth.message}</FeedBackMessageSuccess>}
        {!resetEmailAuth.success && resetEmailAuth.message !== '' && <FeedBackMessageError>{resetEmailAuth.message}</FeedBackMessageError>}
</FeedBackMessageContainer>
       

       
    </PasswordResetModalContainer>
  )
}

export default PasswordResetModal