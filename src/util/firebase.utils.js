import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {doc,getDoc, setDoc, getFirestore} from 'firebase/firestore'
import { useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAtbLfX0zgJbHmkn7lZ9k6FD1h820k8CO8",
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


export const auth = getAuth()

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
    console.log('logout successful')
  }).catch((error) => {
    console.log('logout successful', error)
  });


export const db = getFirestore()

export const addDocumentToCollection = async(userId, mealplan) => {

  await setDoc(doc(db, "userData", userId), {
    mealplan,
     
  });
}

export let docData;
export let userInfo;

export const getDocumentData = async(userId) => {

  const docRef = doc(db, "userData",userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {

docData = docSnap.data()
  } else {

   
  }
}

export const getUserInfo = async(userId) => {

  const docRef = doc(db, "users",userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {

userInfo = docSnap.data()
  } else {

   
  }
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
    console.log(userSnapshot.data())
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
console.log('error creating the user', error.message)
    }
  }


 


    //if user data exists

return userDocRef


    // setDoc(userDocRef,{
  //   userMealData
  // },{merge: true})
}
