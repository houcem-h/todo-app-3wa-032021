import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBTpEKtW_TiJmNTGzV_DB46Zr8xUkQHJQc",
    authDomain: "todoapp-vue-052021.firebaseapp.com",
    projectId: "todoapp-vue-052021",
    storageBucket: "todoapp-vue-052021.appspot.com",
    messagingSenderId: "456052210021",
    appId: "1:456052210021:web:1d8e1829521fdccf09098c",
    measurementId: "G-JVVE20CPXG"
};

const firebaseApp = firebase.initializeApp(config);

const todosCollection = firebaseApp.firestore().collection('todos');

export default todosCollection;
