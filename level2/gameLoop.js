function gameLoop(delta){

    //W
    if(keys["87"]) {
        player.y-=5;
    }

    //S
    if(keys["83"]) {
        player.y+=5;
    }

    // updateBullets(delta);

    for(let i=0 ;i<bullets.length; i++)
    {
        bullets[i].rotation += 0.1;
        bullets[i].x += 9.0305;          //9.177222981616737.. 9.0305
        bullets[i].y -= dys[i];
        dys[i]-=0.18;
    }

    enemies[0].y+=1.3;
    enemies[1].y+=2;
    enemies[2].y+=1.4;
    enemies[3].y+=1.16;
    enemies[4].y+=1.9;
    enemies[5].y+=1.192;
    enemies[6].y+=1.5;
    enemies[7].y+=1.65;
    enemies[8].y+=1.31;
    enemies[9].y+=1.26;
    enemies[10].y+=1.75;
    enemies[11].y+=1.34;
    enemies[12].y+=1.54;


    for(let i=0 ; i<bullets.length; i++){
        for(let j=0; j<enemies.length; j++)
        {
            if (collide(bullets[i], enemies[j]))
            {
                cols[j]=1;
                level2.removeChild(enemies[j]);
                
            }
        }
    }

    filteredAry = cols.filter(function(e) { return e !== 1 })
    
    if(filteredAry.length==0)
    {
        app.ticker.stop();
        after_comp();
        total_score();
        next_level();
    }
    

    for(let i=0; i<enemies.length; i++)
    {
        if(enemies[3].y>555)
        {
            level2.removeChild(enemies[i]);
            app.ticker.stop();
            after_comp();
            total_score();
            next_level();
        }
    }    
}

