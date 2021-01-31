<!-- TODO: import hammer js implement pan left pan right https://github.com/beomy/svelte-hammer -->
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

	const isActive = (index) => (activeIndex === index);
	const isActiveAround = (index) => (activeIndex-1 === index || activeIndex+1 === index);
	const isNotActive = (index) => (!isActive(index) && !isActiveAround(index));
</script>

<!-- TODO make it center -->
<div class="inline-flex justify">
	<!-- TODO: put image -->

	<!-- TODO: make it dynamic -->
	{#each data as datum , i}
		<div 
			class:slider--active="{isActive(i)}" 
			class:slider--big="{isActiveAround(i)}" 
			class:slider="{isNotActive(i)}" 
		 />

	{/each}
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