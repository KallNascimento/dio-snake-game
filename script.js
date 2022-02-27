let canvas = document.getElementById("game");
let context = canvas.getContext("2d");
let box = 32;
let direction = "right";
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box

}

function createBackground() {
    context.fillStyle = "#4FD3C4"
    context.fillRect(0, 0, 16 * box, 16 * box) //X,y Position, widht and height
}

function createPlayer() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "#1C0A00";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function gameStart() {
    createBackground();
    createPlayer();
    let snakeY = snake[0].y;
    let snakeX = snake[0].x;

    if (direction === "right") snakeX += box;
    if (direction === "left") snakeX -= box;
    if (direction === "up") snakeY -= box;
    if (direction === "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);


}

let game = setInterval(gameStart(), 100);