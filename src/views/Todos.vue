<template>
    <div>
        <TodosList
            v-bind:todos="listTodos"
            @del-todo="deleteTodo"></TodosList>
    </div>
</template>

<script>
import TodosList from './../components/TodosList'
export default {
    name: 'Todos',
    components: {
        TodosList
    },
    methods: {
        deleteTodo: function(id) {
            this.listTodos = this.listTodos.filter(function(todo) {
                return todo.id !== id
            });
            // ou bien
            // this.listTodos = this.listTodos.filter(todo => todo.id !== id);
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