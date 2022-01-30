var winloseClass = function(){
    this.points
    this.pointsText
    this.time_bar
    this.timetoLose = 60.0 //todo adjust this time 30.0
    this.timeStartRecipe
};

winloseClass.prototype = {

    create: function(){
        this.time_bar = game.add.sprite(32, 10, 'time_fill')
        game.add.sprite(10, 10, 'time_frame')        
        this.UpdateTimeStartRecipe()
        this.points = 0
        this.UpdatePointsUI();
    },
    
    update: function(){
        //update time bar UI
        currentTime = game.time.totalElapsedSeconds();
        scale = 1 - (currentTime - this.timeStartRecipe) * 1.0/this.timetoLose
        this.time_bar.scale.setTo(scale, 1)

        //check if time has finished (without winning) -> lose
        if (currentTime - this.timeStartRecipe > this.timetoLose)
        {
            loseGame();
        }
    }, 

    isWin: function(RColor, RShape, EColor, EShape){        
        found = []
        for (let i = 0; i < N; i++) found.push(false)
        
        for (let i = 0; i < N; i++) { //recipes
            for (let j = 0; j < N; ++j) { //elements
                if (!found[j] && RColor[i] == EColor[j] && RShape[i] == EShape[j])
                {
                    found[j] = true;
                    // console.log(i + " " + j)
                    break;
                }
                else if (j == N - 1)
                {
                    // console.log("no")
                    return false;
                }
            }
        }
        
        this.points += 13
        this.UpdatePointsUI();

        //change recipe and restart timer
        recipe.restartRecipe()
        this.UpdateTimeStartRecipe()

        return;
    },

    UpdateTimeStartRecipe: function()
    {
        this.timeStartRecipe = game.time.totalElapsedSeconds();
    }, 

    UpdatePointsUI: function()
    {
        if (this.pointsText) this.pointsText.destroy()
        //{font: scoreFont, fill: '#39d179', stroke: '#ffffff', strokeThickness: 6}
        var style = {font: "30px georgia", fill: '#ffffff', boundsAlignH: "center", boundsAlignV: "middle" }
        this.pointsText = game.add.text(0, 0, this.points, style);        
        this.pointsText.setTextBounds(650, 17, 135, 100);

        // var bar = game.add.graphics();
        // bar.beginFill(0xffffff, 0.2);
        // bar.drawRect(650, 17, 135, 100);
    }
}

