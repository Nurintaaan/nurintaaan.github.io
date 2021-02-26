<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function dismiss() {
    dispatch('dismissClicked');
  }

  export let data;
</script>

<div class="fixed z-20 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-blackFull opacity-50" on:click={dismiss}></div>
    </div>

    <!-- TODO: center the modal -->
    <!-- This element is to trick the browser into centering the modal contents. -->
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-3/4 lg:w-full inset-center" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 sm:mt-0 sm:ml-4 text-left">
            <div class="mb-4">
              <h3 class="lg:text-2xl text-base leading-6 font-medium text-gray-900"  id="modal-headline">
                {data.title}
              </h3>
              {#if data.startDate && data.endDate}
                <p class="text-xs lg:text-sm text-gray-500">
                  {data.startDate} - {data.endDate}
                </p>
              {/if}
            </div>
            <div class="mt-2">
              <ul class="text-xs lg:text-base text-gray-500 list-disc ml-4">
                {#each data.responsibilities as responsibility}
                  <li>{responsibility}</li>
                {/each}
              </ul>
            </div>
            <div class="mt-2 mb-2">
              {#each data.skills as skill}
                <div class="lg:text-base inline-block text-sm rounded-full py-1 px-3 mr-2 mt-3" style="background-color: {skill.background}; color: {skill.color}">
                  {skill.name}
                </div>
              {/each}
            </div>
            {#if data.link}
              <div 
                class="rounded-lg py-3 px-6 mt-4 bg-primary text-center text-white cursor-pointer"
                on:click={() => window.location.assign(data.link) }
              >
                See Detail
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style type="text/css">
.inset-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>