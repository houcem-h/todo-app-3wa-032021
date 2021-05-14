<template>
    <div>
        <div class="list-group">
            <div v-for="todo in todos" v-bind:key="todo.id" class="list-group-item">
                <input type="checkbox" class="mr-2"
                    :checked="todo.completed" 
                    @change="toggleCompleted(todo)">
                    <!--
                        shorthand syntax
                        v-bind:checked <==> :checked
                        v-on:click <==> @click
                    -->
                <span v-bind:class="{'is-completed': todo.completed}">
                    {{ todo.title }}
                </span>
                <button
                    @click="$emit('del-todo', todo)"
                    class="badge badge-danger badge-pill float-right"
                    >X</button>

            </div>
        </div>
    </div>
</template>

<script>
import todosCollection from "./../firebase";
export default {
    name: 'TodosList',
    props: {
        todos: Array
    },
    methods: {
        toggleCompleted: function(todo) {
            todosCollection.doc(todo.id).update({
                completed: !todo.completed
            })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }
    }
}
</script>

<style>
.is-completed {
    text-decoration: line-through;
}
</style>