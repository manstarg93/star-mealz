import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {doc,getDoc, setDoc, getFirestore} from 'firebase/firestore'

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

const provider = new GoogleAuthProvider();


export const auth = getAuth()


   export const signInWithGooglePopOp = () => signInWithPopup(auth, provider)

  export const signOutOfGoogle = () =>  signOut(auth).then(() => {
    console.log('logout successful')
  }).catch((error) => {
    console.log('logout successful', error)
  });

  let userMealData;
  export const getDocData = (docData) => {
    userMealData = docData
  }

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef =  doc(db, 'users', userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
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
