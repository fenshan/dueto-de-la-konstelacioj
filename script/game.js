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
elementSprites = []
elementIShapes = []
elementIColors = []
elementsXPos = [200, 333, 467, 600]
let elementsYPos
spritesScaleMult = 0.5; 
let players
let recipe
let winlose

function preload () {
  //bacground
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
  game.load.image('p_no', 'assets/sprites/P_key_nonpressed.png')
  game.load.image('p_yes', 'assets/sprites/P_keyword_pressed.png')
  game.load.image('q_no', 'assets/sprites/Q_key_nonpressed.png')
  game.load.image('q_yes', 'assets/sprites/Q_keyword_pressed.png')
  game.load.image('clock', 'assets/sprites/time_bar_clock.png')
  game.load.image('time_fill', 'assets/sprites/time_bar_base.png')
  game.load.image('time_frame', 'assets/sprites/time_bar_frame.png')
}

function create () {
  background = game.add.sprite(0, 0, 'background')
  background.tint = 0x330022;
  elementsYPos = game.world.centerY + 50
  
  iniElements()
  //console.log("te odio")

  players = new playersClass();
  players.create();

  winlose = new winloseClass();
  winlose.create();

  recipe = new recipeClass();
  recipe.create();
}

function update () {
  players.update();
  winlose.update();
  recipe.update();
}

function loseGame(){
  game.state.restart()
  //todo fallo elementos mesa
  //se puede hacer con escenas????
  //borrar todo, parar timers y poner puntiación
  //reiniciar todo con un click
}

//ini elements in the table
function iniElements() {
  i = -1;
  while(++i < N){
    elementIShapes.push(getRandom(sprites.length))
    elementIColors.push(getRandom(colors.length))
    elementSprites.push(iniSprite(i))
  }
}

//ini a sprite of the table
function iniSprite(i) {
  shape = elementIShapes[i]
  color = elementIColors[i]

  item = game.add.sprite(elementsXPos[i], elementsYPos, sprites[shape])
  item.pivot = new PIXI.Point(spriteDim/2, spriteDim/2);
  item.scale.setTo(spritesScaleMult, spritesScaleMult);
  item.tint = colors[color]

  return item
}

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

//change element shape
function changeShape(i)
{
  elementIShapes[i] = (elementIShapes[i] + 1) % sprites.length
  elementSprites[i].destroy()
  elementSprites[i] = iniSprite(i)
  tryWin()
}

//change element color
function changeColor(i)
{
  elementIColors[i] = (elementIColors[i] + 1) % colors.length
  elementSprites[i].destroy()
  elementSprites[i] = iniSprite(i)
  tryWin()
}

function tryWin()
{
  winlose.isWin(recipe.elementIColors, recipe.elementIShapes, elementIColors, elementIShapes)
  //todo if win, freezee the screen for 1s
}

