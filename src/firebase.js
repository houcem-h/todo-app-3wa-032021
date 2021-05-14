import firebase from 'firebase';
import onUnmounted from 'vue';

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

const db = firebaseApp.firestore();
const todos = db.collection('todos');

export const createUser = user => {
    return todos.add(user)
  }

export const deleteUser = id => {
    return todos.doc(id).delete()
  }

  export const getListTodos = () => {
      let list = [];
      todos.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const todo = doc.data();
            todo.id = doc.id;
            list.push(todo);
        });
    });
      return list;
  }

export const useLoadTodos = () => {
    // const todos = ref([])
    const close = todos.doc().onSnapshot(snapshot => {
    //   todos.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    console.log("Current data: ", snapshot.data());
    })
    onUnmounted(close)
    return todos
  }