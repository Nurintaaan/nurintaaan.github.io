<script>
	import { scrollTo } from "svelte-scrollto";
	let src = './images/chevron_down.svg';
</script>

<!-- TODO: fix this -->
<div class="absolute bottom-0 center mb-10 z-20" on:click={() => scrollTo({element: '#project'})}>
	<button class="bg-secondary lg:w-16 lg:h-16 w-12 h-12 rounded-full flex items-center justify-center animate-bounce">
	  <img {src} alt="chevron_down"/>
	</button>
</div>

<style>
	.center {
		left: 50%;
	}

	@media only screen and (max-width: 768px) {
	  .center {
	    left: 45%;
	  }
	}
</style>