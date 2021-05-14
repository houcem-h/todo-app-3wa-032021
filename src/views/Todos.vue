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
import axios from 'axios';

import TodosList from './../components/TodosList'
import AddTodo from "./../components/AddTodo";
import { getListTodos } from "./../firebase";
export default {
    name: 'Todos',
    components: {
        TodosList,
        AddTodo
    },
    methods: {
        deleteTodo: function(id) {
            // this.listTodos = this.listTodos.filter(todo => todo.id !== id);
            // ou bien
            // this.listTodos = this.listTodos.filter(function(todo) {
            //     return todo.id !== id
            // });
            // on remplace le filter direct dans le tableau par un DELETE request avec axios
            axios.delete('https://jsonplaceholder.typicode.com/todos/'+id)
                .then(() => this.listTodos = this.listTodos.filter(todo => todo.id !== id))
                .catch(err => console.log(err))
        },
        insertNewTodo: function(newTodo) {

            const long = this.listTodos.length
            newTodo.id = long === 0 ? 1 : this.listTodos[long-1].id +1;
            
            // this.listTodos.push(newTodo);
            // on remplace le push direct dans le tableau par un POST request avec axios
            axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
                .then( () => this.listTodos.push(newTodo) )
                .catch(err => console.log(err))
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
            listTodos: [],
            loading: true
        }
    },
    mounted() {
        this.listTodos = getListTodos();
        this.loading = false
        // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        //     .then(res => {
        //         // console.log(res.data)
        //         this.listTodos = res.data
        //         this.loading = false
        //     })
        //     .catch(function (err) { 
        //         console.log(err)
        //      })
            //  ou bien
            //  .catch(err => console.log(err))
    }
}
</script>

<style>

</style>