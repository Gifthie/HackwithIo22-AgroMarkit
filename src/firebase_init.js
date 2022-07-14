import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDbQnJ3rrjRoug7ZrFmbf_Ub-5GqH-VoQA',
    authDomain: 'agro-markit.firebaseapp.com',
    projectId: 'agro-markit',
    storageBucket: 'agro-markit.appspot.com',
    messagingSenderId: '143237342534',
    appId: '1:143237342534:web:d7cf1472c3545ac1dab147',
}

const firebaseApp = initializeApp(firebaseConfig)
// export default firebaseApp
const db = getFirestore(firebaseApp)



export default db
