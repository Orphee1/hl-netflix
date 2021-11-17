import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'netflix-d46a2.firebaseapp.com',
  projectId: 'netflix-d46a2',
  storageBucket: 'netflix-d46a2.appspot.com',
  messagingSenderId: '217727119390',
  appId: '1:217727119390:web:689284f8c75e744617fe0f',
  measurementId: 'G-LWNR8PE3DB',
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }
