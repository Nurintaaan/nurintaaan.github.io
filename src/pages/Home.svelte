<!-- TODO: refactor all of this -->

<script>
  import FloatingButton from '../components/FloatingButton.svelte';
  import Slider from '../components/Slider.svelte';
  import Modal from '../components/Modal.svelte';
  import projects from './projects.js';

  let leavesSrc = './images/leaves.png';
  let leavesSecondarySrc = './images/leaves_secondary.png';
  let leavesSecondaryTwoSrc = './images/leaves_secondary2.png';
  let profileSrc = './images/profile_picture.png';
  let laptopSrc = './images/laptop.png';
  let mobileSrc = './images/mobile.png';
  let githubSrc = './images/github.png';
  let linkedinSrc = './images/linkedin.png';

  let companies = [
    {
      name: 'Kudo',
      imgSrc: './images/kudo.png',
    },
    {
      name: 'Hijup',
      imgSrc: './images/hijup.png',
    },
    {
      name: 'Tokopedia',
      imgSrc: './images/tokopedia.png',
    },
    {
      name: 'Bukalapak',
      imgSrc: './images/bukalapak.png',
    },
  ];

  let tempProject = './images/project_1.png';

  let modalData;

  let isModalOpen = false;

  const showModal = (event) => {
    modalData = projects[event.detail.project];
    console.log(modalData);
    isModalOpen = true;
  }

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
      <hr class="divider divider--half lg:my-8" />
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

  <Slider on:showModal={showModal}/>

  <div class="flex justify-between z-1 bottom-0">
      <img src={leavesSecondarySrc} alt="leaves" class="flip-horizontally w-1/4 h-1/4" />
      <img src={leavesSecondarySrc} alt="leaves" class="w-1/4 h-1/4" />
  </div>
</div>
<div class="bg-lightGrey z-10 flex flex-col justify-center" id="work">
  <p class="mt-10 text-center text-gray lg:text-2xl text-sm pb-3">
    Part of The Team at Top Indonesia Ecommerce
  </p>
  <hr class="divider w-1/4 m-auto"/>
  <div class="flex justify-between lg:mx-40 lg:p-20 p-10 flex-wrap">
    {#each companies as company}
      <img src={company.imgSrc} alt="{company.name}" class="p-5 w-1/2 lg:w-1/4" />
    {/each}
  </div>
</div>
<div class="bg-white flex flex-col lg:flex-row justify-center relative" id="contact">
  <img src={leavesSecondaryTwoSrc} alt="leaves" class="w-1/4 h-1/4 hidden lg:block" />
  <div class="flex flex-col justify-center">
    <p class="font-lato font-bold text-gray text-2xl text-center lg:text-left mt-10 lg:ml-16">
      Wanna know more?
    </p>
    <p class="text-center text-gray text-sm text-center lg:text-left lg:ml-16">
      Let’s get connected
    </p>
    <div class="flex justify-center py-10 lg:py-2">
      <img src={githubSrc} alt="github" class="p-4">
      <img src={linkedinSrc} alt="linkedin" class="p-4">
    </div>
  </div>
  <div class="absolute corner lg:hidden">  
    <img src={leavesSecondaryTwoSrc} alt="leaves" class="w-1/2 h-1/2 z-0" />
  </div>
</div>

{#if isModalOpen}
  <Modal data={modalData} on:dismissClicked={() => isModalOpen = false}/>
{/if}

<style>
  .divider {
    background: #9CA27B;
    border: 2px solid #9CA27B;
  }

  .divider--half {
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

  .corner {
    bottom: -30%;
    left: -30%;
  }
</style> 