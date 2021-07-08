<template>
	<div class="container mt-3">
		<h1 class="text-center border-bottom border-dark">Gifs</h1>
		<search @accion="getGifs"></search>
		<loading v-if="load"></loading>
		<div class="row row-cols-1 row-cols-md-3">
			<div class="col-sm-12 col-lg-3 mb-4" v-for="gif in gifs" :key="gif.id">
				<card class="w-100" :data="gif" ></card>
			</div>
		</div>
	</div>
</template>

<script>
	import Card from "../components/Card.vue";
	import Search from "../components/Search.vue";
	import Loading from "../components/Loading.vue";
	export default {
		components: { Card, Search, Loading },
		data: () => ({
			gifs: {},
			load: false
		}),
		// Se usa created() porque hace la petición antes de que se cree y la data se enviara correctamente
		created: function(){
			this.getGifs();
			/*
			// Petición de tipo GET
			const res = this.axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => console.log(data));
			// Con el metodo "then" se resuelve la petición esperada
			*/
		},
		methods:{
			async getGifs(search = "random"){
				const key = "EAimHL778KEeYQTyq8qL0XaMNB6afDbw"
				this.load = true; // Se activa el loading
				const { data } = await this.axios.get(
					`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`
					);
				this.gifs = data.data;
				this.load = false; // Se cierra el loading
				console.log(data);
			}
		}
	};
</script>