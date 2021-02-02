<!-- TODO: make props -->
<script>
	// export let data;

	let data = [
		{id: 1},
		{id: 2},
		{id: 3},
		{id: 4},
	];

	let activeIndex = 2;

	$: isActive = (index) => (activeIndex === index);
	$: isActiveAround = (index) => (activeIndex-1 === index || activeIndex+1 === index);
	$: isNotActive = (index) => (!isActive(index) && !isActiveAround(index));

	const swipeLeft = () => {
		if(activeIndex > 0) {
			activeIndex = activeIndex - 1;
		}
	}

	const swipeRight = () => {
		if(activeIndex < data.length-1) {
			activeIndex = activeIndex + 1;
		}
	}
</script>

<div class="flex flex-col justify-center">
	<img 
		src="{`./images/project_${activeIndex+1}.png`}" 
		alt="Project" 
		class="w-3/4 lg:w-1/2 m-auto my-4 shadow-md" 
	/>		
	<div 
		class="inline-flex m-auto"
	>
		{#each data as datum , i}
			<div 
				class:slider--active="{isActive(i)}" 
				class:slider--big="{isActiveAround(i)}" 
				class:slider="{isNotActive(i)}" 
			 />

		{/each}
	</div>
	<!-- TODO: make it like arrow -->
	<div class="inline-flex m-auto mt-4">
		<button 
			class="p-4 bg-secondary mr-4 text-white rounded" 
			on:click="{() => swipeLeft()}"
		>
			LEFT
		</button>
		<button 
			class="p-4 bg-secondary text-white rounded" 
			on:click="{() => swipeRight()}"
		> 
			RIGHT
		</button>
	</div>
</div>

<style>
	.slider--active {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		margin-right: 2px;
		background-color: #9CA27B;
	}

	.slider--big {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		margin-right: 2px;
		margin-top: 2px;
		background-color: #C5C5C5;
	}

	.slider {
		width: 10px;
		height: 10px;
		margin-top: 5px;
		margin-right: 2px;
		border-radius: 50%;
		background-color: #C5C5C5;
	}
</style>