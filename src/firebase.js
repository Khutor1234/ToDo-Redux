import firebase from 'firebase';

firebase.initializeApp({
    apiKey: 'AIzaSyBD9maSefa-pkNUpK7r6Ag2Ywpge7UrAjg',
    projectId: 'react-todo-66dc2',
    appId: '1:853702437056:web:356a2257476d5e5a7ea525',
    authDomain: 'react-todo-16181.firebaseapp.com',
    databaseURL: 'https://react-todo-66dc2.firebaseio.com',
    storageBucket: 'react-todo-66dc2.appspot.com',
    messagingSenderId: '853702437056'
});

const db = firebase.firestore();
export { db};