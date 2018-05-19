<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Admin Panel"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
