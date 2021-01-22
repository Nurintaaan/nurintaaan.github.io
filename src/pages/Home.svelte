
<script>
  let leavesSrc = './images/leaves.png';
  let profileSrc = './images/profile_picture.png';
</script>

<div class="flex flex-col h-screen ">
  <img src={profileSrc} alt="profile picture" class="w-2/4 m-auto my-4" />
  <div class="p-4">
    <h1 class="m-2 text-left text-gray font-lato font-bold text-left tracking-widest text-lg">
      NUR INTAN
    </h1>
    <p class="m-2 text-left text-gray">
      Passionate Front End Developer
    </p>
    <hr class="divider" />
    <p class="text-left m-2 text-gray text-sm leading-loose">
      "I mix eye bags and chocolate to make web looks beautiful and functional. I love to learn about optimization and clean code 🌱”
    </p>
  </div>
  <img src={leavesSrc} alt="leaves" class="absolute right-0 bottom-0 w-3/4 lg:w-2/4"/>
</div>

<style>
  .divider {
    background: #9CA27B;
    border: 3px solid #9CA27B;
    width: 80%;
    margin-left: 6px; 
    margin-bottom: 24px;
  }
</style> 