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

    level3.addChild(bullet);

    bulletCount += 1;

    return bullet;
}

function total_score()
{
    let negations = 0;
    if(bullets.length>7)
    {
        negations = bullets.length -7;
    }

    totalScore = ((enemies.length - filteredAry.length)*7) - ((negations)*3);


    return totalScore;
}

function after_comp()
{
    let text = new PIXI.Text("Shots used: " + bullets.length); 
    text.x = app.view.width / 2;
    text.y = (app.view.height / 2) - 50;
    text.anchor.set(0.5);
    text.style = new PIXI.TextStyle({
        fill:0xFFFFFF,
        fontSize:40,
    });    

    let text2 = new PIXI.Text("Total Score: " + total_score());
    text2.x = app.view.width / 2;
    text2.y = app.view.height / 2;
    text2.anchor.set(0.5);
    text2.style = new PIXI.TextStyle({
        fill:0xFFFFFF,
        fontSize:40,
    }); 

    
    app.stage.addChild(text);
    app.stage.addChild(text2);
}

function next_level()
{
    var data =  "<a href=\" level3.html \"><button type=\"button\" class=\"btn btn-info\">Retry</button></a>";
    var data1 =  "<a href=\" level3.html \"><div role=\"alert\" class=\"alert alert-success\">You are the CEO of swag, and that\'s so damn true...!!! </div></a>";
        // <div class="alert alert-success" role="alert">
        // A simple success alert—check it out!
        // </div>
    if(this_var==true && (total_score())<101)
    {
        $('.myDiv').after("<br/>"+data);  
        this_var=false;
    }
    else if(this_var==true && (total_score())>=101)
    {
        $('.myDiv').after("<br/>"+data1);  
        this_var=false;
    }
}

