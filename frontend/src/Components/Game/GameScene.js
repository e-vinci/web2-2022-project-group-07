import Phaser from 'phaser';
import ScoreLabel from './ScoreLabel';

import backgroundSky from '../../img/trackingBackground.jpg';
import bombAsset from '../../assets/bomb.png';


const BOMB_KEY = 'bomb';
let player;
let cursors;

class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');

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
    player = this.add.circle(400, 300, 50, 0x0000ff);
    this.physics.add.existing(player,false);
    cursors = this.input.mousePointer;
    player.body.setCollideWorldBounds(true);

    /* The Collider takes two objects and tests for collision and performs separation against them.
    Note that we could call a callback in case of collision... */
  }

  update() {
    if (this.gameOver) {
      return;
    }
      player.body.setVelocity(cursors.x, cursors.y);
      // console.log(cursors.x, cursors.y);
  }




  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);
    // console.log('score:', label);
    this.add.existing(label);

    return label;
  }

  /* hitBomb(player) {
    this.scoreLabel.setText(`GAME OVER : ( \nYour Score = ${this.scoreLabel.score}`);
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.gameOver = true;
  } */
}

export default GameScene;
