import { clearPage, renderPageTitle } from "../../utils/render";

const GameStatus = {
    STOP: 1,
    START: 2,
}


let timeout1;
let timeout2;

let color = "grey";
let previousColor = "grey";


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
    navi.appendChild(title2);
    navi.appendChild(p1);
    div1.appendChild(navi);

    const canvasParent = document.createElement('div');
    canvasParent.className = 'canvas-parent';
    canvasParent.id = 'canvasParent';
    const canvasGame = document.createElement('canvas');
    canvasGame.id = 'canvasReflexe';

   
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


    canvasGame.addEventListener('click', () => {
        EndGame();
        buttStart.innerHTML = "Start Game";
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
    previousColor = color;

    const c = document.getElementById("canvasReflexe");

    const centerX = c.width / 2;
    const centerY = c.height / 2;
    const radius = 70;

    const ctx = c.getContext("2d");
    ctx.fillStyle = "rgb(206, 63, 63)";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'grey';
    color = "grey";
    ctx.stroke();
}





function StartGame() {
    const ChangeTime = GetRandomTime(1, 8);
    const EndTime = ChangeTime + 5000;
    statu = GameStatus.START;
    previousColor = color;
    const c = document.getElementById("canvasReflexe");

    const centerX = c.width / 2;
    const centerY = c.height / 2;
    const radius = 70;

    const ctx = c.getContext("2d");
    ctx.fillStyle = "rgb(206, 63, 63)";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    color = "red";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    Timeout1Function( ChangeTime );
    Timeout2Function( EndTime );
}

function EndGame() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    const c = document.getElementById("canvasReflexe");
    previousColor = color;
    const centerX = c.width / 2;
    const centerY = c.height / 2;
    const radius = 70;

    const ctx = c.getContext("2d");
    ctx.fillStyle = "rgb(206, 63, 63)";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'grey';
    color = "grey";
    ctx.stroke();

    statu = GameStatus.STOP;

}

function GetRandomTime(min, max) {
    let result = Math.floor( Math.random() * Math.floor(max) ) + min;
    result *= 1000;
    return result;
}

function Timeout2Function(time) {
    timeout2 = setTimeout( () => {
        const TimeText = document.getElementById('time-text');
        const bouttStart = document.getElementById('startButton');
        bouttStart.textContent = 'Start Game';
        TimeText.innerHTML = "To slow...";
        EndGame();
    }, time);
}

function Timeout1Function(time) {
    timeout1 = setTimeout( () => {
        const c = document.getElementById("canvasReflexe");
        const centerX = c.width / 2;
        const centerY = c.height / 2;
        const radius = 70;
        previousColor = color;
        const ctx = c.getContext("2d");
        ctx.fillStyle = "rgb(206, 63, 63)";
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        color = "green";
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    

        const date1 = new Date();
        const TimeNow = date1.getTime();

        const canvasArea = document.getElementById('canvasReflexe');
        canvasArea.addEventListener('click', () => {
            if (previousColor === "green"){
                const date2 = new Date();
                const TimeLater = date2.getTime();
                const PlayTime = (TimeLater - TimeNow);
                const TimeText = document.getElementById('time-text');
                TimeText.innerHTML = PlayTime;
                TimeText.innerHTML += "ms";
            } else if (previousColor === "red"){
                const TimeText = document.getElementById('time-text');
                TimeText.innerHTML = "To fast...";
            } else {
                const TimeText = document.getElementById('time-text');
                TimeText.innerHTML = "First start the game.";
            }
        });
    }, time)
}

export default reflexepage;
