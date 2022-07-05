import React, { Fragment, useContext } from 'react'
import { CloseModalContainer, ModalBackDrop, ModalBody, ModalContainer, ModalHeader, ModalTitle } from './Modal.styles'
import { createPortal } from 'react-dom'
import {ReactComponent as CloseModalIcon} from '../../../../assets/close.svg'
import { MealContext } from '../../../../context/MealContext'
import { UiContext } from '../../../../context/UiContext'

const Modal = (props) => {
    const {title, close, show, children} = props
    const {closeModal} = useContext(UiContext)

    const closeHandler = () => {
closeModal()
    }
  return createPortal(<Fragment><ModalContainer show={show} >
      <ModalHeader>
        
          <ModalTitle>
          {title &&  title}
             
          </ModalTitle>
          <CloseModalContainer onClick={closeHandler}>
              <CloseModalIcon />
          </CloseModalContainer>
      </ModalHeader>
      <ModalBody>
         {children}
      </ModalBody>
  </ModalContainer>
  <ModalBackDrop show={show} onClick={closeHandler}/>
  </Fragment>,
    
    document.getElementById('modal') )
}

export default Modal