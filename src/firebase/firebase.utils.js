import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDel1VVZcImfoRBls-3wVufDqX5iSJCz7c",
  authDomain: "crwn-db-156d7.firebaseapp.com",
  databaseURL: "https://crwn-db-156d7.firebaseio.com",
  projectId: "crwn-db-156d7",
  storageBucket: "crwn-db-156d7.appspot.com",
  messagingSenderId: "186133711116",
  appId: "1:186133711116:web:34a69bb40006ea36902129",
  measurementId: "G-9NJHQQ3FHP"
};

export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}` )
  const  snapShot = await userRef.get() 
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating users', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
