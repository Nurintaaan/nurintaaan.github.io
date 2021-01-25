
<script>
  import FloatingButton from '../components/FloatingButton.svelte';

  let leavesSrc = './images/leaves.png';
  let leavesSecondarySrc = './images/leaves_secondary.png';
  let profileSrc = './images/profile_picture.png';
  let laptopSrc = './images/laptop.png';
  let mobileSrc = './images/mobile.png';

</script>

<div class="flex flex-col lg:h-screen lg:justify-center half-full" id="home">
  <img src={profileSrc} alt="profile picture" class="w-2/4 m-auto my-4 lg:hidden" />
  <div class="lg:px-32 lg:flex lg:z-10">
    <div class="p-4 lg:w-2/4">
      <h1 class="m-2 text-left text-gray font-lato font-bold text-left tracking-widest text-lg lg:text-5xl">
        NUR INTAN
      </h1>
      <p class="m-2 text-left text-gray lg:text-xl">
        Passionate Front End Developer
      </p>
      <hr class="divider lg:my-8" />
      <p class="text-left m-2 text-gray text-xs leading-loose lg:text-sm">
        "I mix eye bags and chocolate to make web looks beautiful and functional. I love to learn about optimization and clean code 🌱”
      </p>
    </div>
    <span class="w-1/4 lg:block hidden" />
    <img src={profileSrc} alt="profile picture" class="w-1/4 m-auto hidden lg:block" />
  </div>
  <img src={leavesSrc} alt="leaves" class="absolute right-0 bottom-0 w-3/4 sm:bottom-2 lg:w-2/4"/>
</div>
<FloatingButton/>
<div class="flex flex-col lg:h-screen bg-white" id="project">
  <p class="mt-10 text-center text-gray lg:text-2xl text-sm">
    Using skill and passion to create this project
  </p>
  <p class="m-2 text-center text-gray lg:text-sm text-xs">
   With some prior knowledge on UI/UX and Front end
  </p>

  <img src={laptopSrc} alt="Laptop Screen" class="m-auto my-4 hidden lg:block" />
  <img src={mobileSrc} alt="Mobile Screen" class="m-auto my-4 lg:hidden" />

  <div class="flex justify-between z-1 bottom-0">
      <img src={leavesSecondarySrc} alt="leaves" class="flip-horizontally w-1/4 h-1/4" />
      <img src={leavesSecondarySrc} alt="leaves" class="w-1/4 h-1/4" />
  </div>
</div>
<div class="bg-lightGrey h-screen z-10">
  
</div>

<style>
  .divider {
    background: #9CA27B;
    border: 3px solid #9CA27B;
    width: 80%;
    margin-left: 6px; 
    margin-bottom: 24px;
  }

  .half-full {
    height: 83vh;
  }
  .flip-horizontally {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  @media only screen and (max-width: 768px) {
    .half-full {
      height: 86vh;
    }
  }
</style> 