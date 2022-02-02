import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD1QV8W2VfTQLaZ8hwDTVw8oj2gUb3PIJg",
    authDomain: "react-private-lessons.firebaseapp.com",
    projectId: "react-private-lessons",
    storageBucket: "react-private-lessons.appspot.com",
    messagingSenderId: "1044337351651",
    appId: "1:1044337351651:web:79931dee827945d0cb1ed6"
};

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseDb = getFirestore()