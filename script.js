let canvas = document.getElementById("game");
let context = canvas.getContext("2d");
let box = 32;

function createBackground(){
context.fillStyle = "#4FD3C4"
context.fillRect(0,0, 16 * box, 16 * box) //X,y Position, widht and height
}

createBackground()