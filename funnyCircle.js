
class Circle {
    x;
    y;
    radius;
    constructor (x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getRandomHex() {
        return Math.floor(Math.random()*255);
    }

    getRandomColor() {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }

    
}

 
 
    
 
 
 
 