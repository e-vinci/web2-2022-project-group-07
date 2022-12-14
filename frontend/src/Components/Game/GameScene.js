import Phaser from 'phaser';
import ScoreLabel from './ScoreLabel';

import backgroundSky from '../../img/trackingBackground.jpg';
import bombAsset from '../../assets/bomb.png';
import trackingButton from '../../img/tracking_button.png';

const BOMB_KEY = 'bomb';

let circle;

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
    this.load.image('trackButton', trackingButton);
  }

  create() {
     this.scene.pause();
     this.scene.launch('StartGame');

    this.add.image(400, 300, 'sky').setScale(2);
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
   // let test = this.add.sprite(180,400, 'trackButton').setScale(0.1);
    circle =this.matter.add.image(10, 30, 'trackButton'); // initial position of the circle
    this.matter.world.setBounds().disableGravity();
    /*
    this.events.on('pause', function () {
      console.log('Scene A paused');
    });
    */

    circle.setCircle(640);
    circle.setScale(0.08);

    circle.setAngularVelocity(0.82);
    circle.setBounce(1.001);
    circle.setFriction(0, 0, 10);
  }

  update() {
    if (this.gameOver) {
      return;
    }
    const xPosition=circle.x;
    const yPosition=circle.y;

    if(this.input.mousePointer.position.x<=800 && this.input.mousePointer.position.y<=500 && this.input.mousePointer.position.x>0 && this.input.mousePointer.position.y>0) {
      // console.log(this.input.mousePointer.x, this.input.mousePointer.y);
      if (this.input.mousePointer.x > xPosition - 50 && this.input.mousePointer.x < xPosition + 50 && this.input.mousePointer.y > yPosition - 50 && this.input.mousePointer.y < yPosition + 50) {
        this.scoreLabel.add(1);
      } else {
        this.scoreLabel.add(-1);
      }
    }
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);
    // console.log('score:', label);
    this.add.existing(label);

    return label;
  }
}

/*
var startGame = new Phaser.Class({
  Extends: Phaser.Scene,

    initialize:
        function startGame() {
        Phaser.Scene.call(this, { key: 'startGame' });
    },
  preload() {
    this.load.image('sky', backgroundSky);
    this.load.image(BOMB_KEY, bombAsset);
    this.load.image('trackButton', trackingButton);
  },

  create() {
    this.add.image(400, 300, 'sky').setScale(2);
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
    this.matter.world.setBounds().disableGravity();

    // let test = this.add.sprite(180,400, 'trackButton').setScale(0.1);
    circle =this.matter.add.image(10, 30, 'trackButton'); // initial position of the circle

    this.events.on('pause', function () {
      console.log('Scene A paused');
    })
    circle.setCircle(640);
    circle.setScale(0.08);

    circle.setAngularVelocity(0.82);
    circle.setBounce(1.001);
    circle.setFriction(0, 0, 10);


  },
  update() {
    if (this.gameOver) {
      return;
    }
    const xPosition=circle.x;
    const yPosition=circle.y;

    if(this.input.mousePointer.position.x<=800 && this.input.mousePointer.position.y<=500 && this.input.mousePointer.position.x>0 && this.input.mousePointer.position.y>0) {
      // console.log(this.input.mousePointer.x, this.input.mousePointer.y);
      if (this.input.mousePointer.x > xPosition - 50 && this.input.mousePointer.x < xPosition + 50 && this.input.mousePointer.y > yPosition - 50 && this.input.mousePointer.y < yPosition + 50) {
        this.scoreLabel.add(1);
      } else {
        this.scoreLabel.add(-1);
      }
    }
  },

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


export default GameScene;
