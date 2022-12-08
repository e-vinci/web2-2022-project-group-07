import rotatingBrain from '../../img/GreenClickMe.gif';
import gamebutton from '../../img/verte.png';
import reflexGameButton from '../../img/ReflexGame2.gif';
import fastClick from '../../img/ReflexGame.gif';
/* import { isAuthenticated } from '../../utils/auths'; */


const homePage = `
<div class="container-fluid">    
    <div class="row">
        <div class="col-sm">   

        </div>
        <div class="d-flex justify-content-center">
            <div class="gif">
                <div class="row" >
                    <div class="col-sm" id="firstGame">
                    </div>
                    <div class="col-sm">
                    </div>
                    <div class="col-sm" id="secondGame">
                    </div>
                </div>    
                    <img id ='brain' class="img-fluid " src="${rotatingBrain}" alt="Responsive image" />
                <div class="row">
                    <div class="col-sm" id="thirdGame">
                    </div>
                    <div class="col-sm">
                    </div>
                    <div class="col-sm" id="lastGame">
                    </div>
                </div>
            </div>
        </div>
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
    const menu = document.getElementById('brain');
    const firstGame = document.getElementById('firstGame');
    const secondGame = document.getElementById('secondGame');
    const thirdGame = document.getElementById('thirdGame');
    const lastGame = document.getElementById('lastGame');

    let isclicked = false;
    menu.addEventListener('click', () => {
        if (!isclicked) {
            firstGame.innerHTML += `
                <a href="/reflexPage"><img class='topbutton'  src="${reflexGameButton}" alt="button game" className="img-fluid" id="btnPop"></a>
            `;
            secondGame.innerHTML += `
                <a href="/reflexPage"><img class='topbutton' src="${gamebutton}" alt="button game" className="img-fluid" id="btnPop"></a>
            `;
            thirdGame.innerHTML += `
                <a href="#"><img class='dimension-button ' src="${gamebutton}" alt="button game" className="img-fluid" id="btnPop"></a>
            `;
            lastGame.innerHTML += `
                <a href="/fastClick"><img class='dimension-button ' src="${fastClick}" alt="button game" className="img-fluid" id="btnPop"></a>
            `;
            isclicked = true;
        } else {
            firstGame.innerHTML = ``;
            secondGame.innerHTML = ``;
            thirdGame.innerHTML = ``;
            lastGame.innerHTML = ``;
            isclicked = false;
        }


    });


};

export default HomePage;
