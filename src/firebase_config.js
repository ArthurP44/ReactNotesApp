import firebase from 'firebase';


export const firebaseConfig = {
    apiKey: "AIzaSyAtkXQuub_R18dnWOiedXaqn1FglxvVdKo",
    authDomain: "react-database-57e7e.firebaseapp.com",
    databaseURL: "https://react-database-57e7e.firebaseio.com",
    projectId: "react-database-57e7e",
    storageBucket: "react-database-57e7e.appspot.com",
    messagingSenderId: "834775510787",
}

firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.database();