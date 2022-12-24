import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA853bjE6nARBwNWvjyz2L6LbJLNO4aMic",
    authDomain: "zeus-exchange-bc97c.firebaseapp.com",
    projectId: "zeus-exchange-bc97c",
    storageBucket: "zeus-exchange-bc97c.appspot.com",
    messagingSenderId: "781845487771",
    appId: "1:781845487771:web:ae8788b604097901aba63e"
  }; 

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp }