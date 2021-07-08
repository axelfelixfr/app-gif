<template>
    <Header></Header>
    <main class="content">
      <router-view/> <!-- <router-view> es para ver las rutas asignadas a los diferentes componentes -->
    </main>
    <Footer></Footer>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default{
    components:{
      Header, Footer
    }
  };
</script>

<style>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 81.7vh;
}
</style>