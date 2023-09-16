import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCcSn9jfk-8rEiBwGpUUhEgog3o_btCeHU',
  authDomain: 'planetabenja-28e42.firebaseapp.com',
  projectId: 'planetabenja-28e42',
  storageBucket: 'planetabenja-28e42.appspot.com',
  messagingSenderId: '555814093759',
  appId: '1:555814093759:web:f75133d4c536776977570a'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
