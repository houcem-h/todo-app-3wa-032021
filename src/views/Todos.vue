<template>
    <div>
        <AddTodo @add-new-todo="insertNewTodo"></AddTodo>
        <TodosList
            v-bind:todos="listTodos"
            @del-todo="deleteTodo"></TodosList>
    </div>
</template>

<script>
import TodosList from './../components/TodosList'
import AddTodo from "./../components/AddTodo";
export default {
    name: 'Todos',
    components: {
        TodosList,
        AddTodo
    },
    methods: {
        deleteTodo: function(id) {
            this.listTodos = this.listTodos.filter(function(todo) {
                return todo.id !== id
            });
            // ou bien
            // this.listTodos = this.listTodos.filter(todo => todo.id !== id);
        },
        insertNewTodo: function(newTodo) {
            const long = this.listTodos.length
            newTodo.id = this.listTodos[long-1].id +1;
            this.listTodos.push(newTodo);
        }
    },
    data() {
        return {
            listTodos: [
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
            ]
        }
    }
}
</script>

<style>

</style>