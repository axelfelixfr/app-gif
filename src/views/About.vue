<template>
  <div class="about">
    <HelloWorld cardTitle="About" :cardText="enlace"/>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' // Se puede agregar el "@" para evitar el "../" para encontrar los componentes

export default {
  data: () => ({
  	enlace: "Esta aplicación utiliza el API de giphy.com"
  }),
  components: {
    HelloWorld
  }
};
</script>