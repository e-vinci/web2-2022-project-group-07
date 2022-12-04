import Phaser from 'phaser';
import ScoreLabel from './ScoreLabel';

import backgroundSky from '../../img/trackingBackground.jpg';
import bombAsset from '../../assets/bomb.png';


const BOMB_KEY = 'bomb';

class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    this.player = undefined;
    this.cursors = undefined;
    this.scoreLabel = undefined;
    this.gameOver = false;
  }

  preload() {
    this.load.image('sky', backgroundSky);
    this.load.image(BOMB_KEY, bombAsset);

  }

  create() {
    this.add.image(400, 300, 'sky').setScale(2);
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
    this.cursors = this.input.mousePointer.active;

    /* The Collider takes two objects and tests for collision and performs separation against them.
    Note that we could call a callback in case of collision... */
  }

  update() {
    if (this.gameOver) {
      return;
    }

    console.log(this.input.mousePointer.x, this.input.mousePointer.y);
  }



  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);
    // console.log('score:', label);
    this.add.existing(label);

    return label;
  }

  hitBomb(player) {
    this.scoreLabel.setText(`GAME OVER : ( \nYour Score = ${this.scoreLabel.score}`);
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.gameOver = true;
  }
}

export default GameScene;
