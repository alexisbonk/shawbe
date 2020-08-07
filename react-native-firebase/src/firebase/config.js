import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCP4km3bWlOauIfmYTSxzWoaXIqhKfjVzo',
  authDomain: 'shawbe-918aa.firebaseapp.com',
  databaseURL: 'https://shawbe-918aa.firebaseio.com',
  projectId: 'shawbe-918aa',
  storageBucket: 'shawbe-918aa.appspot.com',
  messagingSenderId: '955671818419',
  appId: '1:955671818419:android:847c80758c2b6a2d2cc0c6',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };