// import brainWallPaper from '../../img/wallPaperTest.png';
import rotatingBrain from '../../img/rotatingBrain.gif';
import gamebutton from '../../img/verte.png';


const homePage = `

  <div class="col-sm">
    <section class="padding-x-md padding-y-lg">
        <div class="grid gap-md items-center">
            <div id='hide' class="container gif">
                <div class="row " id="topGames">
                    <p></p>
                </div>
                <div class="row">
                    <img id ='brain' class="img-fluid " src="${rotatingBrain}" alt="Responsive image" />
                </div>
                <div class="row" id="bottomGames">
                <div>
            </div>
            
        </div>
    </section>
    <div class="float-lg-start text-component">
                <h1>Welcome to BeBrain !</h1>
                <p>Here you can try to improve your brain level and discover his potential.</p>
            </div>
  </div>
`;


const HomePage = () => {
    const main = document.querySelector('main');
    main.innerHTML = homePage;
    const menu=document.getElementById('brain');
    const topGames=document.getElementById('topGames');
    const bottomGames=document.getElementById('bottomGames');
    let isclicked =false;
    menu.addEventListener('click',()=>{
        if(!isclicked) {
            topGames.innerHTML += `
            <img class='dimension-button ' src="${gamebutton}" alt="button game" className="img-fluid">
            <img class='dimension-button ' src="${gamebutton}" alt="button game" className="img-fluid">
            `;
            bottomGames.innerHTML += `
            <img class='dimension-button ' src="${gamebutton}" alt="button game" className="img-fluid">
            <img class='dimension-button ' src="${gamebutton}" alt="button game" className="img-fluid">
            `;
        }
        isclicked=true;

    });
};

export default HomePage;
