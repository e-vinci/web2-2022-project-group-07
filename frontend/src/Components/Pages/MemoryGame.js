import { clearPage, renderPageTitle } from "../../utils/render";

// 'use strict';

let correctFlips = 0;
let lastFlipped = [];
let moves = 0;
let seconds = 0;
let minutes = 0;
let secondsStr = '';
let minutesStr = '';
let timerObserver;

const cards = {
	box1: 'box2',
	box2: 'box1',
	box3: 'box4',
	box4: 'box3',
	box5: 'box6',
	box6: 'box5',
	box7: 'box8',
	box8: 'box7',
	box9: 'box10',
	box10: 'box9',
	box11: 'box12',
	box12: 'box11',
	box13: 'box14',
	box14: 'box13',
	box15: 'box16',
	box16: 'box15',
	box17: 'box18',
	box18: 'box17'
};

const MemoryPage = () => {
    clearPage();
    renderPageTitle('Memory Game');
   renderMemory();
};

function renderMemory() {
    const main = document.querySelector('main');

    const memoryPage = `
    <!-- style was inspired by CARBON => https://www.carbon.now.sh -->
    <div class="carbon">
    <div class="panel">
    <div class="panel__one circle"></div>
    <div class="panel__two circle"></div>
    <div class="panel__three circle">
    <!--<input type="checkbox" class="toggler3"> -->
                </div>
                </div>
        <!-- end of panel -->
        <div class="container">

            <div class="box box1">
                <div class="box backside">
                    <i class="far fa-gem"></i>
                </div>
            </div>

            <div class="box box2">
                <div class="box backside">
                    <i class="far fa-gem"></i>
                </div>
            </div>

            <div class="box box3">
                <div class="box backside">
                    <i class="fas fa-bomb"></i>
                </div>
            </div>

            <div class="box box4">
                <div class="box backside">
                    <i class="fas fa-bomb"></i>
                </div>
            </div>

            <div class="box box5">
                <div class="box backside">
                    <i class="fas fa-dizzy"></i>
                </div>
            </div>

            <div class="box box6">
                <div class="box backside">
                    <i class="fas fa-dizzy"></i>
                </div>
            </div>

            <div class="box box7">
                <div class="box backside">
                    <i class="fas fa-cannabis"></i>
                </div>
            </div>

            <div class="box box8">
                <div class="box backside">
                    <i class="fas fa-cannabis"></i>
                </div>
            </div>

            <div class="box box9">
                <div class="box backside">
                    <i class="fas fa-helicopter"></i>
                </div>
            </div>

            <div class="box box10">
                <div class="box backside">
                    <i class="fas fa-helicopter"></i>
                </div>
            </div>

            <div class="box box11">
                <div class="box backside">
                    <i class="fas fa-chess"></i>
                </div>
            </div>

            <div class="box box12">
                <div class="box backside">
                    <i class="fas fa-chess"></i>
                </div>
            </div>

            <div class="box box13">
                <div class="box backside">
                    <i class="fab fa-js-square"></i>
                </div>
            </div>

            <div class="box box14">
                <div class="box backside">
                    <i class="fab fa-js-square"></i>
                </div>
            </div>

            <div class="box box15">
                <div class="box backside">
                    <i class="fas fa-cocktail"></i>
                </div>
            </div>

            <div class="box box16">
                <div class="box backside">
                    <i class="fas fa-cocktail"></i>
                </div>
            </div>

            <div class="box box17">
                <div class="box backside">
                    <i class="fas fa-dice"></i>
                </div>
            </div>

            <div class="box box18">
                <div class="box backside">
                    <i class="fas fa-dice"></i>
                </div>
            </div>

        </div>
    </div>
    <!-- end of MAIN   -->
    <div class="carbon tabbar">

        <div>
            <span>{</span>
            <h4>
                <span>moves:</span>
                <span class="counter"> 0 </span>,
                <span>time_elapsed:</span>
                <span class="time">00:00</span>
            </h4>
            <span>}</span>

            <button class="startMemory" id="startButton">START</button>
        </div>

    </div>
    <!-- <p>by Roektman.com</p> -->
    

    `;
    main.innerHTML = memoryPage;
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', startGame());

    const circle1 = document.querySelector('.panel__one');
    const circle2 = document.querySelector('.panel__two');
    const circle3 = document.querySelector('.panel__three');
    const container = document.querySelector('.container');
    const time = document.querySelector('.time');
    const carbon = document.querySelector('.carbon');
    const counter = document.querySelector('.counter');

    circle1.addEventListener('click', () => {
        clearInterval(timerObserver);
        container.innerHTML = '';
        time.innerHTML = 'XX:XX';
        counter.innerHTML = '0';
    });
    
    circle2.addEventListener('click', () => {
        carbon.style.height = '85%';
        carbon.style.width = '65%';
    });
    // green circle
    circle3.addEventListener('click', () => {
        carbon.style.height = '90%';
        carbon.style.width = '90%';
    });
    
}




const box = Array.from(document.querySelectorAll('.box'));




// container.innerHTML = '';

function flipOnClick(e) {
    const counter = document.querySelector('.counter');
	moves+=1;
	counter.innerHTML = moves;
	const element = e.target;
	lastFlipped.push(element);
	element.classList.add('flipped');
	// console.log(last_flipped.length);
	compareFlipped(lastFlipped);
}

function compareFlipped(array) {
	if (array.length > 2) {
		array.forEach(el => el.classList.remove('flipped'));
		lastFlipped = [];
	}
	if (array.length === 2) {
		const card1 = array[0].classList[1];
		const card2 = array[1].classList[1];
		// console.log(cards[card1], cards[card2]);
		if (cards[card1] === card2 || cards[card2] === card1) {
			// console.log('Yay its a match');
			const c1 = document
			 	.getElementsByClassName(card1)[0]
			 	.firstElementChild.classList.add('matchingcards');
			const c2 = document
			 	.getElementsByClassName(card2)[0]
			 	.firstElementChild.classList.add('matchingcards');
			correctFlips += 1;
			lastFlipped = [];
		} else {
			setTimeout(() => {
				array.forEach(el => el.classList.remove('flipped'));
				lastFlipped = [];
			}, 700);
		}
	}
}

function spreadCards(array) {
    const container = document.querySelector('.container');
	const newArr = array.filter(el => array.indexOf(el) % 2 === 0);
	while (newArr.length > 0) {
		const num = Math.floor(Math.random() * newArr.length);
		const pick = newArr[num];
		container.appendChild(pick);
		// console.log(container);
		newArr.splice(num, 1);
	}
}

function startWatching(Seconds, Minutes) {
    const time = document.querySelector('.time');
    let minute = Minutes;
    let second = Seconds;
	timerObserver = setInterval(() => {
		if(Seconds > 58) {
            minute += 1;
            second = 0;
        } else{ 
            second += 1;
        }
		secondsStr = second > 9 ? `${second}` : `0${second}`;
		minutesStr = minute > 9 ? `${minute}` : `0${minute}`;
		time.innerHTML = `${minutesStr}:${secondsStr}`;
		if (correctFlips >= 9) {
			clearInterval(timerObserver);
            
			gameWonParty(moves);
		}
		// console.log(minutes, secondsStr);
	}, 1000);
}

function startGame() {
    const counter = document.querySelector('.counter');
    const time = document.querySelector('.time');
    const container = document.querySelector('.container');
	correctFlips = 0;
	lastFlipped = [];
	moves = 0;
	seconds = 0;
	minutes = 0;
	secondsStr = '';
	minutesStr = '';
	time.innerHTML = 'XX:XX';
	counter.innerHTML = '0';
	container.innerHTML = '';
	box.forEach(el => el.classList.remove('flipped'));
	clearInterval(timerObserver);
	spreadCards(box);
	container.childNodes.forEach(node =>
		node.firstElementChild.classList.remove('matchingcards')
	);
	startWatching(seconds, minutes);
}

function gameWonParty(move) {
    document.innerHTML = "You Won with just {move} moves !";
	// alert(`You Won with just ${move} moves !`);
	// NOTE: make a fancy celebration with canvas
}

box.forEach(el => el.addEventListener('click', flipOnClick));




export default MemoryPage;