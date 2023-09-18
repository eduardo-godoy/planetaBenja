import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_1,
  authDomain: process.env.REACT_APP_2,
  projectId: process.env.REACT_APP_3,
  storageBucket: process.env.REACT_APP_4,
  messagingSenderId: process.env.REACT_APP_5,
  appId: process.env.REACT_APP_6
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
