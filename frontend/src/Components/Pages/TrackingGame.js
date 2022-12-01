import Phaser from 'phaser';
import {clearPage, renderPageTitle} from "../../utils/render";
import trackingBackground from '../../img/trackingBackground.jpg';


let game;
const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 500,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: {y: 0},
        debug: false
    }
  },
    scene: {
        preload: preload(),
        create: create(),
        update: update()
    }
};


const TrackingGame = () => {
  clearPage();
  renderPageTitle('Tracking Game');
  renderTrackingGame()
  if (game) game.destroy(true);
  game = new Phaser.Game(config);
  game.load.image('background', trackingBackground);
  game.add.image(537, 322, 'background');
};
function preload() {

}
function create() {

}

function update() {

}

function renderTrackingGame() {
  const main = document.querySelector('main');
  main.innerHTML = `
<div class="container-fluid">
    <section class="padding-x-md padding-y-lg">
        <div id="gameDiv" class="centerPageTracking d-flex justify-content-center my-3">
        </div>
    </section>
  
</div>
  `;
}

export default TrackingGame;
