<template>
    <div>
        <div class="list-group">
            <div v-for="todo in todos" v-bind:key="todo.id" class="list-group-item">
                <span>{{ todo.title }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodosList',
    props: {
        todos: Array
    }
}
</script>

<style>

</style>