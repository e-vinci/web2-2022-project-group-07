import Phaser from 'phaser';
import {clearPage, renderPageTitle} from "../../utils/render";

let game;
const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 500,
parent : 'gameDiv',
};

const TrackingGame = () => {
  clearPage();
  renderPageTitle('Tracking Game');
  renderTrackingGame()
  if (game) game.destroy(true);
  game = new Phaser.Game(config);
};

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
