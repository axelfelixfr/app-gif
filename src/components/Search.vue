<template>
	<form @submit.prevent="ejecutarPeticion" class="py-3 my-3 border-bottom border-dark">
	  <div class="form-group">
	    <label for="buscador">Categoría</label>
	    <input type="text" class="form-control" id="buscador" v-model="search">
	  </div>
	  <button type="submit" class="btn btn-dark">Search</button>
	</form>
</template>

<script>
	export default{
		data: () => ({
			search: "",
		}),
		methods:{
			ejecutarPeticion(){
				this.$emit("accion", this.search);
			}
		}
	};
</script>