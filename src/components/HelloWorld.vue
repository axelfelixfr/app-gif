<template>
  <div class="container mt-3">
    <div class="card w-100">
      <div class="card-body">
        <h5 class="card-title">{{ cardTitle }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Sitio web hecho por Axel Félix Flores Ramírez</h6>
        <p class="card-text">{{ cardText  }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      cardTitle: {
        type: String,
        default: "Gif Router"
      },
      cardText: {
        type: String,
        default: "Esta es aplicación hecha con Vue 3 como framework frontend"
      }
    }
  };
</script>