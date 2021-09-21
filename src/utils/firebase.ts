import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import { IFirebaseUser } from "./types/firebaseUser"

const config = {
    apiKey: "AIzaSyCLJzi4J3ns5EK9hYDZoXbTZdf0TQgQsag",
    authDomain: "react-graphql-20763.firebaseapp.com",
    projectId: "react-graphql-20763",
    storageBucket: "react-graphql-20763.appspot.com",
    messagingSenderId: "619329029573",
    appId: "1:619329029573:web:f8bcb53acd69b9a3a477ac",
    measurementId: "G-B7D1RG7D3Q"
}

/* createuser */
export const createUserProfileDocument = async (userAuth: {} | null, additionalData?: {}) => {
    if (!userAuth) return

    console.log('created a User')
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase