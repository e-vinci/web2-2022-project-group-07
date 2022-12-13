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
    this.add.image(400, 300, 'sky').setScale(2);
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
    this.matter.world.setBounds().disableGravity();

   // let test = this.add.sprite(180,400, 'trackButton').setScale(0.1);
    circle =this.matter.add.image(10, 30, 'trackButton'); // initial position of the circle
    // this.scene.pause();
    circle.setCircle(640);
    circle.setScale(0.08);

    circle.setAngularVelocity(0.82);
    circle.setBounce(1.001);
    circle.setFriction(0, 0, 10);

    // player
    /* The Collider takes two objects and tests for collision and performs separation against them.
    Note that we could call a callback in case of collision... */
  }

  update() {
    if (this.gameOver) {
      return;
    }
    const xPosition=circle.x;
    const yPosition=circle.y;

    if(this.input.mousePointer.position.x<=800 && this.input.mousePointer.position.y<=500 && this.input.mousePointer.position.x>0 && this.input.mousePointer.position.y>0){
      // console.log(this.input.mousePointer.x, this.input.mousePointer.y);
      if(this.input.mousePointer.x>xPosition-50 && this.input.mousePointer.x<xPosition+50 && this.input.mousePointer.y>yPosition-50 && this.input.mousePointer.y<yPosition+50 ){
        this.scoreLabel.add(1);
      }
      else{
        this.scoreLabel.add(-1);
      }

    }


    // circle.body.velocity.x=(Phaser.Math.RandomXY(cursors, 100).x);
    // circle.body.velocity.y=(Phaser.Math.RandomXY(cursors, 200).y);
    // circle.body.deltaMax.x = Phaser.Math.Between(0, 100);


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
