var players = function(){
    //this.p1Pos = 0;
    //this.p2Pos = elements.length - 1;
    //this.p1Con = 'q'
    //this.p2Con = 'p'
};

players.prototype = {
        
    create: function(){
        //game.add.sprite(0, 0, sprites[0])

        // this.player = game.add.sprite(game.world.centerX,game.world.centerY,'jolly',1);
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