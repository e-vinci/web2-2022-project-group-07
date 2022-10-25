import brainWallPaper from '../../img/wallPaperTest.png';


const homePage = `
<section class="padding-x-md padding-y-lg">
  <div class="grid gap-md items-center">
    <div class="col-6">
      <div class="text-component">
        <h1 class="text-lg">Welcome to BeBrain !</h1>
        <p>Here you can try to improve your brain level and discover his potential.</p>
      </div>
    </div>

    <div class="col-6">
      <figure class="td-figure">
        <img class="block width-100%" src="${brainWallPaper}" alt="BrainWallpaper" />
      </figure>
    </div>
  </div>
</section>`;


const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage;
};

export default HomePage;
