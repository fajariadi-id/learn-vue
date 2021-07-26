import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD8XGaLCd-7iGa6T8KPyoFMW-Atv9FZLt4',
  authDomain: 'vue-movie-app-7edfc.firebaseapp.com',
  projectId: 'vue-movie-app-7edfc',
  storageBucket: 'vue-movie-app-7edfc.appspot.com',
  messagingSenderId: '764884462110',
  appId: '1:764884462110:web:9a070860d7130526e4dc0f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
