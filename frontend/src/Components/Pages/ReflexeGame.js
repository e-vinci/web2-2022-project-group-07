import { clearPage, renderPageTitle } from "../../utils/render";

const GameStatus = {
    STOP: 1,
    START: 2,
}

const TimeText = document.getElementById('time-text');




let timeout1;
let timeout2;



let statu = GameStatus.STOP;

const reflexepage = () => {
    clearPage();
    renderPageTitle('Reflexe Game');
    renderReflexePage();
}


function renderReflexePage() {
    const main = document.querySelector('main');
    const div1 = document.createElement('div');
    div1.className = 'reflexeGame';

    const header = document.createElement('div');
    header.className = 'headerReflexion';
    const titleGame = document.createElement('h1');
    titleGame.textContent = 'Reaction Time Game';
    header.appendChild(titleGame);
    div1.appendChild(header);

    const navi = document.createElement('div');
    navi.className = 'navigation';
    const title2 = document.createElement('h2');
    title2.textContent = 'Checkout your reaction time!';
    const p1 = document.createElement('p');
    p1.className = 'information';
    p1.textContent = 'Click the area after the color change to ';
    const greenSpan = document.createElement('span');
    greenSpan.textContent = 'GREEN';
    p1.appendChild(greenSpan);
    navi.appendChild(p1);
    navi.appendChild(title2);
    div1.appendChild(navi);

    const canvasParent = document.createElement('div');
    canvasParent.className = 'canvas-parent';
    canvasParent.id = 'canvasParent';
    const canvasGame = document.createElement('canvas');
    canvasGame.id = 'canvasReflexe';

    canvasGame.addEventListener('click', () => {
        EndGame();
    })
    canvasParent.appendChild(canvasGame);
    div1.appendChild(canvasParent);


    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score';

    const sect1 = document.createElement('div');
    sect1.className = 'section-1';

    const buttStart = document.createElement('button');
    buttStart.id = 'startButton';
    buttStart.type = 'button';
    buttStart.textContent = 'Start Game';
    
    buttStart.addEventListener('click', () => {
        if ( statu === GameStatus.START ){
            EndGame();
            buttStart.innerHTML = "Start Game";
        } else {
            StartGame();
            buttStart.innerHTML = "Stop Game";
        }
    })

    sect1.appendChild(buttStart);
    scoreDiv.appendChild(sect1);

    const sect2 = document.createElement('div');
    sect2.className = 'section-2';

    const pText = document.createElement('p');
    pText.textContent = 'Your time :';
    sect2.appendChild(pText);
    const pText2 = document.createElement('p');
    pText2.id = 'time-text';
    pText2.textContent = 'NO TIME';
    
    sect2.appendChild(pText2);

    scoreDiv.appendChild(sect2);
    div1.appendChild(scoreDiv);
    main.appendChild(div1);
}

function StartGame() {
    const ChangeTime = GetRandomTime(1, 8);
    const EndTime = ChangeTime + 5000;
    statu = GameStatus.START;

    const c = document.getElementById("canvasReflexe");

    const ctx = c.getContext("2d");
    ctx.fillStyle = "rgb(206, 63, 63)";
    ctx.fillRect(0, 20, 297, 800);
    Timeout1Function( ChangeTime );
    Timeout2Function( EndTime );
}

function EndGame() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    const c = document.getElementById("canvasReflexe");
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#7894E1";
    ctx.fillRect(0, 20, 297, 800);
    statu = GameStatus.STOP;
}

function GetRandomTime(min, max) {
    let result = Math.floor( Math.random() * Math.floor(max) ) + min;
    result *= 1000;
    return result;
}

function Timeout2Function(time) {
    timeout2 = setTimeout( () => {
        EndGame();
    }, time);
}

function Timeout1Function(time) {
    timeout1 = setTimeout( () => {
        const c = document.getElementById("canvasReflexe");
        const ctx = c.getContext("2d");
        ctx.fillStyle = "rgb(78, 197, 78)";
        ctx.fillRect(0, 20, 297, 800);

        const date1 = new Date();
        const TimeNow = date1.getTime();

        const canvasArea = document.getElementById('canvasReflexe');
        canvasArea.addEventListener('click', () => {
            const date2 = new Date();
            const TimeLater = date2.getTime();
            const PlayTime = (TimeLater - TimeNow);
            TimeText.innerHTML = PlayTime;
        });
    }, time)
}

export default reflexepage;
