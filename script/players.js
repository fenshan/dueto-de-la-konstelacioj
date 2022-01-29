var playersClass = function(){
    this.colorArrow
    this.colorPos = 0
    this.colorKey = game.input.keyboard.addKey('Q');

    this.shapeArrow
    this.shapePos = elements.length - 1
    this.shapeKey = game.input.keyboard.addKey('P');

    this.changeArrowPosEvent
};

playersClass.prototype = {

    create: function(){
        this.iniArrows(this.colorArrow, elementsXPos[this.colorPos], game.world.centerY - 80, 180)
        this.iniArrows(this.shapeArrow, elementsXPos[this.shapePos], game.world.centerY + 80, 0)

        //this.changeArrowPosEvent = game.time.addEvent({ delay: 2000, callback: this.onArrowPos, callbackScope: game, loop: true});
        //this.changeArrowPosEvent = game.time.delayedCall(2000, this.onArrowPos, [], game);


    },
    
    update: function(){
        
    }, 

    iniArrows: function(arrow, xPos, yPos, angle){
        arrow = game.add.sprite(xPos, yPos, 'arrow');
        arrow.pivot.x = spriteDim/2
        arrow.pivot.y = spriteDim/2
        arrow.scale.setTo(spritesScaleMult/2, spritesScaleMult/2);
        arrow.angle = angle
    }, 

    onArrowPos: function()
    {
        shapeArrow.setScale(1); //todo change
    }
}