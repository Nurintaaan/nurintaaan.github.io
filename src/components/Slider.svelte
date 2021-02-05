<!-- TODO: make props -->
<script>
	// export let data;
	import { createEventDispatcher } from 'svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import SwiperCore, { Navigation } from 'swiper';

	SwiperCore.use([Navigation]);
	const dispatch = createEventDispatcher();

	let data = [
		{
			name: 'svelte',
			src: './images/project_1.png'
		},
		{
			name: 'println',
			src: './images/project_2.png'
		},
		{
			name: 'sevy',
			src: './images/project_3.png'
		},
		{
			name: 'learningBuddies',
			src: './images/project_4.png'
		},
	];

	let activeIndex = 0;

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

	function emitShowModal(project) {
		dispatch('showModal', {
			project,
		});
	}
</script>

<div>
	<Swiper
	   slidesPerView={1}
	   on:slideNextTransitionEnd={swipeRight}
	   on:slidePrevTransitionEnd={swipeLeft}
	   on:swiper={(e) => (window.swiper = e.detail[0])}
	   navigation
	 >
	 	{#each data as datum , i}
	 		<SwiperSlide isVisible={activeIndex === i}>
		    	<img 
					src="{datum.src}" 
					alt="Project" 
					class="w-3/4 lg:w-1/2 m-auto my-4 shadow-md" 
					on:click={() => emitShowModal(datum.name)}
				/>
		    </SwiperSlide>
		{/each}
	</Swiper>	
</div>
<div class="flex flex-col justify-center">
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