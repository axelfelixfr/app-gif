<template>
	<div class="bg-dark bg-grandient py-3">
		<footer>
			<h5 class="text-center text-white">Terminos &amp; Condiciones <small>&copy; {{ year }} hecho por Axel Félix</small></h5>
		</footer>
	</div>
</template>

<script>
	export default{
		data: () => ({
			year: new Date().getFullYear()
		})
	};
</script>


<style>

</style>