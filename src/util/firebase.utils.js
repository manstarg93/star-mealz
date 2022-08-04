import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import {doc,getDoc, setDoc, getFirestore} from 'firebase/firestore'
import { useContext } from "react";
import { feedbackMessageUtil } from "./feedbackMessageUtil";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "starmealz.firebaseapp.com",
  projectId: "starmealz",
  storageBucket: "starmealz.appspot.com",
  messagingSenderId: "369381319496",
  appId: "1:369381319496:web:210593744592d9ff45897d",
  measurementId: "G-DEF4479ZCZ"
};






const firebaseApp = initializeApp(firebaseConfig);


  const analytics = getAnalytics(firebaseApp);

const googleprovider = new GoogleAuthProvider();

export let passwordResetErrorMessage;
export let passwordResetSuccessMessage;
export let resetSuccess;
export const auth = getAuth()


export  const sendUserPasswordResetEmail = async (email) => {
  await sendPasswordResetEmail(auth, email)
  .then(() => {
   console.log('email Sent')
   passwordResetSuccessMessage = 'Email reset link sent successfully '
   resetSuccess = true
  })
  .catch((error) => {
 
    passwordResetErrorMessage = error.message
    resetSuccess = false
  });
}

export const createAuthUserWithEmailAndPassword = async(email,password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthWithEmailAndPassword = async(email,password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

   export const signInWithGooglePopOp = () => signInWithPopup(auth, googleprovider)

   export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider)

  export const signOutOfGoogle = () =>  signOut(auth).then(() => {

  }).catch((error) => {

  });


export const db = getFirestore()

export const addDocumentToCollection = async(userId, mealplan) => {

  await setDoc(doc(db, "userData", userId), {
    mealplan,
     
  });
}

export let docData;
export let userInfo;
export let recipieDocument;

export const getDocumentData = async(userId) => {

  const docRef = doc(db, "userData",userId);
await getDoc(docRef).then((docSnap) => {
  docData = docSnap.data()
  }).catch((error)=> {
  })

}

export const addMealRecipiesToDocument = async(userId,recipies) => {
  await setDoc(doc(db, "recipies", userId), {
    recipies,
     
  });
}


export const getRecipiesFromDocument = async(userId) => {

  const docRef = doc(db, "recipies",userId);
await getDoc(docRef).then((docSnap) => {

  recipieDocument = docSnap.data()
  }).catch((error)=> {

  })

}



export const getUserInfo = async(userId) => {

  const docRef = doc(db, "users",userId);
  await getDoc(docRef).then((docSnap) => {
    userInfo = docSnap.data()
  }).catch(error => {

  })
}

export const createUserDocumentFromAuth = async(userAuth,userName,additionalInfo) => {
  if(!userAuth) return
  const userDocRef =  doc(db, 'users', userAuth.uid);

  if(!userName){
    userName = null
  }
  if(!additionalInfo){
    additionalInfo = null
  }
additionalInfo = {}
  const userSnapshot = await getDoc(userDocRef);
 

  if(userSnapshot.exists()){

  }
  if(!userSnapshot.exists()){
  
    const {displayName, email} = userAuth;
  
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName: displayName || userName,
        email,
        createdAt,
        ...additionalInfo,
        
      },
      {
        merge: true
      })
    }catch(error){

    }
  }


 


    //if user data exists

return userDocRef


    // setDoc(userDocRef,{
  //   userMealData
  // },{merge: true})
}
