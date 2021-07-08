<template>
	<div class="card h-100">
	  <img
  		loader="lazy"
  		:src="data.images.downsized.url" 
  		class="card-img-top" 
  		alt="random"
  		/>
	  <div class="card-body">
	    <h5 class="card-title">{{ data.title }}</h5>
	    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
	  </div>
	</div>
</template>

<script>
	export default{
		props: {
			// La data de la API debe ser un objeto ya que recibe varios parámetros
			data: Object,
		},
	};
</script>