<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view class="container py-3 justify-content-center"/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
}
</script>

