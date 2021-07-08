<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' // Se puede agregar el "@" para evitar el "../" para encontrar los componentes

export default {
  components: {
    HelloWorld
  }
};
</script>
