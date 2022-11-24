// import brainWallPaper from '../../img/wallPaperTest.png';
import rotatingBrain from '../../img/rotatingBrain.gif';
import gamebutton from '../../img/verte.png';
import reflexGameButton from '../../img/ReflexGame.gif';


const homePage = `
<div class="container-fluid">    
  <div class="row">
    <section class="padding-x-md padding-y-lg">
        <div class="col-sm">
            
        </div>
        <div class="d-flex justify-content-center">
            <div class="gif">
                <div class="row" id="topGames">
                </div>                
                <img id ='brain' class="img-fluid " src="${rotatingBrain}" alt="Responsive image" />                
                <div class="row" id="bottomGames">
                </div>
            </div>
            
        </div>
    </section>
    <div class="float-lg-start text-component">
                <h1>Welcome to BeBrain !</h1>
                <p>Here you can try to improve your brain level and discover his potential.</p>
            </div>
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
            <a href="/reflexPage"><img class=' topbutton' src="${reflexGameButton}" alt="button game" className="img-fluid" id="btnPop"></a>
            <a href="/reflexPage"><img class='topbutton' src="${gamebutton}" alt="button game" className="img-fluid" id="btnPop"></a>
            `;
            bottomGames.innerHTML += `
            <a href="/reflexPage"><img class='dimension-button ' src="${gamebutton}" alt="button game" className="img-fluid" id="btnPop"></a>
            <a href="/reflexPage"><img class='dimension-button ' src="${gamebutton}" alt="button game" className="img-fluid" id="btnPop"></a>
            `;
            isclicked=true;
        }else {
            topGames.innerHTML=``;
            bottomGames.innerHTML=``;
            isclicked=false;
        }
        

    });
};

export default HomePage;
