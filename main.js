function createCircle() {
    
    let circle= new Circle();
    let ctx = document.getElementById("myCanvas").getContext("2d");
    circle.radius = Math.floor(Math.random() * 80);
    let color = circle.getRandomColor();
    circle.x = Math.random() * window.innerWidth;
    circle.y = Math.random() * window.innerHeight;
    
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

