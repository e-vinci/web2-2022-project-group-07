import Phaser from 'phaser';
import ScoreLabel from './ScoreLabel';

import backgroundSky from '../../img/trackingBackground.jpg';
import bombAsset from '../../assets/bomb.png';


const BOMB_KEY = 'bomb';
let circle;
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
    this.matter.world.setBounds().disableGravity();
    this.circle = this.matter.add.circle(600, 400, 50);
    this.physics.add.sprite(100, 100, circle);
    cursors = this.input.mousePointer;
    this.circle.setVelocity(3,1);



    /* The Collider takes two objects and tests for collision and performs separation against them.
    Note that we could call a callback in case of collision... */
  }

  update() {
    if (this.gameOver) {
      return;
    }
    circle.setVelocity(3,1);
    circle.setAngularVelocity(0.01);
    circle.setBounce(1);
    circle.setFriction(0, 0, 0);
    circle.setInteractive();
    // circle.body.velocity.x=(Phaser.Math.RandomXY(cursors, 100).x);
    // circle.body.velocity.y=(Phaser.Math.RandomXY(cursors, 200).y);
    // circle.body.deltaMax.x = Phaser.Math.Between(0, 100);


   console.log(cursors.input.mousePointer.x, cursors.input.mousePointer.y);
  }




  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);
    // console.log('score:', label);
    this.add.existing(label);

    return label;
  }

  /* hitBomb(circle) {
    this.scoreLabel.setText(`GAME OVER : ( \nYour Score = ${this.scoreLabel.score}`);
    this.physics.pause();

    circle.setTint(0xff0000);

    circle.anims.play('turn');

    this.gameOver = true;
  } */
}

export default GameScene;
