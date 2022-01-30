var recipeClass = function(){
    this.elementsXPos = [95, 171, 248, 325] //todo change
    this.yPos = 67 //todo change
    this.spritesScaleMult = 0.25; 

    this.elementSprites = []
    this.elementIShapes = []
    this.elementIColors = []

    this.time_bar

    //timer to change the position of the ingredients of the recipe
    this.timetoChange = 2 //todo adjust time. quizás es guay que sea un número random entre unos parámetros?
    this.timeLastChange
};

recipeClass.prototype = {

    create: function(){
        game.add.sprite(10, 10, 'time_frame')
        this.time_bar = game.add.sprite(10, 10, 'time_fill')
        this.iniRecipe()
        this.UpdateTimeLastChange();
    },
    
    update: function(){
        currentTime = game.time.totalElapsedSeconds();
        if (currentTime - this.timeLastChange > this.timetoChange)
        {
            this.ChangeIngredientPos();
            this.UpdateTimeLastChange();
        }
    },

    //ini elements in the RECIPE
    iniRecipe: function() {        
        i = -1;
        while(++i < N){
        this.elementIShapes.push(getRandom(sprites.length))
        this.elementIColors.push(getRandom(colors.length))
        this.elementSprites.push(this.iniSprite(i))
        }
    },
    
    //ini one element of the recipe
    iniSprite: function(i) {
        shape = this.elementIShapes[i]
        color = this.elementIColors[i]
    
        item = game.add.sprite(this.elementsXPos[i], this.yPos, sprites[shape])
        item.pivot = new PIXI.Point(spriteDim/2, spriteDim/2);
        item.scale.setTo(this.spritesScaleMult, this.spritesScaleMult);
        item.tint = colors[color]
    
        return item
    },

    ChangeIngredientPos: function()
    {
        this.shuffle2arrays(this.elementIShapes, this.elementIColors)
        for (let i = 0; i < this.elementSprites.length; i++) {
            this.elementSprites[i].destroy()
            this.elementSprites[i] = this.iniSprite(i)
        }
    },

    UpdateTimeLastChange: function()
    {
        this.timeLastChange = game.time.totalElapsedSeconds();
    }, 

    shuffle2arrays: function (array1, array2)
    {
        let currentIndex = array1.length,  randomIndex;
        // While there remain elements to shuffle
        while (currentIndex != 0) {        
            // Pick a remaining element
            randomIndex = getRandom(currentIndex)
            currentIndex--;        
            // And swap it with the current element
            [array1[currentIndex], array1[randomIndex]] = [array1[randomIndex], array1[currentIndex]];
            [array2[currentIndex], array2[randomIndex]] = [array2[randomIndex], array2[currentIndex]];
        }
    }
}