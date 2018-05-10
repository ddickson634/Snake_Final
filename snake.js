const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

//make unit
const box = 32;

//load images
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";
//make snake
let snake = []
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

// create food
let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

//get score

let score = 0;

//snake controls

let d;

document.addEventListener("keydown",direction);

function direction(event){
    
    if(event.keyCode == 37){
        d = "LEFT";
    }else if(event.keyCode == 38){
        d = "UP";
    }else if(event.keyCode == 39){
        d = "RIGHT";
    }else if(event.keyCode == 40){
        d = "DOWN";
    }
    
}

//function to draw everything
function draw(){
    
   //draw background 
    ctx.drawImage(ground,0,0);
    
    //draw snakehead
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    //draw food
    ctx.drawImage(foodImg, food.x, food.y);
    
    //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    //remove tail
    snake.pop();
    
    //directions
    
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    
    //make a new head square
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    snake.unshift(newHead);
    
    // draw score
    ctx.fillStyle = "white";
    ctx.font = "40px Changa one";
    ctx.fillText(score,2*box,1.6*box);
    
}

let game = setInterval(draw,100);