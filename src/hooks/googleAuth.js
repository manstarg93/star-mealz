import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { createUserDocumentFromAuth, signInWithGooglePopOp } from "../util/firebase.utils"


export  const useGoogleAuth = () => {

    const {setAuthHandler,setUserData} = useContext(AuthContext)
    

          const googleAuth = async() => {
            try {
              await signInWithGooglePopOp().then(({user}) => {
                  createUserDocumentFromAuth(user).then(()=> {
             
                      setAuthHandler(user)
                      setUserData(user.uid)
      
                    })
                  })
                .catch(error => {
                })
                } catch (error) {
              
                }   
          }


          return{
googleAuth
          }
}