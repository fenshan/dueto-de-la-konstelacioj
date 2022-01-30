var playersClass = function(){
    this.colorArrow
    this.colorPos = 0
    this.colorKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);

    this.shapeArrow
    this.shapePos = N - 1
    this.shapeKey = game.input.keyboard.addKey(Phaser.Keyboard.P);

    //timer to change the position of the arrows
    this.timetoChange = 2 //todo adjust time. quizás es guay que sea un número random entre unos parámetros?
    //para que se desajusten los tiempos de ambos jugadores
    this.timeLastChange
};

playersClass.prototype = {

    create: function(){
        this.colorArrow = this.iniArrows(elementsXPos[this.colorPos], game.world.centerY - 80, 180)
        this.shapeArrow = this.iniArrows(elementsXPos[this.shapePos], game.world.centerY + 80, 0)

        this.UpdateTimeLastChange();

        this.colorKey.onDown.add(this.colorKeyPressed, this)
        this.shapeKey.onDown.add(this.shapeKeyPressed, this)

    },
    
    update: function(){
        currentTime = game.time.totalElapsedSeconds();
        if (currentTime - this.timeLastChange > this.timetoChange)
        {
            this.ChangeArrowPos();
            this.UpdateTimeLastChange();
        }
    }, 

    colorKeyPressed: function(){
        changeColor(this.colorPos)
    },

    shapeKeyPressed: function(){
        changeShape(this.shapePos)
    },

    iniArrows: function(xPos, yPos, angle){
        arrow = game.add.sprite(xPos, yPos, 'arrow');
        arrow.pivot = new PIXI.Point(spriteDim/2, spriteDim/2);
        arrow.scale.setTo(spritesScaleMult/2, spritesScaleMult/2);
        arrow.angle = angle
        return arrow
    }, 

    ChangeArrowPos: function()
    {
        this.colorPos = (this.colorPos + 1) % N
        this.shapePos = (this.shapePos - 1 + N) % N

        this.colorArrow.position.x = elementsXPos[this.colorPos]
        this.shapeArrow.position.x = elementsXPos[this.shapePos]
    },

    UpdateTimeLastChange: function()
    {
        this.timeLastChange = game.time.totalElapsedSeconds();
    }
}