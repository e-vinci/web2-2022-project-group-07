import { clearPage, renderPageTitle } from '../../utils/render';

const aimCanvas = new Canvas();

// ajouter un renderAimClickPage();
const aimclickpage = () => {
  clearPage();
  renderPageTitle('Aim Click Game');
};

// Setup
aimCanvas.setSize(800, 600);

// Run it !
run();

// Global Class
function Canvas() {
  // Canvas
  this.canvas = document.querySelector('#canvas_aim');
  this.ctx = this.canvas.getContext('2d');
  this.centerLeft = 0;
  this.centerTop = 0;

  // Cursor
  this.cursorX = -50;
  this.cursorY = -50;
  this.cursorSound = [];

  // Game Settings
  this.currentView = 'menu';
  this.mode = 0;

  // Listener
  this.canvas.addEventListener('mousemove', function (e) {
    this.boundingClientRect = this.getBoundingClientRect();
    aimCanvas.cursorX = e.clientX - this.boundingClientRect.left;
    aimCanvas.cursorY = e.clientY - this.boundingClientRect.top;
    return aimCanvas.cursorY;
  });
  this.canvas.addEventListener('mousedown', () => {
    // Menu Event
    if (aimCanvas.currentView === 'menu') {
      // Target Mode Icon
      if (
        aimCanvas.cursorX > aimCanvas.centerLeft - 75 &&
        aimCanvas.cursorX < aimCanvas.centerLeft + 75 &&
        aimCanvas.cursorY > aimCanvas.centerTop - 50 &&
        aimCanvas.cursorY < aimCanvas.centerTop + 100
      ) {
        aimCanvas.mode = new TargetMode();
        aimCanvas.currentView = 'targetMode';
        return aimCanvas.currentView;
      }
    }

    if (aimCanvas.currentView === 'targetMode') {
      aimCanvas.mode.shootFail += 1;

      aimCanvas.mode.targets.find(function (e, index) {
        this.dx = aimCanvas.cursorX - e.x;
        this.dy = aimCanvas.cursorY - e.y;
        this.dist = Math.abs(Math.sqrt(this.dx * this.dx + this.dy * this.dy));

        if (this.dist <= e.size) {
          aimCanvas.mode.shootFail -= 1;
          aimCanvas.mode.score += 1;
          return aimCanvas.mode.targets.splice(index, 1);
        }
      });
    }

    setTimeout(() => {
      aimCanvas.cursorSound.splice(aimCanvas.cursorSound[aimCanvas.cursorSound.length - 1], 1);
    }, 2000);
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      aimCanvas.mode = null;
      aimCanvas.currentView = 'menu';
      return aimCanvas.currentView;
    }
  });

  this.setSize = function (x, y) {
    this.canvas.width = x;
    this.canvas.height = y;
    this.centerLeft = this.canvas.width / 2;
    this.centerTop = this.canvas.height / 2;
    return this.centerTop;
  };

  this.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  this.controller = function () {
    if (this.currentView === 'targetMode') {
      this.mode.addTarget();
    }

    return this.view(this.currentView);
  };

  this.view = function (type) {
    this.clear();

    if (type === 'menu') {
      this.ctx.fillStyle = '#000';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'center';
      this.ctx.font = '30px Open Sans';
      this.ctx.fillText('CANVAS AIM TRAINING', this.centerLeft, this.centerTop - 100);

      this.ctx.fillStyle = '#c8c8c8';
      this.ctx.fillRect(this.centerLeft - 250, this.centerTop - 50, 150, 150);
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(this.centerLeft - 75, this.centerTop - 50, 150, 150);
      this.ctx.fillStyle = '#c8c8c8';
      this.ctx.fillRect(this.centerLeft + 100, this.centerTop - 50, 150, 150);

      aimCanvas.ctx.fillStyle = '#c8c8c8';

      aimCanvas.ctx.beginPath();
      aimCanvas.ctx.arc(this.centerLeft - 45, this.centerTop - 20, 10, 0, 2 * Math.PI);
      aimCanvas.ctx.closePath();
      aimCanvas.ctx.fill();

      aimCanvas.ctx.beginPath();
      aimCanvas.ctx.arc(this.centerLeft - 25, this.centerTop + 20, 20, 0, 2 * Math.PI);
      aimCanvas.ctx.closePath();
      aimCanvas.ctx.fill();

      aimCanvas.ctx.beginPath();
      aimCanvas.ctx.arc(this.centerLeft - 25, this.centerTop + 50, 5, 0, 2 * Math.PI);
      aimCanvas.ctx.closePath();
      aimCanvas.ctx.fill();

      aimCanvas.ctx.beginPath();
      aimCanvas.ctx.arc(this.centerLeft - 45, this.centerTop + 70, 10, 0, 2 * Math.PI);
      aimCanvas.ctx.closePath();
      aimCanvas.ctx.fill();

      aimCanvas.ctx.beginPath();
      aimCanvas.ctx.arc(this.centerLeft + 5, this.centerTop + 60, 10, 0, 2 * Math.PI);
      aimCanvas.ctx.closePath();
      aimCanvas.ctx.fill();

      aimCanvas.ctx.beginPath();
      aimCanvas.ctx.arc(this.centerLeft + 35, this.centerTop, 15, 0, 2 * Math.PI);
      aimCanvas.ctx.closePath();
      aimCanvas.ctx.fill();

      aimCanvas.ctx.beginPath();
      aimCanvas.ctx.arc(this.centerLeft + 30, this.centerTop + 50, 20, 0, 2 * Math.PI);
      aimCanvas.ctx.closePath();
      aimCanvas.ctx.fill();

      aimCanvas.ctx.fillStyle = '#e40700';
      aimCanvas.ctx.textAlign = 'center';
      aimCanvas.ctx.textBaseline = 'center';
      aimCanvas.ctx.font = '30px Open Sans';
      aimCanvas.ctx.fillText('Precision', this.centerLeft, this.centerTop + 40);
    } else if (type === 'targetMode') {
      if (this.mode.life === 0) {
        aimCanvas.ctx.fillStyle = '#404040';
        aimCanvas.ctx.textAlign = 'center';
        aimCanvas.ctx.textBaseline = 'center';
        aimCanvas.ctx.font = '50px Open Sans';
        aimCanvas.ctx.fillText('End', this.centerLeft, this.centerTop - 20);
        aimCanvas.ctx.font = '30px Open Sans';
        aimCanvas.ctx.fillText('Score : ' + this.mode.score, this.centerLeft, this.centerTop + 20);
        aimCanvas.ctx.fillText('Press ESCAPE', this.centerLeft, this.centerTop + 200);
      } else {
        this.ctx.fillStyle = '#959595';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'center';
        this.ctx.font = '80px Open Sans';
        this.ctx.fillText('♥'.repeat(this.mode.life), this.centerLeft, this.centerTop);

        aimCanvas.ctx.font = '30px Open Sans';
        aimCanvas.ctx.fillText('Score : ' + this.mode.score, this.centerLeft, this.centerTop + 30);
        aimCanvas.ctx.fillText(
          'Miss : ' + this.mode.shootFail,
          this.centerLeft,
          this.centerTop + 70,
        );

        this.mode.getTargets();
      }
    }
  };
}

// Game Mode
function TargetMode() {
  this.life = 3;
  this.score = 0;
  this.shootFail = 0;
  this.targets = [];
  this.targetsMaxSize = 50; // Unity : Pixel
  this.targetsRapidity = 0.2; // Unity : Pixel
  this.targetsTime = 2000 - this.score * 5; // Unity : Mills
  this.targetsLastAdd = Date.now();

  this.addTarget = function () {
    if (this.targets.length < 5 && Date.now() > this.targetsLastAdd + this.targetsTime) {
      this.targets.push(new Target());
      return (this.targetsLastAdd = Date.now());
    }
  };

  this.getTargets = function () {
    this.targets.forEach(function (value, index) {
      if (value.reset === true && value.size <= 0) {
        aimCanvas.mode.targets.splice(index, 1);
        return (aimCanvas.mode.life -= 1);
      }

      return value.draw();
    });
  };
}
function Target() {
  this.x = rand(
    aimCanvas.mode.targetsMaxSize,
    aimCanvas.canvas.width - aimCanvas.mode.targetsMaxSize,
  );
  this.y = rand(
    aimCanvas.mode.targetsMaxSize,
    aimCanvas.canvas.height - aimCanvas.mode.targetsMaxSize,
  );
  this.size = 0;
  this.reset = false;

  this.draw = function () {
    if (this.size < aimCanvas.mode.targetsMaxSize && this.reset === false) {
      this.size += aimCanvas.mode.targetsRapidity;
    } else {
      this.reset = true;

      if (this.size - aimCanvas.mode.targetsRapidity < 0) {
        return (this.size = 0);
      }

      this.size -= aimCanvas.mode.targetsRapidity;
    }

    aimCanvas.ctx.fillStyle = 'red';
    aimCanvas.ctx.beginPath();
    aimCanvas.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    aimCanvas.ctx.closePath();
    aimCanvas.ctx.fill();
  };
}

function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function run() {
  aimCanvas.controller();
  window.requestAnimationFrame(run);
}

export default aimclickpage;
