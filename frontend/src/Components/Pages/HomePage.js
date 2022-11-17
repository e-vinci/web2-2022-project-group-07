// import brainWallPaper from '../../img/wallPaperTest.png';
import rotatingBrain from '../../img/rotatingBrain.gif';
import gamebutton from '../../img/verte.png';


const homePage = `

  <div class="row">
    <section class="padding-x-md padding-y-lg">
        <div class="grid gap-md items-center">
            <div id='hide' class="gif">
                <img id ='1' class="img-fluid" src="${rotatingBrain}" alt="Responsive image" />
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
    const games=document.getElementById('hide');
    let isclicked =false;
    games.addEventListener('click',()=>{
        if(!isclicked) {
            games.innerHTML += `
            <img class='reflexgame ' src="${gamebutton}" alt="button game" className="img-fluid">
            <img class='reflexgame ' src="${gamebutton}" alt="button game" className="img-fluid">
            <img class='reflexgame ' src="${gamebutton}" alt="button game" className="img-fluid">
            <img class='reflexgame ' src="${gamebutton}" alt="button game" className="img-fluid">
            
            `;
        }
        isclicked=true;

    });
};

export default HomePage;
