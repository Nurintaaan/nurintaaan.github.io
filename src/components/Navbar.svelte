<script>
  let links = [
    {
      title: 'home',
      target: 'home',
    },
    {
      title: 'work',
      target: 'work',
    },
    {
      title: 'project',
      target: 'project',
    },
    {
      title: 'contact me',
      target: 'contact',
    },
  ];

  let isActive = 'home';
  let diamondSrc = './images/diamond.svg';
  let closeSrc = './images/close.svg';

  let isShowSmallNavbar = false;
</script>

<nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0">
    <img src={diamondSrc} alt="Diamond Logo" class="lg:ml-8 w-10" />
  </div>
  <div class="block lg:flex items-center w-auto hidden">
    <div>
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
    </div>
  </div>

  <a class="block lg:hidden text-xl" on:click="{() => isShowSmallNavbar = true}">
    <i class="fa fa-bars" aria-hidden="true" />
  </a>

  {#if isShowSmallNavbar}
  <div class="overlay" />
  <div class="block bg-lightGrey mobile-navbar">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a class="nav block lg:inline-block pt-4 text-sm" on:click="{() => isShowSmallNavbar = false}">
        <img src={closeSrc} alt="Close Icon" class="lg:ml-8 w-3.5" />
      </a>
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
</nav>

<style>
  li:hover, .active {
    border-bottom: 4px solid #9CA27B;
  }

  .mobile-navbar {
    top: 0;
    bottom: 0;
    right: 0;
    padding: 16px;
    position: fixed;
    z-index: 99;
  }

  .overlay {
    position: absolute;
    z-index: 98;
    background: rgba(0, 0, 0, 0.5);
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
</style>