<template>
  <form @submit.prevent="sendNewTodo">
      <div class="input-group mb-3">
          <input v-model="newTitle" type="text" placeholder="Add new todo ..." class="form-control">
          <div class="input-group-append">
              <button type="submit" class="btn btn-outline-primary">Add</button>
          </div>
      </div>
  </form>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            newTitle: ''
        }
    },
    methods: {
        sendNewTodo() {
            const newTodo = {
                id: null,
                title: this.newTitle,
                completed: false
            }
            this.$emit('add-new-todo', newTodo);
        }
    }
}
</script>

<style>

</style>