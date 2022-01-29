// Initialize the Phaser Game object and set default game window size
const game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { //todo phaser.auto?
  preload: preload,
  create: create,
  update: update
})

// Declare shared variables at the top so all methods can access them
let sprites = []
let elements = []
let N = 4
//yellow #EBE97A // orange #EBA66E // red #EB6382 // purple #9957EB // blue #4BD3EB // green #86EB95 //
var colors = [0xEBE97A, 0xEBA66E, 0xEB6382, 0x9957EB, 0x4BD3EB, 0x86EB95];

function preload () {
  //bacground  //todo change link
  game.load.image('background', 'https://phaser.io/content/tutorials/making-your-first-phaser-3-game/part3.png')
  
  //elements  //todo change links
  game.load.image('shape0', 'assets/sprites/circle.png')
  game.load.image('shape1', 'assets/sprites/square.png')
  game.load.image('shape2', 'assets/sprites/star.png')
  game.load.image('shape3', 'assets/sprites/triangle.png')
  //game.load.image('shape4', 'assets/sprites/moon.png')
  //game.load.image('shape5', 'assets/sprites/.png')
  sprites = ['shape0', 'shape1', 'shape2', 'shape3']; //, 'shape4', 'shape5']
}

function create () {
  background = game.add.sprite(0, 0, 'background')
  background.tint = 0x000000;
  
  iniElements()
}

function update () {}

//ini elements in the table
function iniElements() {

  yPos = 300
  xPos = [200, 333, 467, 600]
  pivotPos = 80; //160px
  scaleMult = 0.5; //80px
  
  i = -1;
  while(++i < N){
    item = game.add.sprite(xPos[i], yPos, sprites[getRandom(sprites.length)])
    item.pivot.x = pivotPos
    item.pivot.y = pivotPos
    item.scale.setTo(scaleMult, scaleMult);
    item.tint = colors[getRandom(colors.length)]
    elements.push(item)
  }
}

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

