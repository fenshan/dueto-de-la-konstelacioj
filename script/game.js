// Initialize the Phaser Game object and set default game window size
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { //todo phaser.auto?
  preload: preload,
  create: create,
  update: update
})

// Declare shared variables at the top so all methods can access them
sprites = []
spriteDim = 160
//yellow #EBE97A // orange #EBA66E // red #EB6382 // purple #9957EB // blue #4BD3EB // green #86EB95 //
colors = [0xEBE97A, 0xEBA66E, 0xEB6382, 0x9957EB, 0x4BD3EB, 0x86EB95];

N = 4
elements = []
elementsXPos = [200, 333, 467, 600]
spritesScaleMult = 0.5; 
let players

function preload () {
  //bacground  //todo change link
  game.load.image('background', 'assets/sprites/background.png')
  
  //elements 
  game.load.image('shape0', 'assets/sprites/circle.png')
  game.load.image('shape1', 'assets/sprites/square.png')
  game.load.image('shape2', 'assets/sprites/star.png')
  game.load.image('shape3', 'assets/sprites/triangle.png')
  game.load.image('shape4', 'assets/sprites/moon.png')
  game.load.image('shape5', 'assets/sprites/diamond.png')
  sprites = ['shape0', 'shape1', 'shape2', 'shape3', 'shape4', 'shape5'];

  //other sprites
  game.load.image('arrow', 'assets/sprites/arrow_player.png')
  game.load.image('stain', 'assets/sprites/paint_stain.png')
}

function create () {
  background = game.add.sprite(0, 0, 'background')
  background.tint = 0x330022;
  
  iniElements()
  //console.log("te odio")

  players = new playersClass();
  players.create();
}

function update () {
  players.update();
}

//ini elements in the table
function iniElements() {
  yPos = game.world.centerY
    
  i = -1;
  while(++i < N){
    item = game.add.sprite(elementsXPos[i], yPos, sprites[getRandom(sprites.length)])
    item.pivot = new PIXI.Point(spriteDim/2, spriteDim/2);
    item.scale.setTo(spritesScaleMult, spritesScaleMult);
    item.tint = colors[getRandom(colors.length)]
    elements.push(item)
  }
}

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

