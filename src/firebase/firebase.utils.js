import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/firebase-analytics'
// import 'firebase/storage';
// import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAsV9I71Lt_AdEps4etdy-9ntZnmUFT8T4",
  authDomain: "goshen-clothing.firebaseapp.com",
  databaseURL: "https://goshen-clothing.firebaseio.com",
  projectId: "goshen-clothing",
  storageBucket: "goshen-clothing.appspot.com",
  messagingSenderId: "806208640158",
  appId: "1:806208640158:web:099fa7539f750175eb178f",
  measurementId: "G-L8W5XKG0QZ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

//make an instance of the google auth.
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
