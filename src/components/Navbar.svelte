<script>
  import { fade } from 'svelte/transition';
  let diamond = './images/diamond.svg';

  let links = [
    {
      title: 'home',
      target: 'home',
    },
    {
      title: 'project',
      target: 'project',
    },
    {
      title: 'work',
      target: 'work',
    },
    {
      title: 'contact me',
      target: 'contact',
    },
  ];

  let isActive = 'home';
  let isShowSmallNavbar = false;
</script>

<nav class="flex items-center justify-between flex-wrap p-6 navbar">
  <div class="flex items-center flex-shrink-0">
    <img 
      src={diamond} 
      alt="Diamond Logo" 
      class="lg:ml-8 w-10"
    />
  </div>
  <ul class="block lg:flex items-center w-auto hidden">
    {#each links as link}
    <li
      class="nav block lg:inline-block mx-4 text-sm"
      class:active="{isActive === link.target}"
      on:click="{() => isActive = link.target}"
    >
      <a href="{`#${link.target}`}">        
        { link.title.toUpperCase() }
      </a>
    </li>
    {/each}
  </ul>

  <!-- Mobile Navbar -->  
  <a 
    class="block lg:hidden text-xl" 
    on:click="{() => isShowSmallNavbar = true}"
  >
    <i class="fa fa-bars" aria-hidden="true" />
  </a>

  {#if isShowSmallNavbar}
  <div 
    class="overlay" 
    transition:fade 
    on:click="{() => isShowSmallNavbar = false}"
  />
  
  <div 
    class="block bg-lightGrey mobile-navbar" 
    transition:fade
  >
    <div class="px-2 pt-2 pb-3 space-y-1">
      {#each links as link}
      <a 
        href="{`#${link.target}`}"
        class="nav block lg:inline-block pt-4 text-sm"
        class:active="{isActive === link.target}"
        on:click="{() => isActive = link.target}"
      >        
        { link.title.toUpperCase() }
      </a>
      {/each}
    </div>
  </div>
  {/if}
  <!-- End of Mobile Navbar -->

</nav>

<style>
  li:hover, .active {
    border-bottom: 4px solid #9CA27B;
  }

  .mobile-navbar {
    top: 0;
    bottom: 0;
    right: 0;
    padding: 16px 50px 16px 16px;
    position: fixed;
    z-index: 99;
  }

  .overlay {
    position: fixed;
    z-index: 98;
    background: rgba(0, 0, 0, 0.5);
    top:0;
    left:0;
    right:0;
    bottom:0;
  }

  .navbar {
    height: 10vh;
  }
</style>