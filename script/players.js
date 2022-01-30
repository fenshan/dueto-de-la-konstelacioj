var playersClass = function(){
    this.colorArrow
    this.colorPos = 0
    this.colorKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);

    this.shapeArrow
    this.shapePos = N - 1
    this.shapeKey = game.input.keyboard.addKey(Phaser.Keyboard.P);

    //timer to change the position of the arrows
    this.timetoChangeColor
    this.timeLastChangeColor
    this.timetoChangeShape
    this.timeLastChangeShape
};

playersClass.prototype = {

    create: function(){
        this.colorArrow = this.iniArrows(elementsXPos[this.colorPos], game.world.centerY - 80, 180)
        this.shapeArrow = this.iniArrows(elementsXPos[this.shapePos], game.world.centerY + 80, 0)

        this.timeLastChangeColor = game.time.totalElapsedSeconds();
        this.timeLastChangeShape = game.time.totalElapsedSeconds();
        this.timetoChangeColor = this.getRandomTimeToChange()
        console.log(this.timetoChangeColor)
        this.timetoChangeShape = this.getRandomTimeToChange()
        console.log(this.timetoChangeShape)

        this.colorKey.onDown.add(this.colorKeyPressed, this)
        this.shapeKey.onDown.add(this.shapeKeyPressed, this)

    },
    
    update: function(){
        currentTime = game.time.totalElapsedSeconds();
        if (currentTime - this.timeLastChangeColor > this.timetoChangeColor)
        {
            this.ChangeColorArrowPos();
            this.timeLastChangeColor = game.time.totalElapsedSeconds();
            this.timetoChangeColor = this.getRandomTimeToChange()
            console.log(this.timetoChangeColor)
        }
        if (currentTime - this.timeLastChangeShape > this.timetoChangeShape)
        {
            this.ChangeShapeArrowPos();
            this.timeLastChangeShape = game.time.totalElapsedSeconds();
            this.timetoChangeShape = this.getRandomTimeToChange()
            console.log(this.timetoChangeShape)
        }
    }, 

    getRandomTimeToChange: function(){
        //between 1.0 and 3.0
        return (getRandom(201) + 100) * 1.0/100
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

    ChangeColorArrowPos: function()
    {
        this.colorPos = (this.colorPos + 1) % N
        this.colorArrow.position.x = elementsXPos[this.colorPos]
    },

    ChangeShapeArrowPos: function()
    {
        this.shapePos = (this.shapePos - 1 + N) % N
        this.shapeArrow.position.x = elementsXPos[this.shapePos]
    }
}