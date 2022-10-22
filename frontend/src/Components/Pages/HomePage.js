import brainWallPaper from '../../img/wallPaperTest.png';


const homePage = `
<div class="text-center">
  <h3>Welcome to Brainy !</h3>

  <p>Here you can try to improve your brain level</p>
  <div class="pb-3">
    <img class="img-thumbnail w-50" src="${brainWallPaper}" alt="BrainWallpaper" />
  </div>
</div>`;


const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage;
};

export default HomePage;
