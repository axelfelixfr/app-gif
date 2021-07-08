<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-grandient">
	  <!-- <a class="navbar-brand" href="/">Gif Router</a> -->
	  <router-link class="navbar-brand" to="/">Gif Router</router-link>
	  <!-- La etiqueta "<router-link></router-link>" es equivalente a "<a></a>" ya que se trata de un enlace -->
	  <!-- Aunque usar el "<router-link></router-link>" beneficia al no recargar la página, ayudando a hacer una SPA (Single Page Aplication) -->

	  <!-- De igual forma el atributo "to" es equivalente a "href" ya que se coloca la ruta del enlace-->

	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav">
	      <li class="nav-item active">
	      	<!-- Se reemplaza el <a></a> por <router-link></router-link> y el href y to -->
	      	<router-link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></router-link>
	        <!-- <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a> -->
	      </li>
	      <li class="nav-item">
	      	<router-link class="nav-link" to="/gifs">Gifs</router-link>
	        <!-- <a class="nav-link" href="/gifs">Gifs</a> -->
	      </li>
	      <li class="nav-item">
	      	<router-link class="nav-link" to="/stickers">Stickers</router-link>
	        <!-- <a class="nav-link" href="/gifs">Gifs</a> -->
	      </li>
	      <li class="nav-item">
	      	<router-link class="nav-link" to="/about">About</router-link>
	        <!-- <a class="nav-link" href="/about">About</a> -->
	      </li>
	    </ul>
	  </div>
	</nav>
</template>