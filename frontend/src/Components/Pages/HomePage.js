// import brainWallPaper from '../../img/wallPaperTest.png';
import rotatingBrain from '../../img/rotatingBrain.gif';


const homePage = `

  <div class="row">
    <section class="padding-x-md padding-y-lg">
        <div class="grid gap-md items-center">
                <div class="gif">
                    <img class="img-fluid" src="${rotatingBrain}" alt="Responsive image" />
                </div>
                <div class="float-lg-start text-component">
                    <h1>Welcome to BeBrain !</h1>
                    <p>Here you can try to improve your brain level and discover his potential.</p>
                </div>
        </div>
    </section>
  </div>
`;


const HomePage = () => {
    const main = document.querySelector('main');
    main.innerHTML = homePage;
};

export default HomePage;
