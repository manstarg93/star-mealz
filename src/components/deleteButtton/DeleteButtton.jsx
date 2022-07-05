import React, { useContext } from 'react'
import {ReactComponent as DeleteIcon} from '../../assets/deleteicon.svg'

import { MealContext } from '../../context/MealContext'
import { UiContext } from '../../context/UiContext'
import { DeleteButtonContainer } from './DeleteButton'
const DeleteButton = (props) => {


    const {saveSelectedId} = useContext(MealContext)
    const  {showdeletewarninghandler} = useContext(UiContext)
const {id} = props
   

    const deletewarninghandler =  () => {
        saveSelectedId(id)
        showdeletewarninghandler()
        
    }

  return (


    <DeleteButtonContainer>

        <DeleteIcon onClick={deletewarninghandler}/>
    </DeleteButtonContainer>
  )
}





export default DeleteButton