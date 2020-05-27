function keysDown(e){
    keys[e.keyCode] = true;
}

function keysUp(e){
    keys[e.keyCode] = false;
}

function fireBullet(e){
    let bullet = createBullet();
    bullets.push(bullet);
    bulletCount+=1;
}

function createBullet(){
    let bullet = new PIXI.Sprite.from('images/bullet.png');
    bullet.anchor.set(0.5);
    bullet.x = player.x;
    bullet.y = player.y;
    bullet.speed = bulletSpeed;

    level1.addChild(bullet);

    bulletCount += 1;

    return bullet;
}

function total_score()
{
    let negations = 0;
    if(bullets.length>5)
    {
        negations = bullets.length -5;
    }

    totalScore = ((enemies.length - filteredAry.length)*5) - ((negations)*2);

    
    if(totalScore<0)
    {
        totalScore = 0;
    }
    
    return totalScore;
}

function after_comp()
{
    let text = new PIXI.Text("Shots used: " + bullets.length); 
    text.x = app.view.width / 2;
    text.y = (app.view.height / 2) - 50;
    text.anchor.set(0.5);
    text.style = new PIXI.TextStyle({
        fill:0x000000,
        fontSize:40,
    });    

    let text2 = new PIXI.Text("Total Score: " + total_score());
    text2.x = app.view.width / 2;
    text2.y = app.view.height / 2;
    text2.anchor.set(0.5);
    text2.style = new PIXI.TextStyle({
        fill:0x000000,
        fontSize:40,
    }); 

    
    app.stage.addChild(text);
    app.stage.addChild(text2);
}

function next_level()
{
    var data  =  "<a href=\" level2.html \"><button type=\"button\" class=\"btn btn-success\">Next Level</button></a>";
    var data1 =  "<a href=\" index.html \"><button type=\"button\" class=\"btn btn-info\">Restart</button></a>";
    
    if(this_var==true && (total_score())<40)
    {
        $('.myDiv').after("<br/>"+data1);  
        this_var=false;
    }
    else if(this_var==true && (total_score())>=40)
    {
        $('.myDiv').after("<br/>"+data);  
        this_var=false;
    }
}