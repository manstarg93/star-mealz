import React, { Fragment } from 'react'
import { CloseModalContainer, CloseModalIconContainer, ModalBackDrop, ModalBody, ModalContainer, ModalHeader, ModalIconContainer, ModalIcons, ModalTitle } from './Modal.styles'
import { createPortal } from 'react-dom'
import {ReactComponent as CloseModalIcon} from '../../../assets/close.svg'
import {ReactComponent as LeftArrowIcon} from '../../../assets/leftArrowMain.svg'




const Modal = (props) => {
    const {title, close, show, children,back} = props
 

  return createPortal(<Fragment><ModalContainer show={show} className={props.className}  >
      {title &&   <ModalHeader>
        <ModalIcons>
        <ModalIconContainer>{back && <LeftArrowIcon onClick={back}/> }</ModalIconContainer> 
        <ModalIconContainer>{close && <CloseModalIcon onClick={close}/>}</ModalIconContainer>
           
        </ModalIcons>
          <ModalTitle>
          {title &&  title}
             
          </ModalTitle>
         
      </ModalHeader>}
 
 <ModalBody>
 {children}
 </ModalBody>
        
    
      
  </ModalContainer>
  <ModalBackDrop show={show} onClick={close}/>
  </Fragment>,
    
    document.getElementById('modal') )
}

export default Modal