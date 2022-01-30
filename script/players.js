var playersClass = function(){
    this.timeTap = 0.15
    this.doubleSpeed
    
    this.colorArrow
    this.colorPos = 0
    this.colorKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    this.colorKeySprite
    this.colorPressedTime

    this.shapeArrow
    this.shapePos = N - 1
    this.shapeKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
    this.shapeKeySprite
    this.shapePressedTime

    this.arrowMargin = 80
    this.keyMargin = 60

    //timer to change the position of the arrows
    this.timetoChangeColor
    this.timeLastChangeColor
    this.timetoChangeShape
    this.timeLastChangeShape
};

playersClass.prototype = {

    create: function(){
        this.colorArrow = this.iniArrows(elementsXPos[this.colorPos], elementsYPos - this.arrowMargin, 180)
        this.shapeArrow = this.iniArrows(elementsXPos[this.shapePos], elementsYPos + this.arrowMargin, 0)
        this.colorKeySprite = this.iniKeySprites(this.colorArrow.position.x, this.colorArrow.position.y - this.keyMargin, 'q_no')
        this.shapeKeySprite = this.iniKeySprites(this.shapeArrow.position.x, this.shapeArrow.position.y + this.keyMargin, 'p_no')

        this.timeLastChangeColor = game.time.totalElapsedSeconds();
        this.timeLastChangeShape = game.time.totalElapsedSeconds();
        this.timetoChangeColor = this.getRandomTimeToChange()
        this.timetoChangeShape = this.getRandomTimeToChange()

        this.colorKey.onDown.add(this.colorKeyPressed, this)
        this.shapeKey.onDown.add(this.shapeKeyPressed, this)
        this.colorKey.onUp.add(this.colorKeyUp, this)
        this.shapeKey.onUp.add(this.shapeKeyUp, this)

        this.doubleSpeed = false
    },
    
    update: function(){
        currentTime = game.time.totalElapsedSeconds();
        if (currentTime - this.timeLastChangeColor > this.timetoChangeColor)
        {
            this.ChangeColorArrowPos();
            this.timeLastChangeColor = game.time.totalElapsedSeconds();
            this.timetoChangeColor = this.getRandomTimeToChange()
            //console.log(this.timetoChangeColor)
        }
        if (currentTime - this.timeLastChangeShape > this.timetoChangeShape)
        {
            this.ChangeShapeArrowPos();
            this.timeLastChangeShape = game.time.totalElapsedSeconds();
            this.timetoChangeShape = this.getRandomTimeToChange()
            //console.log(this.timetoChangeShape)
        }

        //hold down keys
        if (this.colorKey.isDown && this.shapeKey.isDown) //todo que ninguno de los dos sea tap
        {
            this.doubleSpeed = true

        }
    }, 

    getRandomTimeToChange: function(){
        //between 1.0 and 3.0
        return (getRandom(201) + 100) * 1.0/100
    },

    colorKeyPressed: function(){
        this.colorPressedTime = game.time.totalElapsedSeconds(); 
        //key pressed animation
        this.colorKeySprite.loadTexture('q_yes')
        this.colorKeySprite.tint = 0x999999;
    },

    shapeKeyPressed: function(){
        this.shapePressedTime = game.time.totalElapsedSeconds();
        //key pressed animation
        this.shapeKeySprite.loadTexture('p_yes')
        this.shapeKeySprite.tint = 0x999999;
    },

    colorKeyUp: function(){
        currentTime = game.time.totalElapsedSeconds();
        //tap
        if (currentTime - this.colorPressedTime < this.timeTap)
            changeColor(this.colorPos)
        this.doubleSpeed = false

        //key up animation
        this.colorKeySprite.loadTexture('q_no')
        this.colorKeySprite.tint = 0xffffff;
    },

    shapeKeyUp: function(){
        currentTime = game.time.totalElapsedSeconds();
        //tap
        if (currentTime - this.shapePressedTime < this.timeTap)
            changeShape(this.shapePos)
        this.doubleSpeed = false

        //key up animation
        this.shapeKeySprite.loadTexture('p_no')
        this.shapeKeySprite.tint = 0xffffff;
    },

    iniArrows: function(xPos, yPos, angle){
        arrow = game.add.sprite(xPos, yPos, 'arrow');
        arrow.pivot = new PIXI.Point(spriteDim/2, spriteDim/2);
        arrow.scale.setTo(spritesScaleMult/2, spritesScaleMult/2);
        arrow.angle = angle
        return arrow
    }, 

    iniKeySprites: function(xPos, yPos, sp){
        key = game.add.sprite(xPos, yPos, sp)
        key.pivot = new PIXI.Point(spriteDim/2, spriteDim/2);
        key.scale.setTo(spritesScaleMult * 0.8, spritesScaleMult * 0.8);
        return key
    }, 

    ChangeColorArrowPos: function()
    {
        this.colorPos = (this.colorPos + 1) % N
        this.colorArrow.position.x = elementsXPos[this.colorPos]
        this.colorKeySprite.position.x = this.colorArrow.position.x
    },

    ChangeShapeArrowPos: function()
    {
        this.shapePos = (this.shapePos - 1 + N) % N
        this.shapeArrow.position.x = elementsXPos[this.shapePos]
        this.shapeKeySprite.position.x = this.shapeArrow.position.x
    }
}