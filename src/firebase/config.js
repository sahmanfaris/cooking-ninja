import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD_ZjLoNjZGm_dDQ4yJVi_j4DSNXrQgV-Y',
  authDomain: 'cooking-ninja-site-af15f.firebaseapp.com',
  projectId: 'cooking-ninja-site-af15f',
  storageBucket: 'cooking-ninja-site-af15f.appspot.com',
  messagingSenderId: '505155541215',
  appId: '1:505155541215:web:ba0f7be31586d0c466b16a',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
