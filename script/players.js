var playersClass = function(){
    this.colorArrow
    this.colorPos = 0
    this.colorKey = game.input.keyboard.addKey('Q');

    this.shapeArrow
    this.shapePos = elements.length - 1
    this.shapeKey = game.input.keyboard.addKey('P');

    this.timeChangeArrowPos = 2 //todo change
    this.timeLastChange
};

playersClass.prototype = {

    create: function(){
        this.colorArrow = this.iniArrows(elementsXPos[this.colorPos], game.world.centerY - 80, 180)
        this.shapeArrow = this.iniArrows(elementsXPos[this.shapePos], game.world.centerY + 80, 0)

        this.UpdateTimeLastChange();

        //this.changeArrowPosEvent = game.time.events.add(Phaser.Timer.SECOND * this.timeChangeArrowPos, this.onArrowPos, this);
    },
    
    update: function(){
        currentTime = game.time.totalElapsedSeconds();
        if (currentTime - this.timeLastChange > this.timeChangeArrowPos)
        {
            this.ChangeArrowPos();
            this.UpdateTimeLastChange();
        }




        
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
        this.colorPos = (this.colorPos + 1) % elements.length
        this.shapePos = (this.shapePos - 1 + elements.length) % elements.length

        this.colorArrow.position.x = elementsXPos[this.colorPos]
        this.shapeArrow.position.x = elementsXPos[this.shapePos]
    },

    UpdateTimeLastChange: function()
    {
        this.timeLastChange = game.time.totalElapsedSeconds();
    }
}