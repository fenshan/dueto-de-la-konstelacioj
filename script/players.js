var playersClass = function(){
    this.p1Arrow
    this.p1Pos = 0
    this.p1Con = 'q'

    this.p2Arrow
    this.p2Pos = elements.length - 1    
    this.p2Con = 'p'
};

playersClass.prototype = {

    create: function(){
        p1Arrow = game.add.sprite(elementsXPos[0],200, 'arrow');
        p1Arrow.pivot.x = spriteDim/2
        p1Arrow.pivot.y = spriteDim/2



        
        // this.player.anchor.setTo(0.5,0.5);
        // game.physics.arcade.enable(this.player);
        // this.player.body.setSize(25,55,0,0);
        // this.player.body.collideWorldBounds = true;
        // this.player.body.gravity.set(0,game.rnd.integerInRange(500,800));
        // //this.handleBounce(2);
        
        // this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        // this.cursor = game.input.keyboard.createCursorKeys();
        
        // this.yOrig = this.player.y;
        // this.yChange = 0;
        // this.cameraYMin = 99999;
    },
    
    update: function(){
        // game.world.setBounds(0,-this.yChange,game.world.width,game.height+this.yChange);
        // this.cameraYMin = Math.min(this.cameraYMin,this.player.y-game.height+300);
        // //game.camera.y -= 1;
        // game.camera.y = this.cameraYMin;
    }
}