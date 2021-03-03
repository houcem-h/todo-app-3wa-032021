<template>
    <div>
        <div class="list-group">
            <div v-for="todo in todos" v-bind:key="todo.id" class="list-group-item">
                <span v-bind:class="{'is-completed': todo.completed}">{{ todo.title }}</span>
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
.is-completed {
    text-decoration: line-through;
}
</style>