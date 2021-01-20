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
  let src = './images/diamond.svg';
</script>

<nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 mr-6">
    <img {src} alt="Diamond Logo" class="ml-8" />
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="lg:flex-grow" />
    <div>
      {#each links as link}
      <li
        class="nav block lg:inline-block mx-4"
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
</nav>

<style>
  li:hover, .active {
    border-bottom: 4px solid #9CA27B;
  }
</style>