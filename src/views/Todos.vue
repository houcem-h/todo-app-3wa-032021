<template>
    <div>
        <AddTodo @add-new-todo="insertNewTodo"></AddTodo>
        <div v-if="loading">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        <div v-else>
            <TodosList
                v-bind:todos="listTodos"
                @del-todo="deleteTodo"></TodosList>
        </div>
    </div>
</template>

<script>

import TodosList from './../components/TodosList'
import AddTodo from "./../components/AddTodo";
import todosCollection from "./../firebase";

export default {
    name: 'Todos',
    components: {
        TodosList,
        AddTodo
    },
    methods: {
        deleteTodo: function(id) {
            todosCollection.doc(id).delete().then(() => {
                console.log("Document successfully deleted!");
                this.$swal('Task deleted successfuly');
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        },
        insertNewTodo: function(newTodo) {
            todosCollection.add(newTodo)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                this.$swal(newTodo.title + ' added successfuly');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    },
    data() {
        return {
            oldListTodos: [
                {
                    id: 1,
                    title: 'Todo One',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Todo Two',
                    completed: true
                },
                {
                    id: 3,
                    title: 'Todo Three',
                    completed: true
                },
                {
                    id: 4,
                    title: 'Todo Four',
                    completed: false
                },
                {
                    id: 5,
                    title: 'Todo Five',
                    completed: true
                }
            ],
            listTodos: Array,
            loading: true
        }
    },
    mounted() {
            todosCollection.onSnapshot((querySnapshot) => {
                this.listTodos =  [],
                querySnapshot.forEach((doc) => {
                    const todo = doc.data();
                    todo.id = doc.id;
                    this.listTodos.push(todo);
                });
            //  todosCollection.get().then((querySnapshot) => {
            //     querySnapshot.forEach((doc) => {
            //         const todo = doc.data();
            //         todo.id = doc.id;
            //         this.listTodos.push(todo);
            //     });
                this.loading = false
            })
    }
}
</script>

<style>

</style>