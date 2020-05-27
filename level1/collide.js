function collide(a,b){
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return  aBox.x + aBox.width  > bBox.x &&
            aBox.x < bBox.width  + bBox.x &&
            aBox.y + aBox.height > bBox.y &&
            aBox.y < bBox.height + bBox.y
}