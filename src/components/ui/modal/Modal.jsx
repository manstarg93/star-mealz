import React, { Fragment } from 'react'
import { CloseModalContainer, ModalBackDrop, ModalBody, ModalContainer, ModalHeader, ModalTitle } from './Modal.styles'
import { createPortal } from 'react-dom'
import {ReactComponent as CloseModalIcon} from '../../../assets/close.svg'



const Modal = (props) => {
    const {title, close, show, children} = props
 

  return createPortal(<Fragment><ModalContainer show={show} >
      <ModalHeader>
        
          <ModalTitle>
          {title &&  title}
             
          </ModalTitle>
          <CloseModalContainer onClick={close}>
              <CloseModalIcon />
          </CloseModalContainer>
      </ModalHeader>
      <ModalBody>
         {children}
      </ModalBody>
  </ModalContainer>
  <ModalBackDrop show={show} onClick={close}/>
  </Fragment>,
    
    document.getElementById('modal') )
}

export default Modal