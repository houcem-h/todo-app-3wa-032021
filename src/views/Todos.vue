<template>
    <div>
        <h1>Todos component</h1>
        <TodosList v-bind:todos="listTodos"></TodosList>
    </div>
</template>

<script>
import TodosList from './../components/TodosList'
export default {
    name: 'Todos',
    components: {
        TodosList
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